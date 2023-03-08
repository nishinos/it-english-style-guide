---
sidebar_position: 2
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# UI要素

ユーザー・インターフェイス（UI）の要素の表記についての説明です。

## UI要素の書式

マニュアルなどのドキュメント内で、ソフトウェアのUI要素（例：ボタン）を記述する場合、ボールドにします。

**例1**

> Create a project from Classic Google Sites
>
> 6. Click **Apply** or **OK**.
>
> （引用元：[Android Developers](https://developer.android.com/studio/run/rundebugconfig)、2023-02-27閲覧）

日本語だとかぎかっこ（「 」）を使うケースが多いからか、そこからの連想で英語でも二重引用符（" "）や角かっこ（[ ]）で書かれることがあります。二重引用符や角かっこが使われないわけではありませんが、ボールドが一般的です。

なお、UI要素にエリプシス（...）が付いていても、エリプシスは省略します。例2の場合、実際のボタンは「Open ...」となっています。

**例2**

> Once the ZIP file is downloaded, open the project in Android Studio and then click **File > Open**. 
>
> （引用元：[Android Developers](https://developer.android.com/codelabs/build-variants#1)、2023-02-27閲覧）

### 一般名詞を付記する場合

UI要素名のみだと読者にとって分かりにくいと思われる場合、dialog、menu、tabなどの一般名詞を付記して明確にします。

**例3**

> In the **Confirm** dialog, click **Confirm** to attach the tag.
>
> （引用元：[Google Cloud](https://cloud.google.com/kms/docs/create-manage-tags)、2023-02-27閲覧）

**例4**

> On the **Phone and Tablet** tab, select **Google Maps Activity**.
>
> （引用元：[Android Developers](https://developers.google.com/codelabs/maps-platform/location-places-android#3)、2023-02-27閲覧）

一般名詞を付記した場合、「the Confirm dialog」のように定冠詞theが付く点に注意してください。

なお、例3と例4では、場所を示すのに前置詞のinとonが使われています。この使い分けについてGoogleでは次のように説明しています。

- in
    - dialog、field、list、menu、pane、window
- on
    - page、tab、toolbar

（参考：[Prepositions](https://developers.google.com/style/ui-elements#prepositions)、2023-02-27閲覧）

## 連続操作の書式

UIで何かを選択した後、すぐに別の何かを選択する連続操作を記述する際は、山かっこの「>」を使います。前後のUI要素とまとめて山かっこもボールドにします。

**例3**

> On Windows or Linux, select **File > Settings** from the menu.
>
> （引用元：[Android Developers](https://developer.android.com/studio/run)、2023-02-27閲覧）

## キー組み合わせの書式

キーボードのキーを組み合わせて押す場合、「Control+C」のようにプラス記号でつないで記述します。

**例4**

> After about 30 seconds, press Control+C to stop watching the node pools.
>
> （引用元：[Google Cloud](https://cloud.google.com/architecture/optimizing-resources-in-multi-tenant-gke-clusters-with-auto-provisioning)、2023-02-27閲覧）

**例5**

> Alt+Insert

> Control+Space

> Option+Shift+F

> （引用元：[Android Developers](https://developer.android.com/studio/intro/keyboard-shortcuts)、2023-02-27閲覧）

なお、例5の引用元ではAndroid Studioのさまざまなキー組み合わせが一覧になっており、書き方の参考になります。

## 操作を説明する動詞

UIの操作に用いられる動詞がいくつかあります。

- 押す：press
- オフにする：turn off
- オンにする：turn on
- クリックする：click
- 選択する：select
- タップする：tap
- ドラッグする：drag
- 入力する
    - enter（キーボードを含めさまざまな手段で）
    - type（キーボードで）
- 有効にする：enable

## 関連資料

- Google developer documentation style guide
    - [UI elements and interaction](https://developers.google.com/style/ui-elements)
- Red Hat Technical Writing Style Guide
    - [3.4. Documenting the User Interface](https://stylepedia.net/style/6.0/#gui-elements-punctuation)