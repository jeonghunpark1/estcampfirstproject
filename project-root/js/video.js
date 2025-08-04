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
        videoId: "_piHYoqMJUs",
        thumbnail: "https://i.ytimg.com/vi/_piHYoqMJUs/hqdefault.jpg",
        title: "제목1",
        channel: "채널1",
        meta: "조회수 12만회 · 1주 전"
      },
      {
        videoId: "0poey19dA0c",
        thumbnail: "https://i.ytimg.com/vi/0poey19dA0c/hqdefault.jpg",
        title: "제목2",
        channel: "채널2",
        meta: "조회수 8만회 · 3일 전"
      },
      {
        videoId: "-Q5O71sOM_0",
      thumbnail: "https://i.ytimg.com/vi/-Q5O71sOM_0/hqdefault.jpg",
        title: "제목3",
        channel: "채널3",
        meta: "조회수 24만회 · 1개월 전"
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

    // ==================== videoId에 따라 iframe 동적 삽입 ====================
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get("videoId");
    const iframe = document.getElementById("video-frame");

    if (videoId && iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
    }
  });
