// js/main.js

window.addEventListener('DOMContentLoaded', () => {
  // --- 1) お問い合わせフォームがあるページ(contact.html)で動作するバリデーション ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      const nameValue = document.getElementById('name')?.value.trim() || "";
      const emailValue = document.getElementById('email')?.value.trim() || "";
      const messageValue = document.getElementById('message')?.value.trim() || "";

      if (!nameValue || !emailValue || !messageValue) {
        event.preventDefault();
        alert('全ての項目を入力してください。');
      } else {
        alert(`お問い合わせありがとうございます。\nお名前: ${nameValue}\nメール: ${emailValue}`);
        // 実際に送信するにはサーバー側処理が必要（action先やバックエンドなど）
      }
    });
  }

  // --- 2) メンバー紹介カードを「Intersection Observer」で監視し、画面内に入ったらフェードイン ---
  const cards = document.querySelectorAll('.member-card');

  // Intersection Observer のオプション
  const options = {
    threshold: 0.1 // 要素が10%ほど画面内に入ったら反応
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // .show クラスを付与してフェードイン
        entry.target.classList.add('show');
        // 一度フェードインしたら監視をやめる（重複アニメ回避）
        obs.unobserve(entry.target);
      }
    });
  }, options);

  // 監視を開始
  cards.forEach(card => {
    observer.observe(card);
  });
});
