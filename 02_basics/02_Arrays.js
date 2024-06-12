const marvelHeros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// const allHeros=marvelHeros.concat(dc_heros)
// console.log(allHeros);


//spread operator
const all_new_heros=[...marvelHeros,...dc_heros]
console.log(all_new_heros);

// const another_array=[1,2,3[4,5],6,7[8,9]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Minal"))
console.log(Array.from("Minal"))
console.log(Array.from({name:"Minal"})) //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2));



