//getting the one item form the object by normal way
const person = {name: "jack william", age: 17, job:"programmer", gfName: "ema"
}
console.log(person.gfName);


// getting the same result by another way simply from an object
const person = {name: "jack william", age: 17, job:"programmer", gfName: "ema"
}
const {gfName} = person;
console.log(gfName);


//we can get more then one items from an object
const person = {name: "jack william", age: 17, job:"programmer", gfName: "ema"
}
const {job, age} = person;
console.log(job, age);


//we can get items from an array by calling the position number 
const friends = ["shakib", "arman", "king"];
const [tellTheFirstNum, nextNum] = friends;
console.log(tellTheFirstNum, nextNum);


//getting the all name by using the spread operator(...)
const friends = ["shakib", "arman", "king", "khan", "hero"];
const [firstName, ...othersName] = friends;
console.log(firstName);
console.log(othersName);
