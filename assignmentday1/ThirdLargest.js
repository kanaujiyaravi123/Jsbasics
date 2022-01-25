let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const n = arr.length;
const num = arr.reduce((acc, curr) => {
    if (curr > acc.first) {
        acc.third = acc.second
        acc.second = acc.first
        acc.first = curr
    } else if (curr > acc.second) {
        acc.third = acc.second
        acc.second = curr
    } else if (curr > acc.third) {
        acc.third = curr
    }
    return acc
}, { first: -1, second: -1, third: -1 })

console.log(num.third)

