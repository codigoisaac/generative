const canvas = document.querySelector("canvas"),
  context = canvas.getContext("2d"),
  size = window.innerHeight,
  dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 2;
context.strokeStyle = "#eee";

let step = 10,
  lines = [];

// idealize lines
for (let i = step; i <= size; i += step) {
  let line = [];
  for (let j = step; j <= size - step; j += step) {
    let point = { x: j, y: i };
    line.push(point);
  }
  lines.push(line);
}

// draw the lines
for (let i = 0; i < lines.length; i++) {
  context.beginPath();
  context.moveTo(lines[i][0].x, lines[i][0].y);

  for (let j = 0; j < lines[i].length; j++) {
    context.lineTo(lines[i][j].x, lines[i][j].y);
  }

  context.stroke();
}
