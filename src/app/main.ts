import {faker} from '@faker-js/faker';
import { addProduct } from './products/product.service'

for(let i = 0; i < 50 ;i++){
    addProduct({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        sizes: faker.helpers.arrayElement([ 'small', 'medium', 'large']),
        color: faker.color.human(),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements([]),
        price: parseInt(faker.commerce.price()),
        stock: faker.number.int({ min: 10, max: 100 }),
        categoryId: faker.string.uuid()
    }) 
}