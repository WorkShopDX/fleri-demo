/* Fleri デザインシステム — Tailwind（Play CDN）共通設定
   globals.css の OKLCH トークンを hex 近似に変換。
   オフホワイト × くすみピンク × セージグリーン */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",            /* オフホワイト */
        foreground: "#463F3A",
        card: { DEFAULT: "#FCFBF8", foreground: "#463F3A" },
        primary: { DEFAULT: "#A05868", foreground: "#FDFBF7" },   /* くすみピンク（濃） */
        secondary: { DEFAULT: "#8FA68E", foreground: "#36422F" }, /* セージグリーン */
        muted: { DEFAULT: "#ECE8E2", foreground: "#82766B" },
        accent: { DEFAULT: "#D4A5A0", foreground: "#4A3A36" },    /* くすみピンク（淡） */
        border: "#E4DED6",
      },
      fontFamily: {
        heading: ['"Zen Maru Gothic"', '"Noto Sans JP"', "sans-serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
      borderRadius: { "2xl": "1.25rem", "3xl": "1.5rem", "4xl": "2rem" },
    },
  },
};
