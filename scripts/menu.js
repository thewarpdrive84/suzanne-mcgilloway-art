const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const menuOverlay = document.getElementById("menuOverlay");
const siteMenu = document.getElementById("siteMenu");

// Add Shop link automatically to every page
const shopLink = document.createElement("a");
shopLink.href = "/shop.html";
shopLink.textContent = "Shop";

// Insert Shop after Prints
const printsLink = siteMenu.querySelector('a[href="/prints.html"]');

if (printsLink) {
  printsLink.insertAdjacentElement("afterend", shopLink);
}

function openMenu() {
  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");

  menuToggle.setAttribute("aria-label", "Close navigation menu");

  menuClose.focus();
}

function closeMenu() {
  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.setAttribute("aria-label", "Open navigation menu");

  menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  if (document.body.classList.contains("menu-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose.addEventListener("click", closeMenu);

menuOverlay.addEventListener("click", closeMenu);

// Close the menu after selecting a link

siteMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Allow the Escape key to close the menu

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
    closeMenu();
  }
});
