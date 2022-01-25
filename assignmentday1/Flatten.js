// Using inbuild function
function flatWithInbuiltFunction(arr) {
    let farr = [].concat.apply([], arr)
    console.log(farr)
}
// without inbuild function
function flatWithoutInbuiltFunction(arr2){
    for (let i of arr2) {
        if (i.length > 1) {
            for (let j of i) {
                console.log(j)
            }
        }
        else
            console.log(i)
    }
}

let arr = [1, 2, [3, 4], [1, 2, 3, 4]];
let arr2 = [[1, 2], 3, 4, [1, 2, 3, 4]];
flatWithInbuiltFunction(arr);
flatWithoutInbuiltFunction(arr2);