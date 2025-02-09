import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sku: string }> | { sku: string } }
) {
  const resolvedParams = await params;
  const { sku } = resolvedParams;

  await new Promise((resolve) => setTimeout(resolve, 500));

  const product = products.find((p) => p.sku === sku);
  if (!product) {
    return NextResponse.json({ message: 'No encontrado' }, { status: 404 });
  }

  return NextResponse.json(product);
}
