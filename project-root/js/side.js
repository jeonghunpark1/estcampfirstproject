export function initSidebarToggle() {
  const toggleBtn = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");

  toggleBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
  });
}
