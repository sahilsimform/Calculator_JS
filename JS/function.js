var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

let newVal = "";
let valMemStored = "";
let stack1 = [];
let total = 0;

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cosec() {
  screen.value = 1 / Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function sec() {
  screen.value = 1 / Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function cot() {
  screen.value = 1 / Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log10(screen.value);
}

function ln() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function exp() {
  screen.value = Math.exp(screen.value);
}

function squt() {
  screen.value = Math.squt(screen.value);
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function red() {
  screen.value = Math.PI / 180(screen.value);
}

function deg() {
  screen.value = Math.squt(screen.value);
}

function by() {
  screen.value = 1 / screen.value;
}

function modo() {
  let ansA;
  let result;

  ansA = screen.value;
  if (ansA > 0) {
    result = screen.value;
  } else {
    result = screen.value * -1;
  }

  screen.value = result;
}

function TenPow() {
  screen.value = Math.pow(10, screen.value);
}

function invert() {
  screen.value = screen.value * -1;
}

function rad() {
  var radian = screen.value;
  var radia = (radian * 180) / 3.14;
  screen.value = radia;
}

function deg() {
  var degian = screen.value;
  var degia = 3.14 / (degian * 180);
  screen.value = degia;
}

function copyButPress() {
  valMemStored = document.getElementById("screen").value;
}

function pasteButPress() {
  if (valMemStored) {
    document.getElementById("screen").value = valMemStored;
    newVal = valMemStored;
  }
}

function MmPos() {
  total = 0;
  stack1.push(screen.value);
  console.log(stack1);
  for (let i = 0; i < stack1.length; i++) {
    total += parseInt(stack1[i]);
  }
  console.log(total);
  console.log(stack1);
}

function MmNiv() {
  total -= screen.value;
  console.log(total);
  console.log(stack1);
}

function MmSave() {
  stack1.push(screen.value);
  console.log(stack1);
}

function MmRecall() {
  let temp = stack1[stack1.length - 1];
  screen.value = temp;
  str = temp.toString();
  screen.value = str;
  console.log(temp);
  console.log(stack1);
}

function MmClear() {
  stack1 = [];
  console.log(stack1);
  console.log("stack1 is empty.");
}
