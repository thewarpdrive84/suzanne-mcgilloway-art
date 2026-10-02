const printPages = [
  "pr_brickbook.html",
  "pr_cobbledteal.html",
  "pr_coffeecake.html",
  "pr_marketcafe.html",
  "pr_princelet.html",
  "pr_wiltons.html",
];

// Find the current page
const currentPage = window.location.pathname.split("/").pop();

// Find its position in the list
const currentIndex = printPages.indexOf(currentPage);

// Find previous and next pages
const previousIndex =
  (currentIndex - 1 + printPages.length) % printPages.length;

const nextIndex = (currentIndex + 1) % printPages.length;

// Set the links
document.getElementById("previousPrint").href = printPages[previousIndex];

document.getElementById("nextPrint").href = printPages[nextIndex];
