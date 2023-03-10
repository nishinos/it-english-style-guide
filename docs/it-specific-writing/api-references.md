---
sidebar_position: 4
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# APIリファレンス

APIリファレンスに記載されるメソッド説明などの書き方です。

:::info ポイントまとめ

- メソッドや関数の説明は三人称単数の動詞で書き始める
- パラメーターや戻り値の説明は文にしなくてもよい

:::

## メソッドや関数の書き方

メソッドや関数がどのような動作をするのか、最初の1文で簡潔に説明します。その後、必要に応じて詳しい情報を記載します。

最初の説明文は三人称単数の動詞で書き始めます（例：Creates、Deletes、Returns）。これは文の主語（「This method」など）が省略された形と理解できます。主語を省略して動詞から書き始めることで、動作がすぐに把握できます。

なお、現実には動詞の原形（例：Create）を使う例も多く見られます。本スタイルガイドでは三人称単数の動詞としていますが、プロジェクトや組織の方針に合わせて変えても問題ありません。

**例1**

> **deleteColumn(columnPosition)**
>
> Deletes the column at the given column position.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)、2023-02-28閲覧）

**例2**

> **getSize**
> 
> ＜中略＞
> 
> Returns the size of the auto text dictionary. The return value can be zero if there is no auto correction data available for the current locale.
>
> （引用元：[Android Developers](https://developer.android.com/reference/android/text/AutoText)、2023-02-28閲覧）

### よく使われる動詞

メソッドや関数の説明によく使われる動詞がいくつかあります。書く際の参考にしてください。

|動詞|意味|補足|
|:-|:-|:-|
|add|追加する||
|check|確認する|「checks whether (if) ...」の形。戻り値はブール値のことが多い|
|construct|生成する|コンストラクターの説明で使われる|
|create|作成する||
|delete|削除する||
|determine|判別する|「determines whether (if) ...」の形。戻り値はブール値のことが多い|
|get|取得する、獲得する||
|indicate|示す|定数などの説明で使われる|
|remove|削除する||
|retrieve|取得する||
|return|戻す|戻り値が何であるか説明するのに使われる|
|set|設定する||
|update|更新する||

## パラメーターの書き方

メソッドや関数のパラメーター（仮引数）に説明を加えることがあります。説明は文断片（主語と述語動詞が揃った文ではない）でも可で、末尾にピリオドを付けます。例3と例4にあるパラメーターの説明（Description）はどちらも文断片ですが、ピリオドで終わっています。

また、ブール値以外のケースでは、できるだけ冠詞を付けます。定冠詞（the）または不定冠詞（a）で、例3では2つもthe、例4ではaとtheが使われています。

**例3**

> **Parameters**
>
> |Name|Type|Description|
> |:-|:-|:-|
> |columnPosition|Integer|The position of the first column to delete.|
> |howMany|Integer|The number of columns to delete.|
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)、2023-02-28閲覧）

**例4**

> **Parameters**
> 
> ||||
> |-|-|-|
> |**locale**|string|A locale code for the locale format rules to use.|
> |**width**|FormatWidth|The format type.|
>
> （引用元：[Angular](https://angular.io/api/common/getLocaleDateTimeFormat)、2023-02-28閲覧）

## 戻り値の書き方

戻り値の説明もパラメーターと同様に文断片で可で、末尾にピリオドを付けます。

ブール値以外のケースで冠詞を付ける場合、定冠詞（the）とします。

**例5**

> **Return**
>
> `Sheet` — The new active sheet.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)、2023-02-28閲覧）

戻り値がブール値の場合、文脈に合えば「True if ..., false otherwise.」の構文も使えます。「もし〜ならtrue、そうでなければfalse」の意味です。

**例6**

> **Return**
>
> `Boolean` — `true` if the column is hidden, `false` otherwise.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)、2023-02-28閲覧）

## 例外の書き方

見出しが「Throws」で始まる場合、「if ...」で書き始めて問題ありません。

**例7**

> **Throws**
>
> `Error` — if the provided conference ID is too long.
>
> （引用元：[Google Developer](https://developers.google.com/apps-script/reference/conference-data/conference-data-builder)、2023-02-28閲覧）

**例8**

> **Throws**
>
> `Error` if called outside of a supported context.
>
> （引用元：[Angular](https://angular.io/api/core/inject)、2023-02-28閲覧）

文として書く場合は「Throws an exception (error) if ...」のような書き方ができます。

**例9**

> Throws an exception if the given title is `null` or empty.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/forms/form-app)、2023-02-28閲覧）

**例10**

> Throws an `AssertionError` if there is no scroll parent.
>
> （引用元：[Android Developers](https://developer.android.com/reference/kotlin/androidx/compose/ui/test/SemanticsNodeInteraction)、2023-02-28閲覧）

また、例外クラスの説明であれば「Thrown when ...」のように説明を書けます。

**例11**

> **HttpDataSource.InvalidContentTypeException**
>
> ＜中略＞
> 
> Thrown when the content type is invalid.
>
> （引用元：[Android Developers](https://developer.android.com/reference/androidx/media3/datasource/HttpDataSource.InvalidContentTypeException)、2023-02-28閲覧）

## 関連資料

- Google developer documentation style guide
    - [API reference code comments](https://developers.google.com/style/api-reference-comments)
    - [Verb forms in reference documentation](https://developers.google.com/style/reference-verbs)
- Microsoft Style Guide
    - [Reference documentation](https://learn.microsoft.com/en-us/style-guide/developer-content/reference-documentation)
    - [Formatting developer text elements](https://learn.microsoft.com/en-us/style-guide/developer-content/formatting-developer-text-elements)

