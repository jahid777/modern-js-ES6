//array add all item by concat 
const ages = [10, 15];
const ages1 = [20, 25];
const ages2 = [30, 35];
const result = ages.concat(ages1).concat([5]).concat(ages2);
console.log(result);

//spread operator(...) adding arrays all items 
const ages = [10, 15];
const ages1 = [20, 25];
const ages2 = [30, 35];
const result = [...ages,...ages2,5,...ages2];
console.log(result);

//max number get by Math.max
const business = 650;
const doctor = 750;
const minister = 850;
const total = Math.max(business,doctor,minister);
console.log(total);

//getting max number using by spread operator 
const allMoney = [650, 750, 850];
const maximum = Math.max(...allMoney);
console.log(maximum); 


