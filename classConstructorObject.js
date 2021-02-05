class Student {
    constructor(Sname,Sage){
        this.name = Sname;
        this.age = Sage; 
    }
}
const studentOne = new Student("Jahidun Nur",23);
const studentTwo = new Student("Mahee Nur",22);
const newName = studentOne.name;
console.log(studentOne.age,studentTwo.age);