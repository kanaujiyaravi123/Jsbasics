let arr=[];
const stack={
    'push':function(x){
        arr.push(x);
    },
    'pop':function(x){
        console.log(arr.pop(x))
    },
    'top':function(x){
        console.log(arr[arr.length-1])
    }
}
console.log(arr)
stack.push(8)
console.log(arr)
stack.push(9)
console.log(arr)
stack.pop()
console.log(arr)
stack.top()