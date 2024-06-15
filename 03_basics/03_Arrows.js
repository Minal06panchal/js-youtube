const user={
    username:"minal",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);
// const chai=function(){
//     let username="Minal"
//     console.log(this.username);
// }

// const chai=()=>{
//     let username="Minal"
//     console.log(this);
// }

// const addTwo=(num1,num2)=>{
//     return num1 +num2
// }
// console.log(addTwo(3,4))

const addTwo=(num1,num2)=> num1 + num2
console.log(addTwo(3,4))
