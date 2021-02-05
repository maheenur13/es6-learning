class Parent{
    constructor(){
        this.fathername="Jahid";
    }
    sum(){
        const num1 =45;
        const num2 =54;
        const sum = num1+num2;
        return sum;
    }
}
class Child extends Parent{
    constructor(Sname){
        super();
        this.sum();
        this.name = Sname;
    }
}
const boy = new Child("Mahee Nur");
const girl = new Child("Anonna");
// console.log(Child.name);
console.log(boy.sum());
console.log(boy.name);
console.log(girl);