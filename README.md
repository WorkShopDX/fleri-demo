# Fleri クリックデモ（フロントのみ）

作成：2026-06-21　フロントエンド実装チーム（Claude）
目的：β候補講師・関係者に「これがFleriです」と**実際に触って見せられる**動作デモ。
位置づけ：見た目とクリック導線の確認用。**決済・配信・通知は画面まで（実際には動きません）**。トップページで確立したデザインを全画面で流用。

## 画面一覧と導線

| ファイル | 画面 | 主な遷移先 |
|---------|------|-----------|
| `index.html` | トップ（参加者） | カテゴリ→一覧・詳細・教える人へ |
| `workshops.html` | ワークショップ一覧（カテゴリ絞り込み） | カテゴリchipで絞込・`?cat=flower`等で初期絞込 → 詳細 |
| `workshop.html` | ワークショップ詳細 | → LINEで予約／メールで予約 |
| `checkout.html` | 予約・お支払い（Stripe風） | → 確定で完了画面 |
| `thanks.html` | 予約完了・LINE友だち追加 | → 参加画面デモ |
| `live.html` | ライブ参加（参加者） | 退出で**ライブ後アンケート→講師フォロー** |
| `for-instructors.html` | 講師LP（料金・比較） | → 無料ではじめる |
| `instructor-signup.html` | 講師登録（3ステップ・カテゴリ最大2つ） | → ダッシュボード |
| `instructor-dashboard.html` | 講師ダッシュボード（配信枠・ファン数・売上） | → 作成／配信開始 |
| `instructor-workshop-new.html` | ワークショップ作成（90分・10名・最低1,500円・公開時LINE通知） | → ダッシュボード |
| `instructor-live.html` | ライブ配信（講師） | 終了で確認→ダッシュボード |
| `assets/` | 共通：Tailwind設定・ヘッダー/フッター/メニュー | — |
| `images/` | サンプル画像 | — |

### おすすめの見せ方（クリックツアー）
1. **参加者**：index → カード → workshop → 予約に進む → checkout →（確定）→ thanks → 参加画面デモ → 退出でアンケート
2. **講師**：index 右上メニュー「教える人へ」→ for-instructors → 無料ではじめる → signup →（登録）→ dashboard → 配信をはじめる → 終了 → dashboard

## ローカルで見る
`index.html` をダブルクリックしてChromeで開くだけ。各リンクで全画面を行き来できます（ネット接続が必要：フォントとTailwindをCDN取得）。

## 公開する（Vercel・ドラッグ＆ドロップ）
1. [https://vercel.com](https://vercel.com) にGoogleアカウントでログイン（無料）
2. ダッシュボードで「Add New… → Project」または「Deploy」
3. この `fleri-demo` フォルダ**ごと**ドラッグ＆ドロップ（静的サイトとして認識されます）
4. 数十秒で `https://〜.vercel.app` の公開URLが発行されます

> 補足：Netlify Drop（https://app.netlify.com/drop）にフォルダを落としても同様に即公開できます。

## 技術メモ
- 静的HTML＋Tailwind Play CDN（`assets/tailwind-config.js` にブランドカラー）。ビルド不要。
- ヘッダー/フッター/メニューは `assets/fleri.js` が全ページに注入（一貫性のため）。
- 本実装（MVP）への発展時は Next.js + Supabase + Stripe + Agora + LINE へ載せ替え。本デモはその見た目・導線の基準として流用可能。
