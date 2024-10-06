/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        navBurger = document.querySelector('.nav__burger'),
        navClose = document.querySelector('.nav__close');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu');

      // Toggle show-icon class to switch between burger and close icons
      toggle.classList.toggle('show-icon');
    });
  }
}

showMenu('nav-toggle', 'nav-menu');

showMenu('nav-toggle', 'nav-menu');

/* Smooth scroll to services section */
function scrollToServices() {
  const servicesSection = document.querySelector(".section-title");
  servicesSection.scrollIntoView({ behavior: "smooth" });
}

/* Open the gallery when clicking on the first hidden gallery image */
function openGallery() {
  var firstImageLink = document.querySelector('.gallery__hidden a');
  if (firstImageLink) {
    firstImageLink.click();
  }
}
