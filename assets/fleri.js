/* Fleri デモ — 共通ヘッダー（上部ナビ）／フッター／下部タブバー（モバイル）の注入とUI挙動
   2026-06-30 リブランド反映。各ページの <div id="site-header"></div> / <div id="site-footer"></div> に差し込む。
   配信画面（live/instructor-live）は site-header/footer を持たないため、フォーカス可視化のみ適用。 */
(function () {
  // キーボード操作時のフォーカス可視化（全ページ共通）
  const focusStyle = document.createElement("style");
  focusStyle.textContent =
    "a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid #2F6566;outline-offset:2px;border-radius:8px}";
  document.head.appendChild(focusStyle);

  const svg = (p) =>
    `<svg fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">${p}</svg>`;
  const path = (location.pathname.split("/").pop() || "index.html");

  const navLinks = [
    { label: "さがす", href: "workshops.html" },
    { label: "カテゴリ", href: "index.html#categories" },
    { label: "教える人へ", href: "for-instructors.html" },
  ];

  const headerHTML = `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div class="flex items-center gap-8">
          <a href="index.html" class="font-heading text-2xl font-bold tracking-wide text-primary">Fleri</a>
          <nav class="hidden items-center gap-6 md:flex">
            ${navLinks
              .map((l) => `<a href="${l.href}" class="text-sm font-medium text-foreground transition-colors hover:text-deep">${l.label}</a>`)
              .join("")}
          </nav>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl text-foreground" aria-hidden="true">${svg('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>')}</span>
          <a href="#" class="hidden px-2 py-2 text-sm font-semibold text-deep hover:underline md:inline">ログイン</a>
          <a href="instructor-signup.html" class="hidden items-center rounded-xl border-[1.5px] border-primary px-4 py-2 text-sm font-semibold text-deep md:inline-flex">会員登録</a>
        </div>
      </div>
    </header>`;

  const tabs = [
    { label: "ホーム", href: "index.html", match: ["index.html", ""], icon: '<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/>' },
    { label: "さがす", href: "workshops.html", match: ["workshops.html", "workshop.html"], icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>' },
    { label: "", href: "instructor-workshop-new.html", plus: true, icon: '<path d="M12 5v14M5 12h14"/>' },
    { label: "通知", href: "#", icon: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.5 21a2 2 0 0 1-3 0"/>' },
    { label: "マイ", href: "instructor-dashboard.html", match: ["instructor-dashboard.html", "instructor-workshop-new.html"], icon: '<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>' },
  ];

  const tabbarHTML = `
    <nav class="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-border bg-background/95 px-5 pb-3 pt-2 backdrop-blur-sm md:hidden">
      ${tabs
        .map((t) => {
          if (t.plus) {
            return `<a href="${t.href}" class="flex flex-col items-center" aria-label="ワークショップを作る"><span class="flex h-9 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">${svg(t.icon)}</span></a>`;
          }
          const on = t.match && t.match.includes(path);
          return `<a href="${t.href}" class="flex flex-1 flex-col items-center gap-0.5 text-[10px] ${on ? "text-deep" : "text-muted-foreground"}">${svg(t.icon)}${t.label}</a>`;
        })
        .join("")}
    </nav>`;

  const footerHTML = `
    <footer class="border-t border-border bg-card pb-24 md:pb-12">
      <div class="mx-auto max-w-6xl px-5 py-12">
        <p class="font-heading text-2xl font-bold text-primary">Fleri</p>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">好きなことで、つながる。</p>
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
    </footer>
    ${tabbarHTML}`;

  function mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    mount("site-header", headerHTML);
    mount("site-footer", footerHTML);
  });
})();
