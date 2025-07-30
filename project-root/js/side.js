export function initSidebarEvents() {
  const toggleBtn = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");
  const mainContent = document.querySelector(".main-content"); // 💡 추가

  if (toggleBtn && sideMenu && mainContent) {
  toggleBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    mainContent.classList.toggle("shifted"); 
  });
}
}
