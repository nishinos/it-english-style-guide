---
sidebar_position: 3
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 単位

単位の表記についての説明です。

## 数と単位の間のスペース

数の後に単位が付く場合、スペースを入れます。可能であれば、スペースは、改行されないノンブレーキング・スペース（UnicodeでU+00A0）を使います。

**例1**

> 8 GB RAM or more
>
> （引用元：[Android Developers](https://developer.android.com/studio)、2023-02-24閲覧）

**例2**

> Category A CBSD: 150 km
>
> （引用元：[Google Cloud](https://cloud.google.com/spectrum-access-system/docs/cbsd/overview)、2023-02-24閲覧）

ただし、次の記号の場合はスペースを入れません。

- 通貨
    - 例：$50、€35
- パーセント
    - 例：18%
- 角度
    - 例：90°

## 単位が付く数の範囲

単位が付く数の範囲の場合、それぞれの数に単位を付けます。また、ハイフンではなく「to」を使います。

**例3**

> This series offer at least from 14 GB to 28 GB memory per vCPU. 
>
> （引用元：[Google Cloud](https://cloud.google.com/compute/docs/memory-optimized-machines)、2023-02-24閲覧）

範囲については下記の項目の参照してください。

- [ハイフン](../punctuation-symbol/hyphens.md)
- [数の範囲](numbers.md#数の範囲)

## 大きな数の省略

端的に表現したい場合などに、大きな数を省略する記号が使えます。

「k」がthousand、「M」がmillion、「B」がbillionです。数と記号の間にスペースは入れません。

なお、小文字の「k」ではなく大文字の「K」が使われる事例もありますが、本スタイルガイドでは「k」とします。

**例4**

> Up to 10k reads or 5k writes (exclusive) per second per GB (items < 1KB).
>
> （引用元：[Google Cloud](https://cloud.google.com/appengine/docs/legacy/standard/python/memcache)、2023-02-27閲覧）

**例5**

> Nearly 40M registered users making 10B monthly requests
>
> （引用元：[Google Cloud](https://cloud.google.com/customers/happn)、2023-02-27閲覧）

## 主要ITスタイルガイド間の相違

GoogleやAppleではthousandに「k」を使うとしていますが、Microsoftでは「K」を使うとしています。本スタイルガイドでは「k」としています。

## 関連資料

- Google developer documentation style guide
    - [Units of measurement](https://developers.google.com/style/units-of-measure)
- Microsoft Style Guide
    - [Numbers](https://learn.microsoft.com/en-us/style-guide/numbers)
    - [Units of measure terms](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/units-of-measure-terms)
- Apple Style Guide
    - [Intro to units of measure](https://support.apple.com/ja-jp/guide/applestyleguide/apsg6ae856d6/web)
    - [Units of measure](https://support.apple.com/ja-jp/guide/applestyleguide/apsg1ff689db/web)
    - [Names and unit symbols for units of measure](https://support.apple.com/ja-jp/guide/applestyleguide/apsg1fb1fcb1/web)