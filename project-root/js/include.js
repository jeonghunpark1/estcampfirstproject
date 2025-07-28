import { initHeaderEvents } from "./head.js";
import { initSidebarEvents } from "./side.js";

// DOM 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 1. header.html 불러오기
  fetch("/pages/components/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-container").innerHTML = html;
    })
    .then(() => {
      initHeaderEvents(); // 헤더 기능 등록

      // 2. header가 로드된 후 side 로드 (햄버거 버튼 연결 위해)
      return fetch("/pages/components/side.html");
    })
    .then(res => res.text())
    .then(html => {
      document.getElementById("side-container").innerHTML = html;
    })
    .then(() => {
      initSidebarEvents(); // 사이드바 기능 등록
    })
    .catch(err => console.error("컴포넌트 로딩 실패:", err));
});
