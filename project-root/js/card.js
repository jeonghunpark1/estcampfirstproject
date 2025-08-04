export function loadVideoCards() {
  const videoGrid = document.getElementById("video-grid");
  const template = document.getElementById("video-card-template");

  const videoDataList = [
    {
      thumbnail: "https://i.ytimg.com/vi/3T2s3f2Zk6Q/hqdefault.jpg",
      title: "냉장고를 부탁해",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "호호호",
      views: "조회수 1.2만회",
      uploaded: "2일 전"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/HbBjHIwtjlI/hq720.jpg",
      title: "[Playlist] 지친 당신을 위로해 줄 새벽 감성 유스케 ",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수 3.1만회",
      uploaded: "3일 전"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/_CGsOkBOOr8/hq720.jpg",
      title: "런닝맨",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "하하하",
      views: "조회수 128만회",
      uploaded: "5일 전"
    },
  ];

  videoDataList.forEach(video => {
    const card = template.content.cloneNode(true);

    card.querySelector(".thumbnail").src = video.thumbnail;
    card.querySelector(".channel-icon").src = video.channelIcon;
    card.querySelector(".video-title").textContent = video.title;
    card.querySelector(".channel-name").textContent = video.channelName;
    card.querySelector(".video-meta").textContent = `${video.views} · ${video.uploaded}`;

    videoGrid.appendChild(card);
  });
}

export function loadShortsCards() {
  const shortsRow = document.getElementById("shorts-row");
  const template = document.getElementById("shorts-card-template");

  const shortsDataList = [
   {
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },
    {
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },
    {
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },{
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },{
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },{
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },{
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },{
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      views: "조회수 128만회",

    },
  ];

  shortsDataList.forEach(short => {
    const card = template.content.cloneNode(true);

    card.querySelector(".shorts-thumbnail").src = short.thumbnail;
    card.querySelector(".shorts-title-text").textContent = short.title;
    card.querySelector(".shorts-meta").textContent = short.views;

    shortsRow.appendChild(card);
  });
}
