//right angle patter

function pattern(n){
    for(var i = 1; i <= n; i++){
    var out = ""

    for(var j = 1; j <=i  ; j++){
     out+="* "
      
    }
console.log(out)
    }
}
pattern(5);

function Pattern2(n){

    for(var i = 1; i <= n; i++){
    var out = ""
    var out1 = "";

        for(var j = 1; j <= n-i; j++){
            // console.log(" ");
            out+="  ";
        }
        for(var k = 1; k <= i; k++){
            // console.log("* ")
            out+="*  "
        }
        console.log(out)
    }

    for(var i = 1; i <= n; i++){
        // var out = ""
        var out1 = "";
for(var k = 1; k <= i; k++){
    // console.log("* ")
    out1+="  "
}
for(var j = 1; j <= n-i; j++){
    // console.log(" ");
    out1+="*  ";
}
      console.log(out1)

    }
}
Pattern2(5)