import { initHeaderEvents } from "./head.js";
import { initSidebarEvents } from "./side.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("/pages/components/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-container").innerHTML = html;
    })
    .then(() => {
      initHeaderEvents(); // 헤더 기능 등록
      return fetch("/pages/components/side.html");
    })
    .then(res => res.text())
    .then(html => {
      document.getElementById("side-container").innerHTML = html;
    })
    .then(() => {
      initSidebarEvents(); 
    })
    .catch(err => console.error("컴포넌트 로딩 실패:", err));
});
