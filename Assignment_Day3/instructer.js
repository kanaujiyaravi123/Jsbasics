const instructor=
{
    evaluate:function()
    {
        console.log(this.aptitude+this.coreskill)
    }  
}
const arr= [
    {
        aptitude:10,
        coreskill:20
    },
    {
        aptitude:30,
       coreskill:40
    }
]
for(i of arr)
{
    instructor.evaluate.bind(i)();
}