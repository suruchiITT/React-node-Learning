const fs = require("fs");
const os = require("os");
//Sync...
//fs.writeFileSync("./test.txt","Hello World")

//Async
//fs.writeFile("./test.txt","hello world async",(err)=>{})

// const result =fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// const result =fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

console.log(os.cpus().length);