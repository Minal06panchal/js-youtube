//singleton

//object literals

const mySum=Symbol("Key1")

const Jsuser={
    name:"Minal",
    "full name":"Minal Jain",
    [mySum]:"myKey1",
    age:22,
    location:"Banglore",
    email:"Minal@gmail.com",
    isLoggedIn:false
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySum])

// Jsuser.email="minal@chatgpt.com"
// Object.freeze(Jsuser)
// Jsuser.email="minal@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());