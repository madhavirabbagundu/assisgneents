var a = 4

function table(a){

    for(var i = 1; i <= 10; i++){
        console.log(a +' * '+i +" = " + a*i);
    }
}
table(4);


//string occurence
function occurence(st,letter){
    let count = 0;
for(var i = 0; i < st.length; i++){
    if(st[i] === letter){
        count++;
    }
}
console.log(count)
}
occurence("hello world",'e')