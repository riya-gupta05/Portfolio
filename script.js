let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";  // Clear the original text content of the word
  letters.forEach((letter) => {
    let span = document.createElement("span");  // Fixed typo: changed createdElement to createElement
    span.textContent = letter;
    span.className = "letter";
    word.appendChild(span);  // Changed append to appendChild
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);
// const menuIcon = document.getElementById("menu-icon");

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("active");
// });
// // Rest of your code...

// const menuIcon = document.getElementById("menu-icon");
// const navList = document.querySelector(".navlist");

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("active");
//   navList.classList.toggle("active");
// });

// circle skill
// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem => {
//     const dots = parseInt(elem.getAttribute("data-dots"));
//     const marked = parseInt(elem.getAttribute("data-percent"));
//     const percent = Math.floor((dots * marked) / 100);
//     const rotate = 360 / dots;
//     let points = "";

//     for (let i = 0; i < dots; i++) {
//         points += `<div class="points" style="--i:${i}; --rot:${rotate * i}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for (let i = 0; i < percent; i++) {
//         pointsMarked[i].classList.add('marked');
//     }
// });

// var mixer = mixitup('.portfolio-gallery');

// // Active menu
// const menuli = document.querySelectorAll('header ul li a');
// const sections = document.querySelectorAll('section');

// function activeMenu() {
//     let len = sections.length;
//     while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
//     menuli.forEach(sec => sec.classList.remove("active"));
//     menuli[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll", activeMenu);

// // Sticky navbar
// const header = document.querySelector("header");
// window.addEventListener("scroll", () => {
//     header.classList.toggle("sticky", window.scrollY > 50);
// });

// // Toggle icon navbar
// const menuIcon = document.querySelector("#menu-icon");
// const navlist = document.querySelector(".navlist");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// };

// window.addEventListener("scroll", () => {
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");
// });

// // Parallax
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show-items");
//         } else {
//             entry.target.classList.remove("show-items");
//         }
//     });
// });

