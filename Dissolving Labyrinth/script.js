const canvas = document.querySelector("canvas"),
  context = canvas.getContext("2d"),
  size = window.innerHeight,
  dpr = window.devicePixelRatio,
  stepInput = document.querySelector("#step"),
  linewInput = document.querySelector("#linew"),
  genBtn = document.querySelector("#generateBtn");

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineCap = "square";
context.strokeStyle = "#eee";

function draw(x, y, width, height) {
  const right = Math.random() >= 0.5;

  context.beginPath();

  if (right) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
  context.stroke();
}

function generate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // set step
  let realStep = parseInt(stepInput.value),
    step = realStep;

  if (realStep < 15) {
    step = 15;
    alert("Por favor insira números entre 15 e 700.");
    stepInput.value = 15;
  } else if (step > 700) {
    step = 700;
    alert("Por favor insira números entre 15 e 700.");
    stepInput.value = 700;
  }

  // set line width
  let realLineW = parseInt(linewInput.value);
  context.lineWidth = realLineW;

  if (realLineW < 1) {
    context.lineWidth = 1;
    alert("por favor insira um valor entre 1 e 400.");
    linewInput.value = 1;
  } else if (realLineW > 400) {
    context.lineWidth = 400;
    alert("por favor insira um valor entre 1 e 400.");
    linewInput.value = 400;
  }

  // do the drawing
  for (let x = 0; x < size; x += step) {
    for (let y = 0; y < size; y += step) {
      draw(x, y, step, step);
    }
  }
}

generate();

// inputs
stepInput.addEventListener("change", generate);
linewInput.addEventListener("change", generate);
genBtn.addEventListener("click", generate);
