  // ==================== 댓글 기능 ====================
  
  const commentInput = document.querySelector('.comment-input textarea');
  const commentList = document.querySelector('.comment-list');
  
  commentInput.addEventListener('keydown', function (event) {
    try {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        setTimeout(() => {
          const commentText = commentInput.value.trim();
          if (!commentText) return;

          const commentEl = document.createElement('div');
          commentEl.className = 'comment';

          const iconEl = document.createElement('i');
          iconEl.className = 'bi bi-person-circle comment-icon';

          const contentEl = document.createElement('div');
          contentEl.className = 'comment-content';

          const nameEl = document.createElement('strong');
          nameEl.textContent = '사용자';

          const textEl = document.createElement('p');
          textEl.textContent = commentText;

          contentEl.appendChild(nameEl);
          contentEl.appendChild(textEl);
          commentEl.appendChild(iconEl);
          commentEl.appendChild(contentEl);

          commentList.prepend(commentEl);
          commentInput.value = '';
        }, 0);
      }
    } catch (error) {
      console.error('❌ 댓글 추가 중 오류:', error);
      alert('⚠️ 댓글을 추가하는 중 문제가 발생했어요.');
    }
  });


  // ==================== 좋아요 / 싫어요 기능 ====================

  const likeBtn = document.getElementById('like-btn');
  const dislikeBtn = document.getElementById('dislike-btn');
  const likeCount = document.getElementById('like-count');

  likeCount.textContent = '120';

  likeBtn.addEventListener('click', () => {
    const current = parseInt(likeCount.textContent, 10);
    likeCount.textContent = current + 1;
  });

  dislikeBtn.addEventListener('click', () => {
    const current = parseInt(likeCount.textContent, 10);
    likeCount.textContent = current - 1;
  });


  // ==================== 추천 영상 동적 생성 ====================

 document.addEventListener('DOMContentLoaded', () => {
  const recommendSection = document.getElementById('recommend-section');
  const template = document.getElementById('recommend-card-template');

  const recommendations = [
    {
      videoId: "ZmLXLRxs4BY",
      thumbnail: "https://img.youtube.com/vi/ZmLXLRxs4BY/hqdefault.jpg",
      title: "장꾸 유재석 런닝맨",
      channel: "SBS",
      meta: "조회수 10만회 · 1일 전"
    },
    {
      videoId: "-xW4rko5Q-M",
      thumbnail: "https://img.youtube.com/vi/-xW4rko5Q-M/hqdefault.jpg",
      title: "구글 무료 자동화툴 출시?",
      channel: "엉터리뚱땅땅",
      meta: "조회수 20만회 · 2일 전"
    },
    {
      videoId: "e0koWWAmXSk",
      thumbnail: "https://img.youtube.com/vi/e0koWWAmXSk/hqdefault.jpg",
      title: "도커 완전 기초",
      channel: "애플코딩",
      meta: "조회수 100만회 · 3일 전"
    },
    {
      videoId: "0XL49OfTzrA",
      thumbnail: "https://img.youtube.com/vi/0XL49OfTzrA/hqdefault.jpg",
      title: "가만히 눈을 감아보아요",
      channel: "음악최고",
      meta: "조회수 200만회 · 1주 전"
    },
    {
      videoId: "ehx994vl5j8",
      thumbnail: "https://img.youtube.com/vi/ehx994vl5j8/hqdefault.jpg",
      title: "윤아를 위한 악마들의 요리",
      channel: "SBS",
      meta: "조회수 4.1만회 · 1일 전"
    },
    {
      videoId: "lYtm5pe2VXA",
      thumbnail: "https://img.youtube.com/vi/lYtm5pe2VXA/hqdefault.jpg",
      title: "24시간 꿀잼 vs 노잼",
      channel: "파뿌리",
      meta: "조회수 100만회 · 5일 전"
    },
    {
      videoId: "9waYRes1ijg",
      thumbnail: "https://img.youtube.com/vi/9waYRes1ijg/hqdefault.jpg",
      title: "이승기의 노래",
      channel: "이승기",
      meta: "조회수 100만회 · 2주 전"
    },
    {
      videoId: "CiLczg0Gx6U",
      thumbnail: "https://img.youtube.com/vi/CiLczg0Gx6U/hqdefault.jpg",
      title: "나한테만 그러는 이유",
      channel: "공감쇼츠",
      meta: "조회수 1만회 · 5일 전"
    },
    {
      videoId: "Vr3ioORRrwM",
      thumbnail: "https://img.youtube.com/vi/Vr3ioORRrwM/hqdefault.jpg",
      title: "트럼프 소신 발언",
      channel: "미국정치썰",
      meta: "조회수 200만회 · 3시간 전"
    },
    {
      videoId: "5gt8UodiSBY",
      thumbnail: "https://img.youtube.com/vi/5gt8UodiSBY/hqdefault.jpg",
      title: "미래에서 온 남편",
      channel: "연애상담소",
      meta: "조회수 20만회 · 1일 전"
    }
  ];

  recommendations.forEach(video => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.video-card');

    card.addEventListener('click', () => {
      window.location.href = `/pages/video.html?videoId=${video.videoId}`;
    });

    card.querySelector('.recommend-thumbnail').src = video.thumbnail;
    card.querySelector('.recommend-title').textContent = video.title;
    card.querySelector('.recommend-channel').textContent = video.channel;
    card.querySelector('.recommend-meta').textContent = video.meta;

    recommendSection.appendChild(clone);
  });

  // iframe 삽입
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("videoId");
  const iframe = document.getElementById("video-frame");

  if (videoId && iframe) {
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
  }
});
