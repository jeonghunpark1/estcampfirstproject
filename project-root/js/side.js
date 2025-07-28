export function initSidebarEvents() {
  const toggleBtn = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");

  if (toggleBtn && sideMenu) {
    toggleBtn.addEventListener("click", () => {
      sideMenu.classList.toggle("open");
    });
  }
}
