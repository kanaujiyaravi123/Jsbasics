function sum(val)
{
    return val+2;
}
function map(arr,cb)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
       res.push(cb(arr[i]));
    }
    return res;
}
console.log(map([1,2,3,4,5],sum))