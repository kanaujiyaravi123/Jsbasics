function cal(oper,...args) 
{
    
        switch (oper) {
            case 'add':
                return args.reduce((acc,curr)=>curr+acc,0);
            case 'sub':
                return args.reduce((acc,curr)=>acc-curr,0);  
            case 'mul':
                return args.reduce((acc,curr)=>acc*curr,1);
            case 'div':
                    return args.reduce((acc,curr)=>acc/curr);
            default:
                console.log('wrong choise')
        }
}
console.log (cal('add', 3, 2, 4, 5))
console.log(cal('sub', 3, 2,6))
console.log(cal('mul', 3, 2,4))
console.log(cal('div', 3, 2))