const addNums = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = parseInt(num1, 10) + parseInt(num2, 10);
    document.getElementById("result").innerHTML = sum;
};

const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", addNums);

const multiplyNums = () => {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let multiply = num3 * num4;
    document.getElementById("result2").innerHTML = multiply;
};

const btnMultiply = document.getElementById("multiply");
btnAdd.addEventListener("click", multiplyNums);

const dividenums= () => {
    const num5 = document.getElementById("num5").value;
    const num6 = document.getElementById("num6").value;
    const divide = num5 / num6;
    document.getElementById("result3").innerHTML = divide;
};

const btnDivide = document.getElementById("divide");
btnAdd.addEventListener("click", dividenums);

const dividenumsfixed = () => {
        const num7 = document.getElementById("num7").value;
        const num8 = document.getElementById("num8").value;
        const divide = num7 / num8;
        const dividefixed = divide.toFixed(2);
        document.getElementById("result4").innerHTML = dividefixed
};

const btnDividefixed = document.getElementById("divide-fixed");
btnAdd.addEventListener("click", dividenumsfixed);

const subtractnums = () => {
    const num9 = document.getElementById("num9").value;
    const num10 = document.getElementById("num10").value;
    const subtract = num9 - num10;
    document.getElementById("result5").innerHTML = subtract;
};

const btnSubtract = document.getElementById("subtract");
btnAdd.addEventListener("click", subtractnums);

const leftover = () => {
    const firstnum = document.getElementById("firstnum").value;
    const secondnum = document.getElementById("secondnum").value;
    const remainder = firstnum % secondnum;
    document.getElementById("remainder").innerHTML = remainder;
};

const btnModulo = document.getElementById("modulo");
btnAdd.addEventListener("click", leftover);


function changeBg() {
    const changeColor = document.querySelector(".change-color");
    changeColor.style.height = "100%";
    changeColor.style.width = "100%";
    if (changeColor.style.backgroundColor === "purple") {
      changeColor.style.backgroundColor = "green";
    } else {
      changeColor.style.backgroundColor = "purple";
    }
  }
  
  function clearBg() {
    window.location.reload();
  }
  
  const btnChange = document.querySelector(".btn-change");
  
  btnChange.addEventListener("click", changeBg);
  
  const btnClear = document.querySelector(".btn-clear");
  
  btnClear.addEventListener("click", clearBg);