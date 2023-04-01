const todo = document.querySelectorAll(".todo p");
const done = document.querySelectorAll(".done p");
const LIMIT = 68;

for (let p of todo) {
  const aboveLimit = p.innerText.length > LIMIT;
  const dotsOrEmpty = aboveLimit ? "..." : ".";
  p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty;
}

for (let p of done) {
  const aboveLimit = p.innerText.length > LIMIT;
  const dotsOrEmpty = aboveLimit ? "..." : ".";
  p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty;
}
