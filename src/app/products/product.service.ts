import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
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

export const updateProduct = (id: Product['id'], changes: UpdateProductDto):Product => {
  const index = product.findIndex((item) => item.id === id);
  const prevData = product[index];
  product[index] = {
    ...prevData,
    ...changes,
    updatedAt: faker.date.recent(),
  };
  return product[index];
};

export const findProduct = (dto: FindProductDto): Product[] =>{
    //code
    return product
}