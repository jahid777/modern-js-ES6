class Parent{
    constructor(){
        this.fatherName = "schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("anol");
const baby2 = new Child("jerry");
console.log(baby);
console.log(baby2);