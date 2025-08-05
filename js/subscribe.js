export function loadSubscribeCards() {
  const subscribeGrid = document.getElementById("subscribe-grid");
  const template = document.getElementById("subscribe-video-template");

  const subscribeVideoList = [
    {
      videoId: "ZmLXLRxs4BY",
      channelIcon: "./assets/icons/gudock.png",
      duration: "12:34",
      title: "장꾸 유재석 런닝맨",
      channelName: "SBS",
      views: "조회수 10만회",
      time: "1일 전",
      description: "유재석이 또 사고쳤다? 런닝맨 역대급 장꾸 에피소드 모음!"
    },
    {
      videoId: "-xW4rko5Q-M",
      channelIcon: "./assets/icons/gudock.png",
      duration: "8:51",
      title: "구글 무료 자동화툴 출시?",
      channelName: "엉터리뚱땅땅",
      views: "조회수 20만회",
      time: "2일 전",
      description: "노코드 자동화 시대 도래! 구글의 새로운 시도는?"
    },
    {
      videoId: "e0koWWAmXSk",
      channelIcon: "./assets/icons/gudock.png",
      duration: "15:03",
      title: "도커 완전 기초",
      channelName: "애플코딩",
      views: "조회수 100만회",
      time: "3일 전",
      description: "개발자의 필수 스킬, Docker를 완전 정복해보자!"
    }
  ];

  subscribeVideoList.forEach(video => {
    const card = template.content.cloneNode(true);
    const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

    card.querySelector(".channel-icon").src = video.channelIcon;
    card.querySelector(".thumbnail").src = thumbnailUrl;
    card.querySelector(".video-duration").textContent = video.duration;
    card.querySelector(".video-title").textContent = video.title;
    card.querySelector(".channel-name").textContent = video.channelName;
    card.querySelector(".view-count").textContent = video.views;
    card.querySelector(".upload-time").textContent = video.time;
    card.querySelector(".video-description").textContent = video.description;

    card.querySelector(".subscribe-video-card").addEventListener("click", () => {
      window.location.href = `./pages/video.html?videoId=${video.videoId}`;
    });

    subscribeGrid.appendChild(card);
  });
}
