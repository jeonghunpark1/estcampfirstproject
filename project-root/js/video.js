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
      thumbnail: "/assets/thumb/1.jpg",
      title: "제목",
      channel: "채널",
      meta: "조회수 12만회 · 1주 전"
    },
    {
      thumbnail: "/assets/thumb/2.jpg",
      title: "제목",
      channel: "채널",
      meta: "조회수 8만회 · 3일 전"
    },
    {
      thumbnail: "/assets/thumb/3.jpg",
      title: "제목",
      channel: "채널",
      meta: "조회수 24만회 · 1개월 전"
    }
    // 필요시 더 추가 가능
  ];

  recommendations.forEach(video => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('.recommend-thumbnail').src = video.thumbnail;
    clone.querySelector('.recommend-title').textContent = video.title;
    clone.querySelector('.recommend-channel').textContent = video.channel;
    clone.querySelector('.recommend-meta').textContent = video.meta;

    recommendSection.appendChild(clone);
  });
});
