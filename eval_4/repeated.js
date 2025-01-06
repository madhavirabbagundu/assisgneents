var arr = [2,3,4,5,6,3,5]

var out = []
for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            out.push(arr[i])
        }
    }
}
console.log(out)


//second method using the objects

// arr = "aeiouaeonh"
var temp = {}
for(var i = 0; i < arr.length; i++){
    var item = arr[i];
    if(temp[arr[i]] === undefined){
        temp[arr[i]] = 1;
    }
    else{
    var prev = temp[arr[i]]
    temp[arr[i]] = prev+1 
}
}
console.log(temp)
for(key in temp){
    // console.log(temp[key]," ",key)
    if(temp[key] >= 2){
        console.log(key)
    }

}

var a = {name:"madhavi",age:30}
var b ;
var c;
a[b] = 20;
a[c] = 40;

console.log(a)

//convert array to objects
var ar = [3,45,6,7]
console.log({...ar})