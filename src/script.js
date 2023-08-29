let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

let count = document.querySelector(".counter");

// function myFunc(){
//   let text = event.currentTarget.tagName;
//   document.querySelector('.counter').innerHTML = text;
// }

increase.addEventListener("click", () => {
  count.innerHTML++;
});

decrease.addEventListener("click", () => {
  // count.innerHTML -= 1;
  count.innerHTML--;
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
});
