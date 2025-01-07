function missing(arr){
    var n = ((arr.length+2) * (arr.length+1))/2
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    var out = parseInt(n-sum)
    console.log(out)

}
missing([2,3,4])