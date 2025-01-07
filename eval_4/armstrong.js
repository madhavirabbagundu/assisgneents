var a = 371
let length = a.toString().split("").length;
var sum = 0;

console.log(a, typeof(a))
while(a > 0){
  var digit = a % 10;
console.log(digit)

  sum+=digit **length;
  console.log(sum)

  a = parseInt(a/10);
  console.log(a)

 


  console.log("******")
  


}