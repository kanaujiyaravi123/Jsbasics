function lakhan(a)
{
    function second(b)
    {
        return ((2*b)/a);
    }
    return second;
}
function add(a)
{
    function second(b)
    {
        return a+b;
    }
    return second;
}
function getmail(ge)
{
    const [fn,...ln]=ge.split(' ');
    let lnn=ln.join('');
    return fn+'.'+lnn+'@zopsmart.com';
}
function zoin(...arg)
{
    return arg.join('');
}
function sum(...args)
{
    let s=0;
    for(let i=0;i<args.length;i++)
        s+=args[i];
    return s;
}
function execute(fun,...ln)
{
    if(fun==getmail)
    return getmail(...ln);
    else
    return sum(...ln);
}
console.log(sum(1,2,3,4,5))
console.log(zoin('h','e','l','l','o'));
console.log(getmail("Anoop H M"));
console.log(getmail("Namo Gupta"));
console.log(getmail("Ravi Kanaujiya"));
console.log(add(1)(2));
console.log(add(3)(4));
console.log(lakhan(1)(2));
console.log(lakhan(4)(2));
console.log(execute(getmail,"anoop H M"));
