// app/page.tsx
'use client';

import React, { Suspense } from 'react';
import ProductListContent from './products/ProductsList'

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListContent />
    </Suspense>
  );
}
