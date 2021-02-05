const personInfo ={
    name:"Mahee",
    age:24,
    job:"programmer",
    salary:25000,
    relationship:"single"
}
const {name,salary} = personInfo;
// console.log(name,salary);
// const relationship = personInfo.relationship;
// console.log(relationship);
const friendName =["shuzon","Mahee","Shohaib","Ashik"];
const [first,second,...all]=friendName;
// console.log(first,second,all);
const bigObject={
    newname:"Mahee",
    newage:24,
    newinfo:{
        address:"lakshmipur",
        floor:"2nd",
        phone:"01730381915"
    },
    about:"human being"
}
const {newname,newinfo}=bigObject;
console.log(newname,newinfo.floor);