'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Container,
  TextField,
  InputAdornment,
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
import { Product } from '@/data/products';


type Metadata = {
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
};

type ApiResponse = {
  metadata: Metadata;
  content: Product[];
};

export default function ProductList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchProducts = async (search: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products?search=${encodeURIComponent(search)}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching products', error);
    }
    setLoading(false);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        router.push(`/?search=${encodeURIComponent(value)}`);
        fetchProducts(value);
      }, 500),
    [router]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    fetchProducts(initialSearch);
    return () => {
      debouncedSearch.cancel();
    };
  }, [initialSearch, debouncedSearch]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Catálogo de Productos
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <TextField
          label="Buscar por SKU o nombre"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          placeholder="Ej: SKU001 o Nombre del producto"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 4 }}
        />

        {loading ? (
          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {data?.content.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.sku}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name} <span style={{ fontSize: '0.8rem', color: '#777' }}>({product.sku})</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Categoría:</strong> {product.category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Marca:</strong> {product.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Precio:</strong> ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push(`/products/${product.sku}`)}
                    sx={{ m: 2 }}
                  >
                    Ver Detalle
                  </Button>
                </Card>
              </Grid>
            ))}

            {data && data.content.length === 0 && (
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  No se encontraron productos.
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
}
