// for( var i=0;i<10;i++){
//     console.log(i);
// }

// for(var i=10;i>0;i--){
//     console.log(i);
// }

//even numbers
// for(var i=0;i<20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//odd numbers
// for(var i=0;i<20;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }


//prime numbers
// for(i=2;i<=100;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             break;
//         }
//     }
//     if(i==j){
//         console.log(i);
//     }
// }


//for in-loops through the keys
// var person={fname:"john",
//     lname:"doe",
//     age:20,
//     laptop:{
//         brand:"lenovo",
//         model:"x1"
//     }
// };
// for (var key in person){
//     console.log(key,person[key]);
// }

//for of-loops through the values
//for objects
// var person={fname:"john",lname:"doe",age:20};
// for(var value of Object.values(person)){
//     console.log(value);
// }

//for arrays
// const cars=["bwm","maruti","suzuki"];
// for (var x of cars){
//     console.log(x);
// }

//for strings
// var names="javascript";
// for (var x of names){
//     console.log(x);
// }


// array toString
// var fruits=["banana","orange","apple"];
// console.log(fruits.toString());

//split
// var names="hello world hi this is js";
// console.log(names.split(""));

//slice,splice
// var fruits=["apple","banana","orange","papaya","pineapple"];
// console.log(fruits.slice(1));
// console.log(fruits.splice(0,1));
// console.log(fruits.splice(1,2));
// console.log(fruits.splice(2));

//functions
//named functions
// function sum(num1,num2){
//     var result=num1+num2;
//     return result;
// }
// console.log(sum(10,20));

//anonmous function
// var sum=function(a,b){
//     var result=a+b;
//     return result;
// }
// console.log(sum(1,2));


//iife-imeediately invoked function expression

    // var result=(function product(x,y){
    //     var mul= x*y;
    //     return mul;
    // });console.log(result(7,6));

//arrow function
// var product=(e,f)=>{
//     var result=e*f;
//     return result;
// };
// console.log(product(3,5));

//if only one statement is there in body
// var product=(num1,num2)=>{
//     return num1*num2;
// }
// console.log(product(9,10));

//if there is only one parameter
// var mul=num1=>{
//     return num1*num1*num1;
// }
// console.log(mul(5));

//if no parameters
// var greet=()=>{
//     console.log("hello hkji");
// }
// greet();

//split method in strings
// var str="hello hi how are you";
// str=str.split(",");
// console.log(str);

// str=str.join("");
// console.log(str);

//forEach()
// let sum=0;
// const nums=[1,2,3,45];
// nums.forEach(function(value){
//     sum+=value;
//     console.log(sum);
// })
// console.log(sum);


//map()
// const numbers=[1,2,4,17];
// const newArr=numbers.map(function(value){
//     return value*10;
// })
// console.log(newArr);

//filter()
// const num1=[2,3,4,5];
// const even=num1.filter(num1=>num1%2==0)
// console.log(even);

//reduce()
// const num2=[2,4,5];
// const add=num2.reduce((a,b)=>a+b);
// console.log(add);

//shallowcopy-affects the original array
// let arr1=[1,2,3];
// let arr2=arr1;
// arr1[2]=1;
// console.log(arr1);
// console.log(arr2);

//deepcopying-doesnot affects the original array
// let arr11=[10,20,30];
// let arr12=[...arr11];
// arr12[2]=668;
// console.log(arr12);
// console.log(arr11);

//setTimeout()
// setTimeout(function(){
//     console.log("helllo");
// },4000);

//settimeinterval
// setInterval(() => {
//     console.log("hiii");
// }, 3000);

// setInterval(function() {
//     console.log("ghhgh");
// }, 2000);


//rest operator
// function myFun(a,b,...c){
//     console.log(a,b,c);
// }myFun(1,2,3);


//it displays an error because rest parameter should be the last parameter otherwise it is an error
// function myFun1(a,..b,c){
//     console.log(a,b,c);
// }myFun1(1,2,3,4,4.6,6)


//maximum number in an array
// let arr=[1,2,4,5,8,9];
// let max=arr[0];
// for(i=1;i<arr.length;i++){
//     if(arr[i]>=max){
//         max=arr[i];
//     }
// }
// console.log(max);

//minimum number in an array
// let arr1=[2,3,4,5,6,8,9,0];
// let min=arr1[0];
// for(j=1;j<arr1.length;j++){
//     if(arr1[j]<=min){
//         min=arr1[j];
//     }
// }console.log(min);

//descending order
// let arr=[1,3,12,34,56,8];
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);

//ascending order
// let arr=[2,4,5,6,78,9,12];
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }console.log(arr);

//average number
// var arr=[1,2,3,5,7];
// let sum=0;
// for(i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// let avg=sum/arr.length;
// console.log(avg);

//reverese of a string
// var str="hello world";
// let reversedStr="";
// for(var i=str.length-1;i>=0;i--){
//     reversedStr+=str[i];
// }
// console.log(reversedStr);

//objects
// const person={
//     firstName:"john",
//     lastName:"doe",
//     age:30,
//     eyeColor:"blue",
//     address:{
//         city:"nlr",
//         pincode:524101,
//     }
// };
// console.log(`Mr.${person.firstName} ${person.lastName} your age is ${person.age} and you are from ${person.address.city}`);

//this
const persons={
    firstName:"john",
    lastName:"doe",
    age:29,
    fullName:function(){
        return this.firstName + " "+this.lastName;
    }
};
console.log(persons.fullName);