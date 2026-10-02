const images = ["../images/cobbledteal.jpg", "../images/cobbledtealAlt.JPG"];

let currentImage = 0;

function changeImage(direction) {
  currentImage += direction;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  document.getElementById("artworkImage").src = images[currentImage];
}
