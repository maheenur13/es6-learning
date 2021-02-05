const student = [
    {id:11634,name:"Mahee"},
    {id:11547,name:"Shohaib"},
    {id:11696,name:"Suzon"},
    {id:11556,name:"Ashik"},
    {id:11700,name:"Saiful"}
]
const Name = student.map(name =>name.name);
console.log(Name);
const ids = student.filter(id=>id.id>11600);
console.log(ids);
const firstId = student.find(id=>id.id===11634);
console.log(firstId);
// console.log(student);