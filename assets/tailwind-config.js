/* Fleri デザインシステム — Tailwind（Play CDN）共通設定
   2026-06-30 リブランド反映：モダン×ボタニカル／メインカラー ティール #5C9596
   フォントは Noto Sans JP に統一（丸ゴシック廃止） */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: "#F7F6F2",            /* 温かいオフホワイト */
        foreground: "#23211C",            /* インク（本文） */
        card: { DEFAULT: "#FFFFFF", foreground: "#23211C" },
        primary: { DEFAULT: "#5C9596", foreground: "#FFFFFF" },   /* ティール（メイン） */
        secondary: { DEFAULT: "#7FB0AE", foreground: "#1F4140" }, /* ソフトティール（タグ/アバター地） */
        muted: { DEFAULT: "#EFEDE7", foreground: "#6B6760" },
        accent: { DEFAULT: "#5C9596", foreground: "#2F6566" },    /* アイコン地に /25 で使用 */
        border: "#E6E3DC",
        deep: "#2F6566",                  /* 濃ティール（小さい文字・リンク・アクティブ＝AA確保） */
        soft: "#E6F0F0",                  /* 淡ティール面 */
      },
      fontFamily: {
        heading: ['"Noto Sans JP"', "sans-serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
      borderRadius: { xl: "0.875rem", "2xl": "1.25rem", "3xl": "1.5rem", "4xl": "2rem" },
    },
  },
};
