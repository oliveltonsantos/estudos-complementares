let navExpand = document.querySelector(".nav__expand");
let nav = document.querySelector(".nav");
let navListItem = document.querySelectorAll(".nav__listitem");

navExpand.addEventListener("click", () => {
  nav.classList.toggle("nav-closed");
});

navListItem.forEach((link) => link.addEventListener("click", listActive));

function listActive() {
  navListItem.forEach((link) => link.classList.remove("nav__listitem-active"));
  this.classList.add("nav__listitem-active");
}
