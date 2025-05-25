---
sidebar_position: 13
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 引用符（"、'）

引用符（"、'）についての説明です。

:::info ポイントまとめ

- 直線型の二重引用符を優先して使う
- かぎかっこからの連想で「強調」には使わない
- カンマとピリオドは引用符の内側に置く

:::

## 引用符の種類

引用符には、二重引用符と一重引用符があります。さらに、それぞれに直線型と曲線型があり、曲線型には左（開き）で使うものと右（閉じ）で使うものがあります。次の表にまとめます。

### 二重引用符

|型|記号|Unicode|
|:-|:-|:-|
|直線型|"|U+0022|
|曲線型（左）|“|U+201C|
|曲線型（右）|”|U+201D|

### 一重引用符

|型|記号|Unicode|
|:-|:-|:-|
|直線型|'|U+0027（アポストロフィーと同じ）|
|曲線型（左）|‘|U+2018|
|曲線型（右）|’|U+2019|

## 使う引用符

いくつかの種類がありますが、どれを使えばよいのでしょうか。

### 二重引用符を優先

二重引用符を優先して使います。二重引用符の中でさらに引用符を使う必要があれば、一重引用符を使います。

なお、二重引用符を優先するのはアメリカ式で、イギリス式では逆に一重引用符が優先されることがあります。

### 基本的に直線型

基本的には「直線型」の引用符を使います。

ただし印刷物などで見た目に配慮する場合、「曲線型」を使っても問題ありません。その場合、左右の組み合わせに注意してください。

例1では、二重引用符の中で一重引用符を使っています。いずれも直線型です。

**例1**

> It says "Parameter 'border' is never used."
>
> （引用元：[Android Developers](https://developer.android.com/codelabs/basic-android-kotlin-training-kotlin-birthday-message#3)、2023-02-20閲覧）

## 引用符を使う場面

引用符を使う主な場面を挙げます。

### 引用

誰かが話した内容を直接引用する際に使います。

**例2**

> "We used Firebase Remote Config to test both our user onboarding and the poll-creation flow," Thiele says. "In the end, one flow created over 42% more polls, a major increase in our most important user engagement metric."
>
> （引用元：[Firebase](https://firebase.google.com/case-studies/doodle)、2023-02-21閲覧）

### タイトル

章や作品のタイトルであることを示すのに使います。

**例3**

> Otherwise, the class is linked as described in the "Execution" chapter of _The Java™ Language Specification_.
>
> （引用元：[Android Developers](https://developer.android.com/reference/java/lang/ClassLoader)、2023-02-21閲覧）

なお、例3では「The Java™ Language Specification」がイタリックになっています。書名を表す際はイタリックが一般的です。

### その他

引用符は、皮肉、非標準的な言葉遣い、ニックネームなどを示すのに用いられることもあります。

### 強調には使わない

日本語では言葉を「強調」する際に、かぎかっこを用いることがあります（この文にあるように）。このかぎかっこからの連想で、英文の強調でも引用符を使う日本語ネイティブがいます。しかし、一般的に英語では強調に引用符を使いません。皮肉など別の意味に捉えられる恐れもあるので注意が必要です。

強調する場合は、ボールド、イタリック、または下線を使うようにします。

## 引用符と句読点

カンマとピリオドは、引用符の「内側」に置きます。

例1の文末では、ピリオドは「... is never used."」と引用符の内側にあります。例2でも「... the poll-creation flow,"」とカンマは内側にあります。なお、カンマとピリオドを内側に置くのはアメリカ式で、イギリス式では外側に置きます。

ただし、誤解が発生しそうな場合は外側に置きます。下記例4の場合、カンマが引用符の外側に置かれているので、入力するのは「flutter,」ではなく「flutter」であると明確になります。

**例4**

> Type “flutter”, and select the **Flutter: New Project**.
> 
> （引用元：[Flutter](https://docs.flutter.dev/get-started/test-drive?tab=vscode)、2023-02-21閲覧。例文では二重引用符が曲線型）

また、カンマとピリオド以外の句読点（疑問符や感嘆符）は、引用符の「外側」に置きます。ただし、疑問文それ自体を引用するような場合は、内側に置きます。

## 関連資料

- Google developer documentation style guide
    - [Quotation marks](https://developers.google.com/style/quotation-marks)
- Microsoft Style Guide
    - [Quotation marks](https://learn.microsoft.com/en-us/style-guide/punctuation/quotation-marks)
- Red Hat Technical Writing Style Guide
    - [2.8.5. Quotation Marks](https://stylepedia.net/style/#quotation-marks)