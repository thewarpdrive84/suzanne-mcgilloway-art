// The currently selected version
let currentVersion = 0;

// All artwork groups
const artworkGroups = {
  // --------------------------------
  // COBBLED TEAL
  // --------------------------------

  cobbledTeal: [
    {
      title: "Cobbled Teal On Elder",
      image: "../images/cobbledteal.jpg",
      alt: "Cobbled Teal On Elder by Suzanne McGilloway",
      year: "2021",
      medium: "Oil paint on stretched canvas",
      dimensions: "20 by 16 inches",
      description: "...",
    },

    {
      title: "Cobbled Teal On Elder II",
      image: "../images/cobbledteal2.JPG",
      alt: "Cobbled Teal On Elder II by Suzanne McGilloway",
      year: "2026",
      medium: "Oil paint on stretched canvas",
      dimensions: "20 by 16 inches",
      description: "....",
    },
  ],

  // --------------------------------
  // STAIRWELL
  // --------------------------------

  stairwell: [
    {
      title: "A Stolen Glimpse",
      image: "../images/stolenGlimpse.JPG",
      alt: "A Stolen Glimpse by Suzanne McGilloway",
      year: "2023",
      medium: "Oil paint on stretched canvas",
      dimensions: "12 by 10 inches",
      description:
        "Well known for its shabby pink facade, this Georgian townhouse was built in 1723. Today the building isn’t a home but is rented out for events and as a filming location. With this knowledge, I felt slightly less conspicuous about peering through the tiny hole in the door. I crouched to look, and caught my breath. The view on the other side was so atmospheric, it was other worldly. The light from the window flooded in to the stairwell. I caught a glimpse of the period wood panelling and well worn staircase. The worn grooves of the wood, helping to tell the stories of the immigrant families, who made it their home, over centuries.",
    },

    {
      title: "What The Walls Keep",
      image: "../images/whatWalls.JPG",
      alt: "What The Walls Keep by Suzanne McGilloway",
      year: "2025",
      medium: "Oil paint on stretched canvas",
      dimensions: "12 by 10 inches",
      description:
        "I was drawn to revisit this scene with an added ghostly twist and a fresh perspective.",
    },
  ],
};

// --------------------------------
// CHANGE ARTWORK VERSION
// --------------------------------

function showVersion(index) {
  // Find the artwork page
  const page = document.querySelector(".galleryitem-page");

  // Find which artwork group this page belongs to
  const groupName = page.dataset.artworkGroup;

  // Get the correct group
  const artworks = artworkGroups[groupName];

  // Stop if the group doesn't exist
  if (!artworks) {
    console.error("Artwork group not found:", groupName);
    return;
  }

  // Move backwards/forwards and wrap around
  index = (index + artworks.length) % artworks.length;

  // Remember which version we're viewing
  currentVersion = index;

  // Get the selected artwork
  const artwork = artworks[index];

  // --------------------------------
  // UPDATE IMAGE
  // --------------------------------

  document.getElementById("artworkImage").src = artwork.image;
  document.getElementById("artworkImage").alt = artwork.alt;

  // --------------------------------
  // UPDATE TITLE
  // --------------------------------

  document.getElementById("artworkTitle").textContent = artwork.title;

  // --------------------------------
  // UPDATE DETAILS
  // --------------------------------

  document.getElementById("artworkYear").textContent = artwork.year;

  document.getElementById("artworkMedium").textContent = artwork.medium;

  document.getElementById("artworkDimensions").textContent = artwork.dimensions;

  // --------------------------------
  // UPDATE DESCRIPTION
  // --------------------------------

  document.getElementById("artworkDescription").textContent =
    artwork.description;
}

// Make the function available to the HTML buttons
window.showVersion = showVersion;

// Make currentVersion available to the HTML buttons
Object.defineProperty(window, "currentVersion", {
  get: function () {
    return currentVersion;
  },
});
// Load the first artwork's information when the page opens
document.addEventListener("DOMContentLoaded", () => {
  showVersion(0);
});
