let count = 0;
let incrementBy = 1;
let incrementCount = undefined;

function startCounter() {
  if (incrementCount == undefined) {
    incrementCount= setInterval(() => {
      count += incrementBy;
      document.getElementById('count').innerHTML = count;
    }, 1000)
  }
}
function resetCounter() {
  count = 0;
  incrementBy = 1;
  document.getElementById('count').innerHTML = count;
  document.getElementById('input').value = '';
  clearInterval(incrementCount);
  incrementCount = undefined
}
function incrementCounter() {
  let Ibm = document.getElementById('input').value;
  incrementBy = parseInt(Ibm);
}

function stopCounter() {

  clearInterval(incrementCount);
  incrementCount = undefined;
}

let fun = function () {
  document.getElementById('start').addEventListener('click', function () {
    startCounter()
  });
  document.getElementById('end').addEventListener('click', function () {
    stopCounter();
  })
  document.getElementById('reset').addEventListener('click', function () {
    resetCounter();
  })
  document.getElementById('submit').addEventListener('click', function () {
    incrementCounter();
  })

}
fun();
