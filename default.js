function add(num1 , num2=0){
    // num2=0 ekhane amra default value 0 diye dichi tar mane num2 er jodi previous value thake tahole sheta r na thakle 0;
    // num2 = num2 ||0; //ekhane eta if else er moto kaj kore . jodi num2 er value deya thake tahole ja diche ta othoba jodi na deya thake tahole 0;
    return num1+num2;
}
const total = add(12);
//ekhane ami ekta value pathaisi but amar duita value dorkar but ans ekta pathaile shetai asha kotha tai amader deafault value 0 neya uchit.
console.log(total);




// function add(num1 , num2){
//     return num1+num2;
// }
// const total = add(12);
// //ekhane ami ekta value pathaisi but amar duita value dorkar but ans ekta pathaile shetai asha kotha tai amader deafault value 0 neya uchit.
// console.log(total);




// function add(num1 , num2){
//     num2 = num2 ||0; //ekhane eta if else er moto kaj kore . jodi num2 er value deya thake tahole ja diche ta othoba jodi na deya thake tahole 0;
//     return num1+num2;
// }
// const total = add(12);
// //ekhane ami ekta value pathaisi but amar duita value dorkar but ans ekta pathaile shetai asha kotha tai amader deafault value 0 neya uchit.
// console.log(total);