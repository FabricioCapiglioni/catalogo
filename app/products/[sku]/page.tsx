'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Product } from '@/data/products';

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();
  const sku = (params?.sku as string) || '';

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sku) {
      setError('SKU no proporcionado');
      setLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${sku}`);
        if (res.status === 404) {
          setError('No encontrado');
          setLoading(false);
          return;
        }
        if (res.status === 500) {
          setError('No se pudo cargar');
          setLoading(false);
          return;
        }
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [sku]);



  if (loading) {
    return (
      <div style={{ padding: '1rem' }}>
        <Typography variant="h4">Cargando...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '1rem' }}>
        <Typography variant="h4">{error}</Typography>
        <Button variant="outlined" onClick={() => router.back()} sx={{ mt: 2 }}>
          Volver
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Button variant="outlined" onClick={() => router.push('/')}>
        Volver
      </Button>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h1">
            {product?.name}
          </Typography>
          <Typography variant="subtitle1">SKU: {product?.sku}</Typography>
          <img
            src={product?.image}
            alt={product?.name}
            style={{
              width: '256px',
              height: '256px',
              objectFit: 'cover',
              marginTop: '1rem',
            }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Categoría: {product?.category.name}
          </Typography>
          <Typography variant="body1">Marca: {product?.brand}</Typography>
          <Typography variant="body1">
            Precio: ${product?.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Descripción:
          </Typography>
          <Typography variant="body2">
            {product?.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Especificaciones
          </Typography>
          {product?.specifications && product.specifications.length > 0 ? (
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>
                  <Typography variant="body2">
                    {spec.name}: {spec.value}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="body2">
              No hay especificaciones disponibles.
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
