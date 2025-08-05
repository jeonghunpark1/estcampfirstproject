export function initSidebarEvents() {
  const toggleBtn = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");
  const mainContent = document.querySelector(".main-content"); 

  if (toggleBtn && sideMenu) {
  toggleBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    mainContent.classList.toggle("shifted"); 
  });
}
}
