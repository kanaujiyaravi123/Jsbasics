function factorial(n) {
  if (n == 1) return 1;
  else return n * factorial(n - 1);
}
function fib(n) {
  if (n < 2) return n;
  else return fib(n - 1) + fib(n - 2);
}

function cachefib(fun) {
  let cache = {};
return (...args) => {
      let n= args[0]
    if (n in cache) {
      console.log("in cache");
      console.log(cache[n]);
    } else {
      cache[n] = fib(n);
      console.log("not in cache");
      console.log(cache[n]);
    }
  };
}

const fibo=cachefib(fib);
fibo(5)
fibo(5)

