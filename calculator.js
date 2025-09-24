let arr = [];
let result = 0;

function clearAll() {
  arr = [];
  document.querySelector('.current-operand').innerHTML = "0";
}

function numbers(ele) {
  arr.push(ele.target.textContent);
  document.querySelector(".current-operand").innerHTML = arr.join("");
}

function zero(ele) {
  const prev = arr[arr.length - 1];

  if (isNaN(prev)) {
    arr.push(0);
    document.querySelector(".current-operand").innerHTML = arr.join("");
  } else {
    arr.push(0);
    document.querySelector(".current-operand").innerHTML = arr.join("");
  }
}

function operators(ele) {
  arr.push(ele.target.textContent);
  document.querySelector(".current-operand").innerHTML = arr.join("");
}

function equals(){
    let expression=arr.join("");
    result=eval(expression);
    document.querySelector('.current-operand').innerHTML=result;
}

function backspace(){
    arr.pop();
    document.querySelector('.current-operand').innerHTML=arr.join("");
}