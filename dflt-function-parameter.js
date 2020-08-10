//default parameter with if condition
function add (num1 , num2){
    if (num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15);
console.log(total);

//default parameter with or condition 
function add (num1 , num2){
  num2 = num2 || 0;
  return num1 + num2;
}
const total = add(15);
console.log(total);

//default parameter with supported parameter 
function add (num1 , num2 = 20){
    return num1 + num2;
}
const total = add(15);
console.log(total);