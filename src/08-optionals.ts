
//optionals parameters or nullish coalescing declaration with ?: or ?? and be declareted after the obligatory parameters
export const createProduct = ( id: number | string , stock:number, isNew?:boolean) =>{
    return {
        id,
        stock,
        isNew
    }
}

const product = createProduct(1,2,true);

console.log(product)
