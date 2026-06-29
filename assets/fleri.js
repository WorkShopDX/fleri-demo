/* Fleri デモ — 共通ヘッダー・フッター・メニューの注入とUI挙動
   各ページの <div id="site-header"></div> / <div id="site-footer"></div> に差し込む。
   data-current 属性（body）で現在地を判定し、ナビのハイライトに使う。 */
(function () {
  const arrow =
    '<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="h-5 w-5 text-muted-foreground" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
  const heart =
    '<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="h-4 w-4" aria-hidden="true"><path d="M12 20s-7-4.4-9.2-8.5C1.3 8.6 2.8 5.5 6 5.5c1.9 0 3.1 1.1 4 2.4.9-1.3 2.1-2.4 4-2.4 3.2 0 4.7 3.1 3.2 6C19 15.6 12 20 12 20z"/></svg>';

  const links = [
    { label: "ワークショップを探す", href: "workshops.html" },
    { label: "カテゴリ", href: "index.html#categories" },
    { label: "はじめての方へ", href: "index.html#start" },
    { label: "教える人へ", href: "for-instructors.html" },
  ];

  const headerHTML = `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="index.html" class="font-heading text-2xl font-bold tracking-wide text-primary">Fleri</a>
        <button type="button" id="menu-open" aria-label="メニューを開く"
          class="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="h-7 w-7" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </header>
    <div id="menu-overlay" class="fixed inset-0 z-[60] hidden">
      <button type="button" id="menu-close-bg" aria-label="メニューを閉じる" class="absolute inset-0 bg-foreground/30"></button>
      <nav class="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background p-6 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="font-heading text-xl font-bold text-primary">メニュー</span>
          <button type="button" id="menu-close" aria-label="メニューを閉じる" class="flex h-11 w-11 items-center justify-center rounded-full hover:bg-muted">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="h-7 w-7" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <ul class="mt-8 flex flex-col gap-1">
          ${links
            .map(
              (l) =>
                `<li><a href="${l.href}" class="flex items-center justify-between rounded-2xl px-4 py-4 text-lg text-foreground transition-colors hover:bg-muted">${l.label}${arrow}</a></li>`
            )
            .join("")}
        </ul>
        <div class="mt-auto border-t border-border pt-5">
          <p class="text-sm leading-relaxed text-muted-foreground">ログインなしで、すべてのワークショップにご参加いただけます。</p>
          <a href="#" class="mt-3 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline">${heart}ログイン／かんたん保存（任意）</a>
        </div>
      </nav>
    </div>`;

  const footerHTML = `
    <footer class="border-t border-border bg-card">
      <div class="mx-auto max-w-6xl px-5 py-12">
        <p class="font-heading text-2xl font-bold text-primary">Fleri</p>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">好きを咲かせよう。</p>
        <ul class="mt-8 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li><a href="for-instructors.html" class="underline-offset-4 transition-colors hover:text-foreground hover:underline">教える人へ</a></li>
          <li><a href="#" class="underline-offset-4 transition-colors hover:text-foreground hover:underline">利用規約</a></li>
          <li><a href="#" class="underline-offset-4 transition-colors hover:text-foreground hover:underline">特定商取引法に基づく表記</a></li>
          <li><a href="#" class="underline-offset-4 transition-colors hover:text-foreground hover:underline">プライバシーポリシー</a></li>
          <li><a href="#" class="underline-offset-4 transition-colors hover:text-foreground hover:underline">お問い合わせ</a></li>
        </ul>
        <p class="mt-6 text-xs text-muted-foreground/80">※これは動作デモです。掲載のワークショップ・先生・受講者の声はすべてサンプルです。</p>
        <p class="mt-4 text-xs text-muted-foreground">&copy; 2026 Fleri</p>
      </div>
    </footer>`;

  function mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  // キーボード操作時のフォーカス可視化（全インタラクティブ要素・全ページ共通）
  const focusStyle = document.createElement("style");
  focusStyle.textContent =
    "a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid #A05868;outline-offset:2px;border-radius:8px}";
  document.head.appendChild(focusStyle);

  document.addEventListener("DOMContentLoaded", function () {
    mount("site-header", headerHTML);
    mount("site-footer", footerHTML);

    const overlay = document.getElementById("menu-overlay");
    const open = document.getElementById("menu-open");
    const closeBtn = document.getElementById("menu-close");
    const closeBg = document.getElementById("menu-close-bg");
    const toggle = (show) => overlay && overlay.classList.toggle("hidden", !show);
    if (open) open.addEventListener("click", () => toggle(true));
    if (closeBtn) closeBtn.addEventListener("click", () => toggle(false));
    if (closeBg) closeBg.addEventListener("click", () => toggle(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });
  });
})();
