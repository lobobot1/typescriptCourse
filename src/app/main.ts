import { addProduct } from './products/product.service'

addProduct({
    id: 1,
    title: 't-shirt',
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 10,
    sizes: 'small',
    category: {
        id: 1,
        name: 't-shirt',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
})