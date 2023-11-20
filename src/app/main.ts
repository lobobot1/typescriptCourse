import {faker} from '@faker-js/faker';
import { addProduct, product, updateProduct, findProduct } from './products/product.service'

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

console.log(product)

const product1 = product[0]

updateProduct(`${product1.id}`, {
    title: 'New Title',
    description: 'New Description'

})

findProduct({
    title: 'New Title',
    description: 'New Description'
})