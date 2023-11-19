import { Product } from './product.model';
import { CreateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const product: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  product.push(newProduct);
};

export const updateProduct = (id: string, changes: Product) => {
  //code
};
