//this is the default value of the parameters
export const createProduct = ( id: (number | string)=1 , stock:number=34, isNew:boolean=false) =>{
    return {
        id,
        stock,
        isNew
    }
}

const product = createProduct(1,2,true);

console.log(product)