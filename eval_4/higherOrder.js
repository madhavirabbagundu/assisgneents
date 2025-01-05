var data = [3,4,5,6]
data = data.map((item)=>item*2)
console.log(data);

var a = [3,4,5,6]
 a.forEach((e)=> console.log(e*3))

data =  data.filter((e)=>e>8)
console.log(data)

var out = ["hello   world" ]
var d = out.reduce((t,e)=> {
    return t+e
}," ")
console.log(d)
