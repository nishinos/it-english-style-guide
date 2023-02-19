---
sidebar_position: 2
---

# 表

表（テーブル）についての説明です。

## 表を使う場面

表は、列が2つ以上になる場合に使います。1つのみの列で項目を列挙する場合は[リスト](list.md)を使います。

**例1**

> |Method|Return type|Brief description|
> |:-|:-|:-|
> |asRgbColor()|RgbColor|Converts this color to an RgbColor.|
> |asThemeColor()|ThemeColor|Converts this color to a ThemeColor.|
> |getColorType()|ColorType|Get the type of this color.|
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/color)、2023-02-10閲覧）

## 見出し内の書き方

見出しの行や列の中では、[センテンス・スタイル](title-heading.md)で書きます。上記例の「Return type」や「Brief description」はセンテンス・スタイルです。

冠詞（a、an、the）は省略して簡潔に書きます。末尾にピリオドやコロンなどの句読点は入れません。

## セル内の書き方

セル内で文を書く場合はピリオドなどの句読点を使います。上記例の右端の列では、ピリオドが使われています。

## 導入文の書き方

表の前に導入文を書く場合、ピリオドで終わる文にすることも、コロンで終わる文にすることもできます。通常、コロンは直後に表が置かれる場合に使います。

コロンの使い方については[こちら](../punctuation-symbol/colon.md)をご覧ください。

## キャプションの書き方

キャプションは、表の短い説明です。形式は「Table <番号>. <説明>」です。説明は[センテンス・スタイル](title-heading.md)とし、末尾にピリオドは付けません[^1]。

**例2**

> **Table 1**. Keyboard shortcuts for tool windows 
> 
> （引用元：[Android Developers](https://developer.android.com/studio/intro)、2023-02-10閲覧）

本文中から表について言及する際は、文頭でない限り「... as described in table 1.」のようにtableは小文字とします。

[^1]: Google developer documentation style guideでは、キャプションが表の場合にピリオドを付けないとしているが、図では（完全な文にすることを推奨した上で）ピリオドを付けるとしている。本スタイルガイドもそれを踏襲している。

## 関連資料

- Google developer documentation style guide
    - [Tables](https://developers.google.com/style/tables)
- Microsoft Style Guide
    - [Tables](https://learn.microsoft.com/en-us/style-guide/scannable-content/tables)
