---
sidebar_position: 1
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# タイトルと見出し

文書のタイトルと見出しについての説明です。

## キャピタリゼーション

キャピタリゼーションとは、単語の最初の文字を大文字にするかどうかの規則です。センテンス・スタイルとタイトル・スタイルの2種類があります。

通常、タイトルと見出しでは「センテンス・スタイル」を用います。センテンスと呼ばれますが、文ではないので末尾にピリオドは付けません。

### センテンス・スタイル

最初の単語だけ大文字を使い、残りの単語は小文字を使います。通常の文と同じ形となるので、センテンス・スタイルと呼ばれます。

**例1**

> Develop high quality solutions with ease
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script?hl=en)、2023-02-09閲覧）

ただし、固有名詞（例：製品名、社名、国名）などで、大文字が正式な表記である場合は大文字とします。例2では「Flutter」です。

**例2**

> Create and run a simple Flutter app
> 
> （引用元：[Flutter](https://docs.flutter.dev/get-started/install/macos)、2023-02-09閲覧）

### タイトル・スタイル

一部を除いてすべての単語を大文字にします。前掲の例をタイトル・スタイルで書くと次のようになります。

**例3**

> Create and Run a Simple Flutter App

次の単語は小文字にします。ただし、文の最初と最後では大文字です。

- 冠詞（a、an、the）
- 接続詞（and、or、butなど）
- 4文字以下の前置詞（on、to、in、forなど。betweenやunderなどは除く）
    - ※最後の単語となる場合は大文字である点に注意

## タスク型と概念型

マニュアルやガイドでは、ユーザーに何らかのタスクを実行してもらうことがあります。また、タスクではなく何らかの概念を説明することもあります。記述内容がタスクか概念かで、書き方を変えます。

### タスク型の書き方

タスク型のタイトルや見出しでは、動詞の原形から書き始めます。

**例4**

> Create a project from Google Drive
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script/guides/projects)、2023-02-09閲覧）

実際には動詞のing形が用いられることもありますが、混在しないよう原形に統一するようにします。上記の例をing形にすると例5のようになります。

**例5（使わない例）**

> Creating a project from Google Drive

### 概念型の書き方

概念型のタイトルや見出しでは、名詞や名詞句から書き始めます。下記の例の場合、統合するタスクというより、統合（integration）の事例を紹介しているため、名詞が用いられています。

**例6**

> Integration with third-party services and APIs
> 
> （引用元：[Google Cloud](https://cloud.google.com/functions#section-6)、2023-02-09閲覧）

なお、文法的には名詞ですが、動名詞（Integrating）は避けます。

## 主要ITスタイルガイド間の相違

GoogleとMicrosoftでは、タイトルや見出しに「センテンス・スタイル」を用いるとしています。一方、Red Hatでは「タイトル・スタイル」としています。

前述のように、本スタイルガイドでは「センテンス・スタイル」とします。

## 関連資料

- Google developer documentation style guide
    - [Headings and titles](https://developers.google.com/style/headings)
    - [Capitalization](https://developers.google.com/style/capitalization)
- Microsoft Style Guide
    - [Formatting titles](https://learn.microsoft.com/en-us/style-guide/text-formatting/formatting-titles)
    - [Capitalization](https://learn.microsoft.com/en-us/style-guide/capitalization)
- Red Hat Technical Writing Style Guide
    - [⁠3.2. Heading Styles](https://stylepedia.net/style/6.0/#heading-styles)
