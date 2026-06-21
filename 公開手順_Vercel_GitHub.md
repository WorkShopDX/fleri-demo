# デモ公開手順（GitHub → Vercel）

対象：`fleri-demo`（静的サイト）。ブラウザ操作のみ・無料。所要15〜20分（初回）。
ねらい：`https://〜.vercel.app` の公開URLを発行し、β講師に提示する。将来 fleri.jp ドメインへ接続も可能。

---

## ステップ0：アカウント（初回のみ）
- **GitHub**：https://github.com → Sign up（メール＋パスワード）
- **Vercel**：https://vercel.com → Sign up → **「Continue with GitHub」**（GitHubでログイン連携しておくと後が楽）

---

## ステップ1：GitHubに置き場所（リポジトリ）を作る
1. GitHubで右上「＋」→ **New repository**
2. Repository name：`fleri-demo`
3. Public でOK（Privateでも可）。「Add a README」等のチェックは**不要**
4. **Create repository**

## ステップ2：ファイルをアップロードする
1. 作ったリポジトリ画面で **「uploading an existing file」** のリンク（または Add file → Upload files）
2. エクスプローラーで `fleri-demo` フォルダを開き、**中身をすべて選択**
   （`index.html`・`workshops.html`・その他のhtml・`assets` フォルダ・`images` フォルダ・`README.md`）
   ※フォルダ`fleri-demo`自体ではなく、**中のファイル・フォルダをまとめて**ドラッグします
3. ブラウザのアップロード枠へドラッグ＆ドロップ（`assets`・`images`の中身も一緒に入ります）
4. 下の **Commit changes** をクリック

> 重要：リポジトリの**直下**に `index.html` が見える状態にしてください。`fleri-demo/index.html` のように1階層深くなると、トップページが表示されません。

## ステップ3：Vercelで公開する
1. https://vercel.com のダッシュボードで **Add New… → Project**
2. **Import Git Repository** に GitHub の `fleri-demo` が出る → **Import**
3. 設定画面：
   - Framework Preset：**Other**（自動でそうなるはず。ビルド不要の静的サイト）
   - Root Directory：**そのまま**（ステップ2で直下に置いた場合）。もし `fleri-demo` フォルダごと上げてしまった場合は、ここで **Edit → fleri-demo を選択**
4. **Deploy** をクリック
5. 数十秒で完了 → **Visit** で `https://〜.vercel.app` が開きます

## ステップ4：確認
- 発行されたURLをスマホでも開き、トップ → カテゴリ → 詳細 → 予約 → 完了 まで通るか確認
- URLを私に共有 → 各記録（台帳）に登録します

---

## あとから：本番ドメイン fleri.jp の接続（任意・MVP時でも可）
Vercel の Project → Settings → Domains → `fleri.jp` を追加し、表示されるDNS設定をドメイン側に登録。今すぐでなくてよい。

## 更新したいとき
GitHubのファイルを差し替える（Upload filesで上書き）と、Vercelが自動で再公開します。
