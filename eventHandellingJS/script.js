const text = document.getElementById("sample");

const gola1 = document.getElementById("gola1");
const gola2 = document.getElementById("gola2");
const gola3 = document.getElementById("gola3");
const gola4 = document.getElementById("gola4");

gola1.addEventListener("mouseover", () => changeColor(gola1.innerText));
gola1.addEventListener("mouseout", () => changeColor("white"));

gola2.addEventListener("mouseover", () => changeColor(gola2.innerText));
gola2.addEventListener("mouseout", () => changeColor("white"));

gola3.addEventListener("mouseover", () => changeColor(gola3.innerText));
gola3.addEventListener("mouseout", () => changeColor("white"));

gola4.addEventListener("mouseover", () => changeColor(gola4.innerText));
gola4.addEventListener("mouseout", () => changeColor("white"));

const btn = document.getElementById("btn");
btn.addEventListener("click", () => changeColor(btn.innerText));


function changeColor(color) {
  text.style.color = color;
}