let sumIt = (num1,num2)=>{
    // sum = num1+num2;
    if (num1==num2){
        console.log(`${num1} and ${num2} are equal`);
    }
    else if(num1>num2){
        console.log(`${num1} is bigger than ${num2}`);
    }
    else if(num1<num2){
        console.log(`${num2} is bigger than ${num1}`);
    }
}
let newSum= sumIt(12,13);
// console.log(newSum);
