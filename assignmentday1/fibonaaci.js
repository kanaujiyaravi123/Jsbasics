// without recursion

function fib(num) 
{
    let f= [0,1];
    let d= [0,1];
    for(let i=2;i<num;i++) 
    {
      f[i]=f[i-1]+f[i-2]; 
      d.push(f[i]);
    }
    return d;
  }
let x=5;
let ans=fib(x);
for(let i of ans)
console.log(i);

