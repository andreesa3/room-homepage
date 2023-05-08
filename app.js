const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);

function openSidebar() {
  links.classList.add("active");
}

function closeSidebar() {
  links.classList.remove("active");
}

const mobileBackgrounds = [
  "./images/mobile-image-hero-1.jpg",
  "./images/mobile-image-hero-2.jpg",
  "./images/mobile-image-hero-3.jpg",
];
const desktopBackgrounds = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

const frontTitles = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
const frontParagraphs = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

const frontPage = document.querySelector(".front-page");
const frontTitle = document.querySelector(".front-title");
const frontParagraph = document.querySelector(".front-paragraph");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;

prevBtn.addEventListener("click", () => {
  if (index <= 0) {
    index = 2;
  } else {
    index = index - 1;
  }
  frontTitle.textContent = frontTitles[index]
  frontParagraph.textContent = frontParagraphs[index]
  changeBackground();
});
nextBtn.addEventListener("click", () => {
  if (index >= 2) {
    index = 0;
  } else {
    index = index + 1;
  }
  frontTitle.textContent = frontTitles[index]
  frontParagraph.textContent = frontParagraphs[index]
  changeBackground();
});

function changeBackground() {
  if (window.innerWidth < 1000) {
    frontPage.style.backgroundImage = `url(${mobileBackgrounds[index]})`;
  } else {
    frontPage.style.backgroundImage = `url(${desktopBackgrounds[index]})`;
  }
}
