function cal(oper,num1,num2)
{
    switch(oper)
    {
        case 'add':
            let ar=num1+num2;
            console.log(`result is ${ar}`)
            break
        case 'sub':
            let sr=num1-num2;
            console.log(`result is ${sr}`)
            break;
        case 'mul':
            let mr=num1*num2;
            console.log(`result is ${mr}`)
            break;
        case 'div':
            let dr=num1/num2;
            console.log(`result is ${dr}`) 
            break;
        default:
            console.log('wrong choise')
            break;           

    }
}
cal('add',3,2)
cal('sub',3,2)
cal('mul',3,2)
cal('div',3,2)