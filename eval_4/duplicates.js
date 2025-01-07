var a = [1,2,8,2,8,9]
function unique(){
    for(var i = 0; i < a.length; i++){
        for(var j = i+1; j< a.length; j++){
            if(a[i] === a[j]){
                console.log(a[i]);
            }
        }
    }
}
console.log(unique())

//== and ===
console.log(8 == '8')
console.log(4 === '4')
console.log(false == false)  // false represents  is 0
console.log(false === false)
console.log(true == true) // true represents is 1;
console.log(true === true)
console.log("---------")
// console.log([1,2] === [1,2])
console.log([1,2] == [1,2])
console.log('' === '')  
console.log('' == '')  
console.log({} == {})
// console.log({} === {})// objects can compare only properties or metods it doesn't compare whiole array or objects
