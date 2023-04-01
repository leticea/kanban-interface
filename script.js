const elements = document.querySelectorAll(".card p");
const LIMIT = 70;

for (let p of elements) {
  const aboveLimit = p.innerText.length > LIMIT;
  const dotsOrEmpty = aboveLimit ? "..." : "";
  p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty;
}
