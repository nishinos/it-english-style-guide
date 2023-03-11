---
sidebar_position: 9
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# ダッシュ（—、–）

ダッシュ（—、–）についての説明です。

## ダッシュの種類

ダッシュには、emダッシュ（—）とenダッシュ（–）の2種類があります。

emダッシュは「エムダッシュ」と読み、アルファベットの「m」と同じ幅になることからそう呼ばれます。UnicodeではU+2014です。一方、enダッシュは「エンダッシュ」と読み、アルファベットの「n」と同じ幅になることからそう呼ばれます。UnicodeではU+2013です。つまりemダッシュの方が長くなります。

また、ダッシュは日本語の長音記号（ー）や[ハイフン](hyphens.md)（-、‐）とは別なので注意してください。

## emダッシュを使う場面

emダッシュは文中で使い、中断や補足で用います。emダッシュの前後には半角スペースを入れません。

例1は中断、例2は補足（emダッシュの間で囲まれた部分）の例です。

**例1**

> Don’t promo your add-on here—it’s already installed.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/add-ons/guides/editor-style)、2023-02-16閲覧）

**例2**

> A widget is either stateful or stateless. If a widget can change—when a user interacts with it, for example—it’s stateful.
> 
> （引用元：[Flutter](https://docs.flutter.dev/development/ui/interactive)、2023-02-16閲覧）

日本語では馴染みのない句読点なので、使い方がはっきり分からない場合は使用を避けたほうがよいでしょう。例1の場合、ピリオドで別の文にしたり、接続詞becauseでつないだりしても意味的には同じです。例2の補足情報の場合、[丸かっこ](parentheses.md)で代用できます。また、見出しの後の区切りが必要であれば、[コロン](colons.md)を使います。

## enダッシュを使う場面

一般的には、数や時間などの「範囲」を示すのに用いられることがあります。しかし範囲を示す場合は[ハイフン](hyphens.md)を使います。つまりenダッシュは使用しません。

**例3（使わない例）**

> Copyright (c) 2017–2018 ABCD Inc.

## 主要ITスタイルガイド間の相違

enダッシュとハイフンの使い分けは、スタイルガイドで異なります。Googleではenダッシュを使わないとしていますが、Microsoftでは範囲のほか、マイナス記号にもenダッシュを使うとしています。

前述の通り、本スタイルガイドではenダッシュの使用は避ける方針にしています。

なお、Wikipediaの「[En dash](https://en.wikipedia.org/wiki/Dash#En_dash)」の項目では、上記以外のスタイルガイドによる違いがまとめられています。

## 関連資料

- Google developer documentation style guide
    - [Dashes](https://developers.google.com/style/dashes)
- Microsoft Style Guide
    - [Dashes and hyphens](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/)
    - [Em dashes](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/emes)
    - [En dashes](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/enes)