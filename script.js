const display = document.getElementById("display");

function addToDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clear1() {
  display.value = "";
}

function toggleSign() {
  if (display.value !== "") {
    if (display.value.startsWith("-")) {
      display.value = display.value.substring(1);
    } else {
      display.value = "-" + display.value;
    }
  }
}

function addBracket() {
  let value = display.value;
  let open = (value.match(/\(/g) || []).length;
  let close = (value.match(/\)/g) || []).length;

  if (open === close) {
    display.value += "(";
  } else {
    display.value += ")";
  }
}
