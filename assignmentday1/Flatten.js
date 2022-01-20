// Using inbuild function
let arr=[1,2,[3,4],[1,2,3,4]];
let farr=[].concat.apply([],arr)
console.log(farr)
// without inbuild function
let arr1=[1,2,[3,4],[1,2,3,4]];
for(let i of arr1)
{
    if(i.length>1)
    {
        for(let j of i)
        {
            console.log(j)
        }
    }
    else
    console.log(i)
}