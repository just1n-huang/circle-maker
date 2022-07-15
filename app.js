const button = document.querySelector("button");
const colorSelect = document.querySelector("#color-select");
const sizeSelect = document.querySelector("#size-select");
const container = document.querySelector("#container");
const span = document.querySelector("h1 > span");
console.log(span);

container.addEventListener("click", (ev) => {
  // console.log(ev.target.id);
  if (ev.target.id !== "container") {
    ev.target.parentNode.removeChild(ev.target);
    span.innerText = span.innerText * 1 - 1;
  }
});
button.addEventListener("click", () => {
  const color = colorSelect.value;
  const size = sizeSelect.value;
  const circle = document.createElement("div");
  circle.classList.add(size);
  circle.classList.add(color);
  container.append(circle);
  span.innerText = span.innerText * 1 + 1;
});
