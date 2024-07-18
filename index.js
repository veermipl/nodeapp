const app = require('./app')

// console.log(app.X);
// console.log(app.Y);
// console.log(app.z());




// var x=20
// console.log(x);
// if(x==="20"){
//     console.warn("True")
// }else{
//     console.warn("False")
// }

const arr=[3,4,6,2,54,3,2,5];
//console.log(arr[3]);

// arr.filter((item)=>{
//     console.log(item)
// })

let result = arr.filter((item)=>{
    return item===3
})

console.log(result)