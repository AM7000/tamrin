var x=8128
var y=1
for(var i=2;i<=x/2;i++){
    if(x%i===0){
        y+=i
    }

}
if(y===x){
    console.log(true)
}else{
    console.log(false)
}