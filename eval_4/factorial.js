function factorial(n){

    var fact = 1;

  if(n == 1){
    console.log(n);
  }
  else{
    for(var i = 1; i <= n; i++){
        fact = fact *i;
    }
  }
  console.log(fact)

}
factorial(5);

//recursion

function fact(n){
if(n === 1){
    return n;

}
// else{
   return n*fact(n-1);
// }
}
console.log(fact(5))
