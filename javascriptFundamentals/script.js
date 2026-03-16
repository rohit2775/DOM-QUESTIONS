//  alert("hello") 

//starting backend from scratch , and beginning with the fundamentals of javascript
// arrays and objects

var arr =[1,3,4,5,6,7,"hello", "rohit"]

arr.forEach((val)=>{
console.log(val);
})

var array = [1,2,3,4,5,6,7,8,9]
 var  mapping = array.map((val)=>{
    return val*2;

})
console.log(mapping);

var arr1 =[1,2,3,4,5,6,7,8.,9]

var ans = arr1.filter((val)=>{
  if(val % 2 ==0){return true}
  else return false;
})
console.log(ans );

// also  array.find . and array.indexof()


 // asynchronous javascript 

 async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    let data = await response.json();
    
    // console.log("Users data:", data);
  } 
  catch (error) {
    // console.log("Error aaya:", error);
  }
}

getUsers();


//  nodejs file system and operations 


 // write file 
const fs = require("fs");

fs.writeFile("demo.txt", "Hello Rohit bhai", (err) => {
    if (err) throw err;
    console.log("File created and data written");
});


 // copy file 

 const fs = require("fs");

fs.copyFile("demo.txt", "copy.txt", (err) => {
    if (err) throw err;
    console.log("File copied successfully");
});

// rename a file 

const fs = require("fs");

fs.rename("copy.txt", "newfile.txt", (err) => {
    if (err) throw err;
    console.log("File renamed successfully");
});

// append file 

const fs = require("fs");

fs.appendFile("demo.txt", "\nWelcome to Node.js", (err) => {
    if (err) throw err;
    console.log("Data appended");
});


// unlink file // to delete file 


const fs = require("fs");

fs.unlink("newfile.txt", (err) => {
    if (err) throw err;
    console.log("File deleted");
});

// rmdir to remove a directory/folder

const fs = require("fs");

fs.rmdir("myfolder", (err) => {
    if (err) throw err;
    console.log("Folder deleted");
});

//if the folder is empty then it will work , but if not then we have to use this 

const fs = require("fs");

fs.rmdir("myfolder",{recursive :true} ,(err) => {
    if (err) throw err;
    console.log("Folder deleted");
});
// also we can use fs.rm
// and many more , readfile, mkdir ... 

