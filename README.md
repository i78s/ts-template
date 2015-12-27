# シンプルなTypeSript開発環境

ユニットテストはbabel-loaderを通すのでES2015で書けます

## テンプレートの構成

### src

tsファイルの置き場所

### lib

srcフォルダのコードの出力先

### test

テストコード(**Spec.js)の置き場所

## 使い方

### 事前準備

依存モジュールのインストールをします。
必要であればsudoをつけて実行してください

```
npm install
```

### build

srcフォルダのソースをコンパイルしてlibフォルダに出力します。

```
npm run build
```

### watch

srcフォルダのソースの変更を監視、コンパイルしてlibフォルダに出力します。

```
npm run watch
```

### test

buildタスクを走らせた後でテストを実行します。

```
npm run test
```

### start

watchタスク + testタスクが実行されます。

```
npm run start
```
