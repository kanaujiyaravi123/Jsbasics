function closour()
{
    let sum=0;
    return {
        add:function(val)
        {
            sum=sum+val;
        },
        sub:function(val)
        {
            sum=sum-val;
        },
        inc:function()
        {
            sum=sum+1;
        },
        dec:function()
        {
            sum=sum-1;
        },
        print:function(val)
        {
            console.log(sum);
        }
    }
}
let obj=closour();
obj.add(11);
obj.sub(5);
obj.inc();
obj.dec();
obj.print();
