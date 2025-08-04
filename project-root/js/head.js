export function initHeaderEvents() {
  const micBtn = document.getElementById("micBtn");
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.querySelector(".search-box");

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition && micBtn && searchInput) {
    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;

    micBtn.addEventListener("click", () => recognition.start());

    recognition.addEventListener("result", (event) => {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
    });

    recognition.addEventListener("error", (e) => {
      console.error("음성 인식 오류:", e);
    });
  }

  // 🔍 검색 이벤트 등록
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const keyword = searchInput.value.trim().toLowerCase();
      const event = new CustomEvent("searchKeyword", { detail: keyword });
      document.dispatchEvent(event);
    });
  }
}

export function initProfileEvents() {
  const profileBtn = document.querySelector(".profile");
  const profilePopup = document.getElementById("profilePopup");

  if (profileBtn && profilePopup) {
    profileBtn.addEventListener("click", () => {
      profilePopup.classList.toggle("d-none");
    });

    document.addEventListener("click", (e) => {
      if (!profilePopup.contains(e.target) && !profileBtn.contains(e.target)) {
        profilePopup.classList.add("d-none");
      }
    });
  }
}
