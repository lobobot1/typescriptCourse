const withOutEnd = () => {
    while(true){
        console.log('Hello')
    }
}

const neverSayNever = () => {
    throw new Error('Error')
}

const example = (input:unknown) => {
    if(typeof input === 'string'){
        console.log(input.toUpperCase())
    }else if(Array.isArray(input)){
        console.log(input)
    }
    return neverSayNever()
}