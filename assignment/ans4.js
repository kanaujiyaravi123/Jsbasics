const arr = [{ "name": "Deeksha Verma", "email": "deeksha.verma@zopsmart.com" },
{ "name": "Kush Rajpurohit", "email": "kush.rajpurohit@zopsmart.com" },
{ "name": "M Nayana", "email": "m.nayana@zopsmart.com" },
{ "name": "Meghana Reddy M S", "email": "meghana.reddyms@zopsmart.com" },
{ "name": "Namo Gupta", "email": "namo.gupta@zopsmart.com" },
{ "name": "Pallavi Priya", "email": "pallavi.priya@zopsmart.com" },
{ "name": "Paras Gautam", "email": "paras.gautam@zopsmart.com" },
{ "name": "Ravi Kanaujiya", "email": "ravi.kanaujiya@zopsmart.com" },
{ "name": "Riya Garg", "email": "riya.garg@zopsmart.com" },
{ "name": "Saichandra Gaddam", "email": "saichandra.gaddam@zopsmart.com" },
{ "name": "Sharaj Sharma", "email": "sharaj.sharma@zopsmart.com" },
{ "name": "Shubham Ranjan", "email": "shubham.ranjan@zopsmart.com" },
{ "name": "Sumair Jarang", "email": "sumairrajvansha.jarang@zopsmart.com" },
{ "name": "Sumanta Patra", "email": "sumanta.patra@zopsmart.com" },
{ "name": "Tharun Abburi", "email": "tharun.abburi@zopsmart.com" }]
let arr1=[];
let arr2=[];
function allMails(){
    arr1.push(arr.map((key)=>key.email));
}
allMails();

for(let i=0;i<arr.length;i++){
    let nameArr=[firstName,secondName]=arr[i].name.split(" ");
    arr2.push(firstName+'.'+secondName+'@'+'zopsmart.com');
     
}
let result=[];
for(let i=0;i<arr2.length;i++){
    if(!(arr1.includes(arr2[i])))
    result.push(arr2[i]);
} 
console.log(result);