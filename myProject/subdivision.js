function birthday(s, d, m) {
    // Write your code here
    // console.log(s,d,m)
    // return s,d,m
    var count = 0;
    var out = 0;
    if(s.length === 1 && s[0] === d){
        return 1;
    }
    for(var i = 0; i < s.length-(m-1); i++){
        var sum = 0
        var index = i;
        for(var j = 0; j< m; j++){
       
        sum+=s[index++]
        }
        if(sum === d){
            count++;
        }
    }
    return count;

}
console.log(birthday([2,2,1,3,2],4,2))