export function loadVideoCards() {
  const videoGrid = document.getElementById("video-grid");
  const template = document.getElementById("video-card-template");

  const videoDataList = [
    {
      videoId: "_piHYoqMJUs",
      thumbnail: "https://i.ytimg.com/vi/_piHYoqMJUs/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "1일 전"
    },
    {
      videoId: "0poey19dA0c",
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "3일 전"
    },
    {
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    }, {
      videoId: "0poey19dA0c",
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "3일 전"
    },
    {
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    }, {
      videoId: "0poey19dA0c",
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "3일 전"
    },
    {
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },{
      videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "5일 전"
    },
    {
      videoId: "pOvKK9DF_Wo",
      thumbnail: "https://i.ytimg.com/vi/pOvKK9DF_Wo/hqdefault.jpg",
      title: "제목",
      channelIcon: "/assets/icons/gudock.png",
      channelName: "채널",
      views: "조회수",
      uploaded: "1주 전"
    }
  ];

  videoDataList.forEach((video, index) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".thumbnail").src = video.thumbnail;
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


export function loadShortsCards() {
  const shortsRow = document.getElementById("shorts-row");
  const template = document.getElementById("shorts-card-template");

  const shortsDataList = [
    {
      thumbnail: "https://i.ytimg.com/vi/_piHYoqMJUs/hqdefault.jpg",
      title: "짧은 영상1",
      views: "조회수 5.1만회",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "짧은 영상2",
      views: "조회수 3.2만회",
    },
   {
      thumbnail: "https://i.ytimg.com/vi/_piHYoqMJUs/hqdefault.jpg",
      title: "짧은 영상1",
      views: "조회수 5.1만회",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "짧은 영상2",
      views: "조회수 3.2만회",
    },{
      thumbnail: "https://i.ytimg.com/vi/_piHYoqMJUs/hqdefault.jpg",
      title: "짧은 영상1",
      views: "조회수 5.1만회",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "짧은 영상2",
      views: "조회수 3.2만회",
    },{
      thumbnail: "https://i.ytimg.com/vi/_piHYoqMJUs/hqdefault.jpg",
      title: "짧은 영상1",
      views: "조회수 5.1만회",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
      title: "짧은 영상2",
      views: "조회수 3.2만회",
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
