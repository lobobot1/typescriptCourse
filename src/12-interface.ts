type Size = 'small' | 'medium' | 'large';

interface Product {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    sizes: Size;
  };

const product: Product = {
  id: 1,
  title: 't-shirt',
  createdAt: new Date(),
  stock: 10,
  sizes: 'small',
};
