// SiteShift テストサイト 共通スクリプト（外部送信なし）
(function () {
  'use strict';

  // 現在ページのナビをハイライト
  var path = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.site-nav a[href]');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    if (href === path) { links[i].classList.add('is-active'); }
  }

  // スマホ用メニュー開閉
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // フッターの年
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }

  // お問い合わせフォーム：送信せず画面に入力内容を表示するだけ（テスト用）
  var form = document.getElementById('contact-form');
  var result = document.getElementById('form-result');
  if (form && result) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var fields = [
        ['会社名', 'company'],
        ['お名前', 'name'],
        ['メール', 'email'],
        ['ご相談内容', 'topic'],
        ['メッセージ', 'message']
      ];
      var dl = result.querySelector('dl');
      while (dl.firstChild) { dl.removeChild(dl.firstChild); }
      for (var j = 0; j < fields.length; j++) {
        var el = form.elements[fields[j][1]];
        var dt = document.createElement('dt');
        dt.textContent = fields[j][0];
        var dd = document.createElement('dd');
        dd.textContent = el && el.value ? el.value : '（未入力）';
        dl.appendChild(dt);
        dl.appendChild(dd);
      }
      result.classList.add('is-visible');
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
})();
