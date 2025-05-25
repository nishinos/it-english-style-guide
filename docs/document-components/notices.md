---
sidebar_position: 5
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 注意書き

本文から独立させる形で、注意書きを記述できます。

## 注意書きの種類

注意書きにはいくつか種類があり、代表的なものとその見出しに用いられる英単語も示します。

### Note

補足やコツを書くのに使います。読者に危険を知らせるのではなく、有益な情報を記載します。

**例**

> **Note:** This version will only compile against the Android 11 SDK.
> 
> （引用元：[Android Developers](https://developer.android.com/jetpack/androidx/releases/core)、2023-02-13閲覧）

### Caution

注意しながら進むよう知らせるのに使います。

**例**

> **Caution**: ES6 modules are not yet supported.
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script/guides/v8-runtime)、2023-02-13閲覧）

### Warning

「Caution」よりも強い注意喚起です。禁止したり、危険があることを知らせたりするのに使います。無視した場合、データ消失や経済的損失が発生する恐れがあります。

**例**

> **Warning:** Do not install Flutter to a path that contains special characters or spaces.
> 
> （引用元：[Flutter](https://docs.flutter.dev/get-started/install/windows)、2023-02-13閲覧）

## 主要ITスタイルガイド間の相違

Googleでは、Note、Caution、Warningの他に「Success」も定義しています。インタラクティブなコンテンツで操作が成功したときの表示です。また、Red Hatでは、NoteとWarningの他に「Important」 を定義しています。重要な情報を読者が見落とさないようにする注意喚起です。

## 関連資料

- Google developer documentation style guide
    - [Notes, cautions, warnings, and other notices](https://developers.google.com/style/notices)
- Red Hat Technical Writing Style Guide
    - [3.10. Using Admonitions](https://stylepedia.net/style/#admonitions)
