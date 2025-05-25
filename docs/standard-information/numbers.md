---
sidebar_position: 2
last_update:
  date: 2023-03-24
  author: 西野 竜太郎
---

# 数

数の表記についての説明です。

:::info ポイントまとめ

- 基本的に0〜9はスペルアウトし、10以上は算用数字で書く
- 10以上でも文頭ではスペルアウトする

:::

## スペルアウトする数

0〜9までの数はスペルアウト（単語として書く）します。例えば「three days」や「nine items」です。ただし後にサイズなどの単位が置かれるケースは数字で書きます。詳しくは次の「[算用数字で書く数](numbers.md#算用数字で書く数)」を参照してください。

10以上であっても、文の先頭（例1）ではスペルアウトします。また、数字が並ぶ場合（例2）も一方をスペルアウトします。

**例1**

> Twenty-four hours later, the second run copies 1,000 tables.
>
> （引用元：[Google Cloud](https://cloud.google.com/bigquery/quotas)、2023-02-24閲覧）

**例2**

> (for example, a set of ten 2 GB files)
>
> （引用元：[Oracle](https://docs.oracle.com/en/database/other-databases/essbase/19.3/essdm/using-parallel-data-load.html)、2023-02-24閲覧）

## 算用数字で書く数

10以上の数は算用数字で書きます。例えば「10 days」や「1,500 items」です。

9以下であっても、後にサイズなどの単位（例：GB、pixel）が来る場合は算用数字で書きます。

**例3**

> Up to 2 GB for assets through Play Asset Delivery. 
>
> （引用元：[Android Developer](https://developer.android.com/games/playgames/publish-deploy)、2023-02-24閲覧）

**例4**

> Bound box minium size: 8 pixels by 8 pixels.
>
> （引用元：[Google Cloud](https://cloud.google.com/vertex-ai/docs/image-data/object-detection/prepare-data)、2023-02-24閲覧）

さらに、下記の場合は10未満でも算用数字で書きます。

- ページ番号、章番号、巻数
- バージョン番号
- 手順の番号
- 数式内の数字
- 負数、小数

## 序数

順序を表す序数は、次のようにスペルアウトして書きます。

- first（1stとしない）
- third（3rdとしない）
- twenty-fifth（25thとしない）

## 桁区切りと小数点

基本的に、4桁以上の数では3桁ごとにカンマ（,）で区切ります。例えば「8,500」や「1,500,000」です。

ただし、年、ピクセル、ページ番号では不要です。

- in 2023
- 1920 pixels
- page 1125

小数点にはピリオド（.）を使います。例えば「0.018」です。

日本では上記の形式が一般的ですが、地域によっては桁区切りと小数点に使う記号が異なります。例えば、ドイツでは桁区切りにピリオド、小数点にカンマ（例：12.345,67）、フランスでは桁区切りにスペース、小数点にカンマ（例：12 345,67）が用いられます。

## 分数

可能であれば、分数は小数を使って書きます。分数として書く場合はスラッシュは使わず、ハイフンを使ってスペルアウトします。

- one-third（1/3としない）
- three-fifths（3/5としない）

## パーセンテージ

基本的に、算用数字とパーセント記号（%）を使って書きます。間にスペースは入れません。例えば「23%」です。

ただし文頭に来る場合、例5のようにスペルアウトします。

**例5**

> Seventy-four percent agree that if a company won’t invest in improving its website, then they don’t want to give them their money.
>
> （引用元：[Google Cloud](https://cloud.google.com/blog/topics/retail/search-abandonment-impacts-retail-sales-brand-loyalty?hl=en)、2023-02-24閲覧。下線は執筆者）

## 数の範囲

数の範囲を示すには、算用数字とハイフンを使います。数字とハイフンの間にスペースは入れません。

**例6**

> For Beidou CNAV1 this refers to the page type number in the range of 1-63. 
>
> （引用元：[Android Developers](https://developer.android.com/reference/android/location/GnssNavigationMessage)、2023-02-24閲覧）

範囲については下記の項目の参照してください。

- [ハイフン](../punctuation-symbol/hyphens.md)
- [単位が付く数の範囲](units-of-measure.md#単位が付く数の範囲)

## 主要ITスタイルガイド間の相違

### 桁区切り

Google、Microsoft、Red Hatでは3桁ごとの桁区切りにカンマ（,）を使うとしていますが、Appleでは国際標準に合わせてスペースを使うとしています。

また、GoogleとMicrosoftでは4桁以上で区切るとしているのに対し、Red Hatでは5桁以上としています。

前述のように、本スタイルガイドでは4桁以上をカンマで区切ります。

### パーセンテージ

通常、Googleでは算用数字とパーセント記号を使う（例：40%）としています。他方、Microsoftでは表示スペースが限られている場合などを除き、算用数字と「percent」を使う（例：40 percent）としています。

前述のように、本スタイルガイドでは基本的に「40%」の形式です。

### 数の範囲

Googleでは数の範囲にハイフン（-）を使うとしている一方、Microsoftではenダッシュ（–）を使うとしています。

また、Microsoftでは表示スペースが限られている場合などを除き、ほとんどのケースで「from」と「through」を使うとしています。例えば「from 30 through 59」です。なお時間では「to」を使うとしています（例：「9:30 AM to 5:30 PM」）。

前述のように、本スタイルガイドではハイフンを使います。

## 関連資料

- Google developer documentation style guide
    - [Numbers](https://developers.google.com/style/numbers)
- Microsoft Style Guide
    - [Numbers](https://learn.microsoft.com/en-us/style-guide/numbers)
    - [percent, percentage](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/p/percent-percentage)
- Red Hat Technical Writing Style Guide
    - [4.10. Numbers](https://stylepedia.net/style/#numbers)
- Apple Style Guide
    - [Decimals](https://support.apple.com/ja-jp/guide/applestyleguide/apsg1ff68b7e/web)