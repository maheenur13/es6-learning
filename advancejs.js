const numbers = [45,65,32,64,24];
// const newNumbers =[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     newNumbers.push(result);
// }
const newarray = numbers.map(function(element,index,array){
    // return Math.max(element);
    return element;
})
const big = Math.max(...newarray);
// console.log(big);
const bigger = numbers.filter(num =>num>48);
// console.log(bigger);

const biger = numbers.find(num=>num>10);
console.log(biger);