function addService(...input){
    let obj=new Promise((resolve,reject)=>{
        let sum=0;
        for(let i=0;i<input.length;i++){
            sum+=input[i];
        }
        if(typeof(sum)==="number"){
        setTimeout(()=>{
            resolve(sum);
        },3000)
    }
    else
    reject('error');
    })
    return obj;
}
addService(1,2,3,4,'dwcwe').then(console.log).catch(console.log);
