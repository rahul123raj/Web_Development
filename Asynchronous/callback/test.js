
function sum(x,callback){
    console.log(x+callback())
}

sum(10,()=>{
    return 12
})
