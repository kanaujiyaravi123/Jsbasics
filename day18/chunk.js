function chunk(arr,n){
    let result=[];
    for(let i=0;i<arr.length;i+=n){
        result.push(arr.slice(i,i+n))
    }
    return result;

}
console.log(chunk([1,2,3,4,5,6,7],3))