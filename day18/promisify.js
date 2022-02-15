function add(cb,...args){
let sum=0;
for(let i=0;i<args.length;i++){
    sum+=args[i];
}
cb(sum);
}
function promisify(func){
    return function(...args){
        return new Promise((resolve,reject)=>{
        func(resolve,...args)
        })
    }


}
const addService = promisify(add)
addService(1,2,3,4).then(console.log)