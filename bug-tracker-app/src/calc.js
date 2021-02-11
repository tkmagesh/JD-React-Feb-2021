export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

//the add and subtract as encapsulated in module object and the module object is exported


//there can be ONE default export

const calc = { add, subtract };
export default calc;