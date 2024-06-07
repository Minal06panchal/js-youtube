//Primitive

// 7 types: string,number,boolean,null,undefined,symbol,bigint

//Refrence (Non -primitive)

const score=100
const scoreValue=100.3;

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol ('123')

console.log(id===anotherId);//false
const bigNumber=3838388484848n

//Array,Objects,Functions

const heros=["shaktiname","naagraj","doga"];
let myObj={
    name:"Minal",
    age:21
}

 const myFunction=function(){
    console.log("Hello World");
 }