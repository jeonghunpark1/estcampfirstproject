import { initHeaderEvents ,initProfileEvents} from "./head.js";
import { initSidebarEvents } from "./side.js";
import { loadVideoCards, loadShortsCards } from "./card.js";

document.addEventListener("DOMContentLoaded", async () => {
  const headerEl = document.getElementById("header-container");
  const sideEl = document.getElementById("side-container");
  const cardEl = document.getElementById("card-container");

  try {
    const headerHTML = await fetch("/pages/components/header.html").then(res => res.text());
    headerEl.innerHTML = headerHTML;
    initHeaderEvents();
    initProfileEvents();  
    const sideHTML = await fetch("/pages/components/side.html").then(res => res.text());
    sideEl.innerHTML = sideHTML;
    initSidebarEvents();

    // 👉 card-container가 있는 경우만 카드 관련 컴포넌트 로딩
    if (cardEl) {
      const cardHTML = await fetch("/pages/components/card.html").then(res => res.text());
      cardEl.innerHTML = cardHTML;
      loadVideoCards();
      loadShortsCards();
    }

  } catch (error) {
    console.error("컴포넌트 로딩 중 오류 발생:", error);
  }
});
