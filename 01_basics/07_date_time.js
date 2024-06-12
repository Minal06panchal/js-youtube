let mydate=new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let myCreatedDate=new Date(2023,0,12)
// let myCreatedDate=new Date(2023,0,12,5,15)
let myCreatedDate=new Date("2024-09-28")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})



