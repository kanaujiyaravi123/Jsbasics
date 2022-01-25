function fun(arr) {
    arr.sort();
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ans)
            ans++;
    }
    return ans;
}
let arr = [16, 6, 2, 1, 3, 4, 5];
console.log(fun(arr));