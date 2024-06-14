

// function sayMyName(){
//     console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }

// sayMyName()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,8)

// // const result=addTwoNumbers(3,4)
// // console.log("Result:",result);

// function addTwoNumbers(number1,number2){
//     // let result=number1+number2
//     // return result 
//     return number1+number2
// }
// const result=addTwoNumbers(3,4)
// console.log("Result:",result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Minal jii"))

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,399,400,100))

const user={
    username:"minal",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username:"Sam",
    price:200
})

const myNewArray=[200,400,100,400]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
