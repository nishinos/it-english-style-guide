---
sidebar_position: 3
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 手順と指示

マニュアルなどに頻出する手順や指示の書き方です。

## 複数手順の書き方

ステップが複数ある手順は、番号リストを使って書きます。番号リストについては「[番号リスト](../document-components/lists.md#番号リスト)」のセクションも参照してください。

**例1**

> To embed a web app into a new Sites page, follow these steps:
>
> 1. Open the Sites page where you'd like to add the web app.
> 2. Select **Insert > Embed URL**.
> 3. Paste in the web app URL and then click **ADD**.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/guides/web)、2023-02-28閲覧）

例1の手順2と3にあるように、メニューやボタンなどのユーザー・インターフェイス（UI）要素はボールドにします。また、連続操作は手順2のように「>」を使って書きます。詳しくは「[UI要素の書式](ui-elements.md#ui要素の書式)」と「[連続操作の書式](ui-elements.md#連続操作の書式)」をご覧ください。


### 下位手順がある場合

手順の中にさらに手順がある場合、下位手順には小文字アルファベット（a、b、c …）を使います。その中にさらに下位手順がある場合は小文字のローマ数字（ⅰ、ⅱ、ⅲ ...）を使います。

**例2**

> ＜前略＞
>
> 5. If you selected **External** for user type, add test users:  
>    a. Under **Test users**, click **Add users**.  
>    b. Enter your email address and any other authorized test users, then click **Save and Continue**.
>
> ＜後略＞
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/add-ons/translate-addon-sample)、2023-02-28閲覧）

### オプション（任意）の場合

手順の中のステップがオプション（任意）である場合、ステップの番号の直後に「Optional: 」と付けます。

**例3**

> ＜前略＞
>
> 8. Optional: If you're using TalkBack 5.1 or later, you can select **Spoken feedback** to turn on spoken feedback.
>
> ＜後略＞
>
> （引用元：[Android Developers](https://developer.android.com/guide/topics/ui/accessibility/testing)、2023-02-28閲覧）


## 単一手順の書き方

中黒リストを1つだけ使って書きます。

**例4**

> Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
>
> - In your Cloud project, turn on the Google Chat API.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/samples/chat-apps/schedule-meetings)、2023-02-28閲覧）

## 導入文の書き方

手順が何であるのか読者が把握しやすくなるように、手順リストの前に導入文を記述します。例1にある「To embed a web app into a new Sites page, follow these steps:」のような文です。

ただし、例5のように見出しで手順の内容が分かるようであれば導入文は不要です。

**例5**

> Create a test deployment
> 
> 1. In your copied Apps Script project, click **Deploy > Test deployments**.
> 2. Copy the **Head deployment ID** for use in a later step and click **Done**.
>
> （引用元：[Google Develpers](https://developers.google.com/apps-script/samples/chat-apps/schedule-meetings)、2023-02-28閲覧）

## 指示の書き方

ステップ内などの指示は、命令文を使って書きます。

日本語だと「〜してください」という丁寧な表現になりますが、英語で「please」を付ける必要はありません。

### 場所、目的、条件を先に

指示文を書く場合、場所、目的、条件を表す部分（副詞句や副詞節）を前に出します。上に挙げたサンプルで該当する部分を再掲します。

- 場所
    - 例4：In your Cloud project, turn on the Google Chat API.
    - 「In」の副詞句。どこで操作をすればよいのかが明確になる
- 目的
    - 例1：To embed a web app into a new Sites page, follow these steps:
    - 「To」の副詞句。何のための手順なのかがはっきりする
- 条件
    - 例5：If you selected **External** for user type, add test users:
    - 「If」の副詞節。条件に合致しなければ操作をしなくてよい

## 関連資料

- Google developer documentation style guide
    - [Procedures](https://developers.google.com/style/procedures)
- Microsoft Style Guide
    - [Procedures and instructions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/)
    - [Writing step-by-step instructions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)