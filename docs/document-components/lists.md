---
sidebar_position: 3
last_update:
  date: 2023-08-21
  author: 西野 竜太郎
---

# リスト

リスト（箇条書き）についての説明です。

:::info ポイントまとめ

- 順番がなければ中黒リスト、順番があれば番号リストを使う
- 各項目は表現形式を統一する

:::

## リストを使う場面

リストは、項目を2つ以上列挙する場合に使います。ある項目にさまざまな属性や情報が含まれるときは[表](tables.md)の使用を検討します。

## リストの種類

リストには大きく分けて2つの種類があります。中黒リストと番号リストです。

### 中黒リスト

中黒リストは、順番が関係ない項目を挙げるのに使います。

**例1**

> Use Flutter DevTools for the following tasks:
> 
> * Debugging
> * Logging
> * Running Flutter inspector
> 
> （引用元：[Flutter](https://docs.flutter.dev/development/platform-integration/web/faq)、2023-02-10閲覧）

### 番号リスト

番号リストは、手順など順番がある項目を挙げるのに使います。

**例2**

> Create a project from Google Docs, Sheets, or Slides
> 
> 1. Open a Docs document, a Sheets spreadsheet, or Slides presentation.
> 2. Click **Extensions** > **Apps Script**.
> 3. In the script editor, click **Untitled project**.
> 4. Give your project a name and click **Rename**.
> 
> （引用元：[Goodle Developers](https://developers.google.com/apps-script/guides/projects)、2023-02-10閲覧）

## 項目の書き方

リスト内の各項目は、表現の形式が類似するようにします。例1のように動名詞で統一したり、例2のように完全な文で統一したりします。

例1、例2にあるように、項目の最初の単語は大文字で書きます。また、項目の末尾にピリオドなどの句読点は付けません（例1）が、完全な文である場合は付けます（例2）。

### 項目内の見出し

中黒リストでは、項目内に見出し（追い込み見出し）を置けます。例3の「Range selection:」のような見出しです。見出しと内容は、「コロン」または「ピリオド」で区切ります。

#### コロンで区切る場合

見出しが動詞を含まない（語や句など）場合、コロンで区切ります。

**例3**

> There are two types of text selection:
> 
> * **Range selection**: If a shape contains the text "Hello", and "He" is selected, the returned range has startIndex=0, and endIndex=2.
> * **Cursor selection**: If a shape contains the text "Hello", and cursor is after "H" ("H|ello"), the returned range is empty range with startIndex=1 and endIndex=1.
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script/guides/slides/selecting)、2023-02-13閲覧）

#### ピリオドで区切る場合

見出しが動詞を含む（文など）場合、ピリオドで区切ります。

**例4**

> The following documentation can help you learn more:
> 
> - **Build a Google Workspace Add-on with conference solutions.** Build conference add-ons provides an overview of the steps required to build a Google Workspace Add-on that implements third-party conference solutions.
> - **Get a closer look.** View the source code of a conferencing Google Workspace Add-on example.
> - **Learn more about what Apps Script can do.** Review the Google Apps Script documentation.
> - **Wondering what other developers have built?** Visit the Google Workspace Marketplace for Google Calendar.
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script/add-ons/calendar/conferencing/overview)、2023-08-21閲覧）

## 導入文の書き方

リストの前に導入文を書く場合、ピリオドで終わる文にすることも、コロンで終わる文（例1）にすることもできます。通常、コロンは直後にリストが置かれる場合に使います。

コロンは例1のように「following」や「as follows」といった言葉と一緒に用いられることがよくあります。コロンの使い方については[こちら](../punctuation-symbol/colons.md)をご覧ください。

### 避ける書き方

導入部分と項目が合わさって完全な文になるような書き方は避けます。例5では「You can」と「Change settings.」が合わさって「You can change settings.」という完全な文になっています。これを避けるのは、他の言語への翻訳が難しくなるケースがあるためです。

**例5**

> You can:
> * Change settings.
> * Create an account.
> * Download usage reports.

## 主要ITスタイルガイド間の相違

GoogleとRed Hatでは、例5のように導入部分と項目が合わさって完全な文になるような書き方は避けるとしています。一方でMicrosoftではそのような書き方を例示しています。

本スタイルガイドでは、そのような書き方は避ける方針としています。

## 関連資料

- Google developer documentation style guide
    - [Lists](https://developers.google.com/style/lists)
- Microsoft Style Guide
    - [Lists](https://learn.microsoft.com/en-us/style-guide/scannable-content/lists)
- Red Hat Technical Writing Style Guide
    - [5.1.1. Using and Formatting Lists](https://stylepedia.net/style/#Sentence_Structure-Using_Lists_Correctly)