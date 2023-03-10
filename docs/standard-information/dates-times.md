---
sidebar_position: 1
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 日付と時刻

日付と時刻の表記についての説明です。

:::info ポイントまとめ

- 日付は「月日年」の順とし、数字だけなら「YYYY-MM-DD」の形式
- 時刻は12時間表記で「AM」か「PM」を末尾に付ける

:::

## 日付の書き方

日付は「月日年」順で書きます。「September 21, 2022」のように、月名は略さずに書き、日の後にカンマを置き、年は4桁とします。

**例1**

> On May 23, 2022, we released an updated version of Apigee X (1-8-0-apigee-9).
>
> （引用元：[Google Cloud](https://cloud.google.com/apigee/docs/release-notes)、2023-02-23閲覧）

なお「月日年」の順はアメリカ式で、イギリス式では「日月年」の順になります。本スタイルガイドでは全般的にアメリカ式を採用しています。

曜日も書く場合は、月の前に置いてカンマで区切ります。

**例2**

> On Tuesday, April 29, 2021, we released version 2.0.1 of Apigee Adapter for Envoy.
>
> （引用元：[Google Cloud](https://cloud.google.com/apigee/docs/release/notes/100-envoy-adapter-release-notes)、2023-02-23閲覧）

月と年だけを書く場合は、間にカンマは不要です。

**例3**

> This endpoint **does not** support any new functionality released in May 2022.
>
> （引用元：[Android Develpers](https://developer.android.com/google/play/billing/compatibility)、2023-02-23閲覧）

### 数字のみで書く場合

日付を数字のみで書く場合は、年月日の順となる「YYYY-MM-DD」（ISO 8601形式）で書きます。

**例4**

> **Last Updated**: 2022-11-16
>
> （引用元：[Firebase](https://firebase.google.com/codelabs/build-android-app-with-firebase-compose#0)、2023-02-23閲覧）

「08/09/2022」のように数字をスラッシュで区切って書く形式だと、アメリカ式とイギリス式で月と日が入れ替わってしまうため、誤解が発生する恐れがあります。

### 省略して書く場合

ユーザー・インターフェイスなどで表示スペースが限られている場合、月名や曜日名は省略して書くこともできます。もし月名も曜日名も省略して同時に使う場合は、ともに3文字の略語を使うなど、表記を揃えます。

#### 月名

月名を3文字で表す場合、次を使います。省略のピリオドは不要です。

- Jan、Feb、Mar、Apr、May、Jun、Jul、Aug、Sep、Oct、Nov、Dec

#### 曜日名

日曜日からの曜日名を1〜3文字で表す場合、次を使います。省略のピリオドは不要です。

- 3文字：Sun、Mon、Tue、Wed、Thu、Fri、Sat
- 2文字：Su、Mo、Tu、We、Th、Fr、Sa
- 1文字：S、M、T、W、T、F、S

## 時刻の書き方

基本的に、時刻は「6:15 PM」や「10 AM」のように、12時間表記でAMまたはPMを末尾に付けて書きます。

ただし、24時間表記が適切であれば（例：cronの説明）、24時間表記で問題ありません。

**例5**

> 8:00 AM

> 12:25 PM

> （引用元：[Android Developers](https://developer.android.com/events/dev-summit/schedule/agenda)、2023-02-23閲覧）

**例6**

> To create a job that runs on the hour between 9 AM and 5 PM, set hours to 9-17 and minutes to zero.
>
> （引用元：[Google Cloud](https://cloud.google.com/backup-disaster-recovery/docs/monitor-reports/real-time-report)、2023-02-23閲覧）

なお、昼の12時に「noon」、夜の12時に「midnight」も使えます。

## 日付や時刻の範囲

日付や時刻の範囲を示すには、例6のように[ハイフン](../punctuation-symbol/hyphens.md)を使ったり、例7のように言葉（from、to、through）で説明したりします。

**例7**

> If you select the segment that runs from 11:00 AM to 12:00 PM on the previous day and the currently selected metric is Traffic, the overlaid values are an average from 11:55 AM to 12:00 PM.
>
> （引用元：[Google Cloud](https://cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)、2023-02-23閲覧）

## 主要ITスタイルガイド間の相違

### 時刻

Google、Microsoft、Red Hatでは12時間表記を基本としています。一方でAppleでは国際標準（ISO 8601）である点から24時間表記としています。

前述のように、本スタイルガイドでは12時間表記を基本としています。

### 日付

GoogleやMicrosoftでは、基本的に日付は「September 8, 2022」の形式で書くとしています。一方でAppleでは国際標準（ISO 8601）である点から「2022-09-08」の形式としています。

前述のように、本スタイルガイドでは「September 8, 2022」の形式としています。

## 関連資料

- Google developer documentation style guide
    - [Dates and times](https://developers.google.com/style/dates-times)
- Microsoft Style Guide
    - [Date and time terms](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/date-time-terms)
    - [Time and place](https://learn.microsoft.com/en-us/style-guide/global-communications/time-place)
- Red Hat Technical Writing Style Guide
    - [4.9. Dates and Times](https://stylepedia.net/style/6.0/#date-time)
- Apple Style Guide
    - [Dates and times](https://support.apple.com/ja-jp/guide/applestyleguide/apsg1ff687a0/web)