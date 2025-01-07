// filter: 
// filter method is used to print matched elements form an collection. it can print all matched elements

//find:
// find method is used to print if the condition is matched that value only print otherwise checked the remaining elemets in a collections.



var arr = [4,6,8,9]
var filter = arr.filter((item)=>{
return item> 5;
})
console.log(filter);

//find method
var find = arr.find((item)=>{
    return item > 5;
})

console.log(find)

