const coding=["js","cpp","java","python"]

const values=coding.forEach((item)=>{
    // console.log(item);
    return item
})
console.log(values);

const myNums=[1,2,3,4,4,5,6]
// const newNums= myNums.filter((num)=>{
//      return num>4
// } )

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
    
    
// })

// console.log(newNums);

const books=[
    {
        title:'book one',genre:'Non-fiction',publish:1989,edition:2010
    },
    {
        title:'book two',genre:'Science',publish:1999,edition:2014
    },
    {
        title:'book three',genre:'Non-fiction',publish:1945,edition:2015
    },
];

let userBooks=books.filter((bk)=>bk.genre==='Non-fiction')

userBooks=books.filter((bk)=>{ 
    return bk.publish>=1900 && bk.genre==='Science'
})
console.log(userBooks);

