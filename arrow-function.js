//single parameter double by function
function doubleIt (num){
    return num*2;
}
const double = doubleIt(2);
console.log(double);

//single parameter double by arrow
const doubleIt = num => num * 2;
const double = doubleIt(2);
console.log(double);

//two parameter and doing sum numbers
const add = (x ,y) => x+y;
const sum = add(2, 3);
console.log(sum);

//without parameter return number 
const give5 = () => 5;
const result = give5();
console.log(result);

//more then two work using by arrow 
const mathDo = (x ,y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = mathDo(7 ,5);
console.log(result);
