function add(fun,...arr){
    let res=0;
    setTimeout(()=>{
        for(let i=0;i<arr.length;i++){
            res+=arr[i];
        }
        fun(res);
    },3000)
    
   

}
add( (sum) => console.log(sum),1,2,3,4)