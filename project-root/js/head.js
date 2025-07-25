document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".hamburger");
  const micBtn = document.getElementById("micBtn");
  const searchInput = document.getElementById("searchInput");

  // 사이드바 로드 및 이벤트 연결
  fetch("/pages/side.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("side-container").innerHTML = html;

      const sideMenu = document.querySelector(".side-menu");
      toggleBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
      });
    });

  // 음성 인식
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition && micBtn && searchInput) {
    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;

    micBtn.addEventListener("click", () => {
      recognition.start();
    });

    recognition.addEventListener("result", (event) => {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
    });

    recognition.addEventListener("error", (e) => {
      console.error("음성 인식 오류:", e);
    });
  }
});
