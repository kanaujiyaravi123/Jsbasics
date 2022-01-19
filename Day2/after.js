function after(n,fun)
{
    let i=0;
    return function()
    {
        if(i>=n)
        return fun()
        else i++;
    }
}
function hello()
{
    return "hello";
}
const HA=after(3,hello);
console.log(HA());
console.log(HA());
console.log(HA());
console.log(HA());