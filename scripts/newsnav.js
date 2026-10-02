const newsPages = [
  "news01-fournierStFeatured.html",
  "news02-shoreditchDesign.html",
  "news03-stolenGlimpseFeaturedTownHouse.html",
  "news04-stolenGlimpseFeatured.html",
  "news05-stolenGlimpseSold.html",
  "news06-starYard.html",
  "news07-curiousHatter.html",
];

// Find the current page
const currentPage = window.location.pathname.split("/").pop();

// Find its position in the list
const currentIndex = newsPages.indexOf(currentPage);

// Find previous and next pages
const previousIndex = (currentIndex - 1 + newsPages.length) % newsPages.length;

const nextIndex = (currentIndex + 1) % newsPages.length;

// Set the links
document.getElementById("previousPrint").href = newsPages[previousIndex];

document.getElementById("nextPrint").href = newsPages[nextIndex];
