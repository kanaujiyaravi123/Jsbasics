const obj=
{
    b:10,
    c: {
          d:
          {
              e:20
          }
       }
}
// shallow  copy
const obj1=obj;
obj1.b=20;
console.log(obj.b)
console.log(obj1.b)
//  Deep copy
 let obj1=JSON.parse(JSON.stringify(obj))
 const obj12=obj
 obj12.c.d.e=30
 console.log(obj.c.d.e);
 console.log(obj12.c.d.e);

