const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();//기존 선과 연결 끊어주기
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

//canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange)