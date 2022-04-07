const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1500,
  reset: true
});

ScrollReveal().reveal(".article", { delay: 200 });
ScrollReveal().reveal(".date", { delay: 400 });
ScrollReveal().reveal(".title", { delay: 500 });
ScrollReveal().reveal(".description", { delay: 600 });

let i = ''
let liked = false
let x = document.getElementsByClassName('like')

function handleLike (i) {
  let ev = x[i]
  if (liked == false) {
    ev.classList.add('fa-solid')
    ev.classList.remove('fa-regular')
    liked = true
  } else {
    ev.classList.add('fa-regular')
    ev.classList.remove('fa-solid')
    liked = false
  }
}