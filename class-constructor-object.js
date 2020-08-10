class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunneccaaa";
    }
}
const student1 = new Student(1, "alom");
const student2 = new Student(2, "kamal");
console.log(student1, student2);
console.log(student1.name);