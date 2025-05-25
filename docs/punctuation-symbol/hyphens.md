---
sidebar_position: 10
last_update:
  date: 2025-05-25
  author: 西野 竜太郎
---

# ハイフン（-）

ハイフン（-）についての説明です。

## ハイフンを使う場面

ハイフンは複合語を作ったり範囲を示したりするのに使います。

ハイフンの前後にスペースは入れません。ただし、ハイフンの後の言葉をandやorなどでつなぐ場合はスペースを入れます（例：「one- or two-character sequence」）。

### 複合語

例1にあるような「post-install」や「add-on」といった複合語を作るのに使います。

**例1**

> Your post-install tip pops up right after someone installs your add-on, and also shows up in Help.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/add-ons/guides/editor-style)、2023-02-16閲覧）

### 範囲

数や時間の範囲を示すのに使われます。例2では「2〜3週間」という時間の範囲を示しています。

**例2**

> Updated every 2-3 weeks with minor releases, and every 4 weeks with major releases.
>
> （引用元：[Android Developers](https://developer.android.com/develop/ui/views/layout/webapps/webview-testing)、2023-02-16閲覧）

#### 数の範囲を示すのにハイフンを使わないケース

数の範囲を示すのに、ハイフンを使うと読者が混乱することがあります。その場合はfrom、to、throughといった言葉を使います。

例3の場合、toではなくハイフンを使っていたら、マイナス記号との区別が難しくなります。

**例3**

> The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive.
>
> （引用元：[Google Cloud](https://cloud.google.com/java/docs/reference/proto-google-common-protos/latest/com.google.geo.type.Viewport)、2023-02-24閲覧）

## ハイフンに使う文字

ハイフンに使える文字は複数あります。まず「ハイフン・マイナス」（-）で、UnicodeではU+002Dです。ASCIIと互換性があります。次に「ハイフン」（‐）で、UnicodeではU+2010です。

ハイフンには、キーボードから直接入力できる「ハイフン・マイナス」の方を使います。

## 主要ITスタイルガイド間の相違

Googleでは、範囲を示すのにハイフンを使用するとしています。一方、Microsoftでは、範囲を示すのに[enダッシュ](../punctuation-symbol/dashes.md#enダッシュを使う場面)を使用するとしています。

前述のように、本スタイルガイドでは範囲にハイフンを使用します。

## 関連資料

- Google developer documentation style guide
    - [Hyphens](https://developers.google.com/style/hyphens)
- Microsoft Style Guide
    - [Dashes and hyphens](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/)
    - [Hyphens](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/hyphens)