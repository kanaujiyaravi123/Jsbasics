function even(val)
{
   return val%2===0
}
function filter(arr,cb)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(cb(arr[i])==true){
        
       res.push(arr[i]);
        }
    }
    return res;
}
console.log(filter([1,2,3,4,5],even))