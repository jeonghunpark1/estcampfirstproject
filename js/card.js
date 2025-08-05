let videoDataList = [
  {
    videoId: "ZmLXLRxs4BY",
    title: "장꾸 유재석 런닝맨",
    channelIcon: "../assets/icons/gudock.png",
    channelName: "SBS",
    views: "10만",
    uploaded: "1일 전"
  },
  {
    videoId: "-xW4rko5Q-M",
    title: "구글 무료 자동화툴 출시?",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "엉터리뚱땅땅",
    views: "20만",
    uploaded: "1일 전"
  },
  {
    videoId: "e0koWWAmXSk",
    title: "docker",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "애플코딩",
    views: "100만",
    uploaded: "1일 전"
  },
  {
    videoId: "0XL49OfTzrA",
    title: "가만히 눈을 감아보아요",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "음악최고",
    views: "200만",
    uploaded: "1일 전"
  },
  {
    videoId: "ehx994vl5j8",
    title: "윤아를 위한 악마들의 요리",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "SBS",
    views: "4.1만",
    uploaded: "1일 전"
  },
  {
    videoId: "lYtm5pe2VXA",
    title: "24시간동안 꿀잼과 노잼",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "파뿌리",
    views: "100만",
    uploaded: "1일 전"
  },
  {
    videoId: "lYtm5pe2VXA",
    title: "이찬원의 자작곡 라이브",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "케네스틱",
    views: "300만",
    uploaded: "1일 전"
  },
  {
    videoId: "9waYRes1ijg",
    title: "이승기의 노래",
    channelIcon: "./assets/icons/gudock.png",
    channelName: "이승기",
    views: "100만",
    uploaded: "1일 전"
  }
];

// 🔹 영상 카드 로딩 및 필터 이벤트
export function loadVideoCards() {
  renderFilteredCards(videoDataList);

  // 검색 이벤트 수신
  document.addEventListener("searchKeyword", (e) => {
    const keyword = e.detail;
    const filtered = videoDataList.filter(video =>
      video.title.toLowerCase().includes(keyword) ||
      video.channelName.toLowerCase().includes(keyword)
    );
    renderFilteredCards(filtered);
  });
}

// 🔹 카드 렌더링 함수
function renderFilteredCards(data) {
  const videoGrid = document.getElementById("video-grid");
  const template = document.getElementById("video-card-template");
  if (!videoGrid || !template) return;

  videoGrid.innerHTML = "";

  data.forEach(video => {
    const card = template.content.cloneNode(true);
    const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

    card.querySelector(".thumbnail").src = thumbnailUrl;
    card.querySelector(".channel-icon").src = video.channelIcon;
    card.querySelector(".video-title").textContent = video.title;
    card.querySelector(".channel-name").textContent = video.channelName;
    card.querySelector(".video-meta").textContent = `${video.views} · ${video.uploaded}`;

    card.querySelector(".video-card").addEventListener("click", () => {
      window.location.href = `/pages/video.html?videoId=${video.videoId}`;
    });

    videoGrid.appendChild(card);
  });
}

// 🔹 쇼츠 카드 생성
export function loadShortsCards() {
  const shortsRow = document.getElementById("shorts-row");
  const template = document.getElementById("shorts-card-template");

  const shortsDataList = [
    {
      thumbnail: "https://img.youtube.com/vi/_piHYoqMJUs/hqdefault.jpg",
      title: "개발자를 대체한다고?",
      views: "10만 · 1일전"
    },
    {
      thumbnail: "https://img.youtube.com/vi/0SHxoFCrv-0/hqdefault.jpg",
      title: "개발자의 평가법",
      views: "13만 · 2일전"
    },
    {
      thumbnail: "https://img.youtube.com/vi/CiLczg0Gx6U/hqdefault.jpg",
      title: "나한테만 그러는 이유",
      views: "1만 · 5일전"
    },
    {
      thumbnail: "https://img.youtube.com/vi/Vr3ioORRrwM/hqdefault.jpg",
      title: "미국 트럼프 소신발언 하겠습니다.",
      views: "200만 · 3시간전"
    },
    {
      thumbnail: "https://img.youtube.com/vi/5gt8UodiSBY/hqdefault.jpg",
      title: "미래에서 온 남편",
      views: "20만 · 1일전"
    }
  ];

  if (!shortsRow || !template) return;

  shortsDataList.forEach(short => {
    const card = template.content.cloneNode(true);
    card.querySelector(".shorts-thumbnail").src = short.thumbnail;
    card.querySelector(".shorts-title-text").textContent = short.title;
    card.querySelector(".shorts-meta").textContent = short.views;
    shortsRow.appendChild(card);
  });
}
