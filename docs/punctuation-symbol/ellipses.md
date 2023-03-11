---
sidebar_position: 8
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# エリプシス（...）

エリプシス（...）についての説明です。

## エリプシスを使う場面

エリプシスは何らかの文字が省略されていることを表します。

また、ユーザー・インターフェイスでは操作指示が完了するまでに別の手順が入ることを示します（例：「Save as ...」では保存が完了するまでに保存ダイアログが開く）。

エリプシスは以下のいずれかで書きます。同じプロジェクト内や文書内ではどちらかに統一しましょう。

- 半角ピリオド3つをスペースなしで並べる（...）
- 三点リーダー（…）を使う
    - UnicodeでU+2026
    - 使うフォントによっては点が下ではなく真ん中に表示

**例1**

```
android {
  ...
  defaultConfig {
    ...
    minSdkVersion 26
    targetSdkVersion 29
  }
}
```
> （引用元：[Android Developers](https://developer.android.com/guide/components/fundamentals?hl=en)、2023-02-15閲覧）

### 文中で使う場合

例2のように文中で使う場合、エリプシスの前後に半角スペースを入れます。ただし後にカンマやピリオドが置かれる場合はスペースは入れません（例：「…,」）。また文末に来る場合でもピリオドは省略しません（例：「….」）。

**例2**

> “Kotlin and languages like it help us offload things that we’re not that good at … Creative and critical thinking tasks are now where we get to focus more.”
>
> （引用元：[Android Developers](https://developer.android.com/kotlin/stories?hl=en)、2023-02-15閲覧）

## 主要ITスタイルガイド間の相違

Googleでは、エリプシスをピリオド3つ（...）としています。一方、Microsoftはエリプシスを三点リーダー（…）で例示しています。

前述のように、本スタイルガイドでは、どちらを使ってもよいが同じプロジェクト内や文書内では統一するとしています。

## 関連資料

- Google developer documentation style guide
    - [Ellipses](https://developers.google.com/style/ellipses)
- Microsoft Style Guide
    - [Ellipses](https://learn.microsoft.com/en-us/style-guide/punctuation/ellipses)
