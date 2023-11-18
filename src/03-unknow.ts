let a:any;
a=true
a=2
a='hola'

a.toUpperCase()

let b:unknown;
b=true
b=2
a='hola'

// b.toUpperCase() Error because unknown is not a type

//I need to verificate the type of data to use it

//like this
if(typeof b === 'string'){
    b.toUpperCase()
}


const parse = (str:string):unknown => {
    return JSON.parse(str);
}