// withrecursion
function fib(num) 
{
   if(num<2)
   return num;
   else
   return fib(num-1)+fib(num-2);
}
let x=5;
for(let i =0 ; i<x ; i++)
console.log(fib(i));




