import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';
  const page = parseInt(searchParams.get('page') || '0');
  const size = parseInt(searchParams.get('size') || '10');

  const filteredProducts = products.filter(product =>
    product.sku.toLowerCase().includes(searchTerm) ||
    product.name.toLowerCase().includes(searchTerm)
  );

  const start = page * size;
  const end = start + size;
  const content = filteredProducts.slice(start, end);

  const totalElements = filteredProducts.length;
  const totalPages = Math.ceil(totalElements / size);
  const metadata = {
    page,
    first: page === 0,
    last: page >= totalPages - 1,
    size,
    empty: content.length === 0,
    numberOfElements: content.length,
    totalElements,
    totalPages,
  };

  return NextResponse.json({ metadata, content });
}
