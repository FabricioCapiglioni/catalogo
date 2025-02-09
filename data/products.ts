export type Category = {
  id: string;
  name: string;
};

export type Product = {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  brand: string;
  price: number;
  stock: number;
  specifications?: { name: string; value: string }[];
};

export const products: Product[] = [
  {
    sku: 'SKU001',
    name: 'Producto 1',
    description: 'Este es el primer producto, ideal para uso diario.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat1', name: 'Categoría A' },
    brand: 'Marca Alpha',
    price: 49.99,
    stock: 10,
    specifications: [
      { name: 'Color', value: 'Rojo' },
      { name: 'Tamaño', value: 'M' },
    ],
  },
  {
    sku: 'SKU002',
    name: 'Producto 2',
    description: 'Un producto versátil y moderno para tus necesidades.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat2', name: 'Categoría B' },
    brand: 'Marca Beta',
    price: 59.99,
    stock: 5,
    specifications: [
      { name: 'Color', value: 'Azul' },
      { name: 'Material', value: 'Algodón' },
    ],
  },
  {
    sku: 'SKU003',
    name: 'Producto 3',
    description: 'Producto económico con gran rendimiento.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat1', name: 'Categoría A' },
    brand: 'Marca Gamma',
    price: 39.99,
    stock: 8,
    specifications: [
      { name: 'Color', value: 'Verde' },
      { name: 'Peso', value: '1kg' },
    ],
  },
  {
    sku: 'SKU004',
    name: 'Producto 4',
    description: 'Producto premium con características avanzadas.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat3', name: 'Categoría C' },
    brand: 'Marca Delta',
    price: 79.99,
    stock: 12,
    specifications: [
      { name: 'Color', value: 'Negro' },
      { name: 'Dimensiones', value: '30x20x10 cm' },
    ],
  },
  {
    sku: 'SKU005',
    name: 'Producto 5',
    description: 'Una opción confiable y duradera para el día a día.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat2', name: 'Categoría B' },
    brand: 'Marca Epsilon',
    price: 29.99,
    stock: 15,
    specifications: [
      { name: 'Color', value: 'Blanco' },
      { name: 'Garantía', value: '2 años' },
    ],
  },
  {
    sku: 'SKU006',
    name: 'Producto 6',
    description: 'Producto con alta eficiencia energética.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat3', name: 'Categoría C' },
    brand: 'Marca Zeta',
    price: 89.99,
    stock: 7,
    specifications: [
      { name: 'Color', value: 'Amarillo' },
      { name: 'Potencia', value: '100W' },
    ],
  },
  {
    sku: 'SKU007',
    name: 'Producto 7',
    description: 'Producto compacto y de fácil manejo.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat1', name: 'Categoría A' },
    brand: 'Marca Eta',
    price: 69.99,
    stock: 9,
    specifications: [
      { name: 'Color', value: 'Marrón' },
      { name: 'Capacidad', value: '500ml' },
    ],
  },
  {
    sku: 'SKU008',
    name: 'Producto 8',
    description: 'Producto de alto rendimiento para tareas exigentes.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat2', name: 'Categoría B' },
    brand: 'Marca Theta',
    price: 99.99,
    stock: 3,
    specifications: [
      { name: 'Color', value: 'Gris' },
      { name: 'Velocidad', value: '200rpm' },
    ],
  },
  {
    sku: 'SKU009',
    name: 'Producto 9',
    description: 'Producto robusto fabricado con materiales de calidad.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat3', name: 'Categoría C' },
    brand: 'Marca Iota',
    price: 109.99,
    stock: 4,
    specifications: [
      { name: 'Color', value: 'Rojo' },
      { name: 'Material', value: 'Plástico' },
    ],
  },
  {
    sku: 'SKU010',
    name: 'Producto 10',
    description: 'La última opción de nuestra línea, con gran relación calidad-precio.',
    image: 'https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg',
    category: { id: 'cat1', name: 'Categoría A' },
    brand: 'Marca Kappa',
    price: 59.99,
    stock: 20,
    specifications: [
      { name: 'Color', value: 'Azul oscuro' },
      { name: 'Dimensiones', value: '25x15x8 cm' },
    ],
  },
];
