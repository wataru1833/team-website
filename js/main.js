// js/main.js

// ページの読み込みが完了したらスクリプトを実行する
window.addEventListener('DOMContentLoaded', () => {
    // お問い合わせフォームがあるページ(contact.html)で動作するサンプル
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        // 各フォーム要素の値を取得
        const nameValue = document.getElementById('name').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const messageValue = document.getElementById('message').value.trim();
  
        // 簡易的なバリデーション
        if (!nameValue || !emailValue || !messageValue) {
          event.preventDefault(); // 送信キャンセル
          alert('全ての項目を入力してください。');
        } else {
          alert(`お問い合わせありがとうございます。\nお名前: ${nameValue}\nメール: ${emailValue}`);
          // このままだと実際にはサーバーに送信されず、リロードされるだけ
          // もしサーバー側で処理するなら、action属性やバックエンドの設定が必要
        }
      });
    }
  });
  