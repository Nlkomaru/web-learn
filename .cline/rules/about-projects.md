## このアプリケーションの概要
「Web Learn」という、Web開発を学ぶためのアプリケーションです。
page部分とslide部分に分かれています。

## 主な機能
- page部分
  - ユーザーが簡単にSlideにアクセスできる。
- slide部分
  - ユーザーが簡単にスライドを作成できる。
  - スライドをシェアできる。

## 主な技術スタック
### Page部分
- フレームワーク: Next.js (with OpenNext)
- 言語: TypeScript
- パッケージマネージャー: pnpm
- Headless UIライブラリ: Radix UI
- UIライブラリ: Shadcn UI
- CSSライブラリ: Tailwind CSS
- state管理: jotai with hash

### Slide部分
- フレームワーク: Slidev
- 言語: Vue.js + TypeScript
- パッケージマネージャー: pnpm
- CSSライブラリ: Unocss