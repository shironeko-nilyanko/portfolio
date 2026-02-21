// ヘッダースクロール
window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('is-scrolled', window.scrollY > 60);
});

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('is-visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
