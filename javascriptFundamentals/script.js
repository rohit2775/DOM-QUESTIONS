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
