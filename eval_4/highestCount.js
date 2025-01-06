var a = "I am a madhavi form ap"
function count(a){
    a = a.split(" ")
    var out = []
    var max = 0;
    for(var i = 0; i < a.length; i++){
        out.push(a[i].length)
    }
    // console.log(out)
    for(let i = 0; i < out.length; i++){
        if(out[i] > max){
            max = out[i]
        }
    }
    console.log(max)


}
console.log(count(a))

//bubble sort
function sort(arr){

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j<= arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }

    }
    console.log(arr)
}
sort([2,3,6,1,7,9,2]);

var ar = [3,4,5,3,4,7,8]
var obj = {...ar}
// console.log(obj)