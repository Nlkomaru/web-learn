# スタイルについて

色の指定の際にはoklchを使用します。

```tsx
const color = "oklch(lightness chroma hue)";
```

```css
--color-primary: oklch(lightness chroma hue);
```

## フォント
英数字はPoppinsを使用します。
日本語はNoto Sans JPを使用します。
モノスペースはMontserratを使用します。
コードはJetBrains Monoを使用します。

## デザインシステム
pages/src/components/ui/にShadcnのコンポーネントがあるので、それをベースにpages/src/components/にコンポーネントを実装します。
海の景色をベースとしたデザインを目指しているので、デザインシステムは海の色をベースにしています。