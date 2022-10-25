console.log("hi");

let przycisk1 = document.querySelector(".przycisk1");
let text = document.querySelector(".text");

przycisk1.addEventListener("click", () => {
  text.remove();
});

console.log(przycisk1);

let przycisk2 = document.querySelector(".przycisk2");
let divOfLove = document.querySelector(".divOfLove");

przycisk2.addEventListener("click", () => {
  divOfLove.remove();
});

console.log(przycisk2);
