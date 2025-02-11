const slidesData = [
  {
    image: "https://picsum.photos/id/25/800/400",
    title: "Slide 1",
  },
  {
    image: "https://picsum.photos/id/27/800/400",
    title: "Slide 2",
  },
  {
    image: "https://picsum.photos/id/28/800/400",
    title: "Slide 3",
  },
  {
    image: "https://picsum.photos/id/29/800/400",
    title: "Slide 4",
  },
];

const container = document.createElement("div");
container.className = "main";
container.style.position = "relative";
container.style.width = "800px";
container.style.height = "400px";
container.style.margin = "auto";
container.style.overflow = "hidden";

const slideWrapper = document.createElement("div");
slideWrapper.style.display = "flex";
slideWrapper.style.transition = "transform 0.5s ease-in-out";

slidesData.forEach((slide) => {
  const slideElement = document.createElement("div");
  slideElement.style.minWidth = "100%";
  slideElement.style.boxSizing = "border-box";
  slideElement.style.position = "relative";

  const img = document.createElement("img");
  img.src = slide.image;
  img.alt = slide.title;
  img.style.width = "100%";
  img.style.display = "block";

  const titleDiv = document.createElement("div");
  titleDiv.className = "main-title";
  titleDiv.innerText = slide.title;
  titleDiv.style.position = "absolute";
  titleDiv.style.bottom = "20px";
  titleDiv.style.left = "20px";
  titleDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  titleDiv.style.color = "#fff";
  titleDiv.style.padding = "10px";
  titleDiv.style.borderRadius = "5px";

  slideElement.appendChild(img);
  slideElement.appendChild(titleDiv);
  slideWrapper.appendChild(slideElement);
});

container.appendChild(slideWrapper);

const prevButton = document.createElement("button");
prevButton.className = "main-button prev";
prevButton.innerText = "<";
prevButton.style.position = "absolute";
prevButton.style.top = "50%";
prevButton.style.left = "10px";
prevButton.style.transform = "translateY(-50%)";
prevButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
prevButton.style.color = "#fff";
prevButton.style.border = "none";
prevButton.style.padding = "10px";
prevButton.style.cursor = "pointer";
prevButton.style.borderRadius = "5px";

const nextButton = document.createElement("button");
nextButton.className = "main-button next";
nextButton.innerText = ">";
nextButton.style.position = "absolute";
nextButton.style.top = "50%";
nextButton.style.right = "10px";
nextButton.style.transform = "translateY(-50%)";
nextButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
nextButton.style.color = "#fff";
nextButton.style.border = "none";
nextButton.style.padding = "10px";
nextButton.style.cursor = "pointer";
nextButton.style.borderRadius = "5px";

container.appendChild(prevButton);
container.appendChild(nextButton);

document.body.appendChild(container);

let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 800;
  slideWrapper.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? slidesData.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = currentIndex === slidesData.length - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentIndex);
setInterval(nextSlide, 3000);
