---
sidebar_position: 15
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# チルダ（~）

チルダ（~）についての説明です。

:::info ポイントまとめ

- 「およそ」の意味だが、できればaboutなどを使う
- 日本語の「〜」とは意味が違うので要注意

:::

## チルダを使う場面

チルダは、数の前に付けて「およそ」や「約」を表すのに使います。例えばMerriam-Webster辞書の「tilde」の2bには次のように説明されています。

> the mark used to indicate an approximate value
>
> （引用元：[Merriam-Webster](https://www.merriam-webster.com/dictionary/tilde)、2023-02-18閲覧）

IT関連ドキュメントではたまに使用例が見られます。しかし「およそ」や「約」の意味を掲載していない辞書も実は多くあり、チルダが何を表すのか理解できない読者がいる恐れがあります。そのため、「about」や「approximately」などで明示的に記述できれば、チルダの使用を避けます。

例1では、見出しで「Approximate values」と説明した上で、スペースが限られたセル内で「~20%」などとチルダを使っています。このような形式であれば、読者はチルダの意味を理解しやすいでしょう。

**例1**

> **Approximate values for this flag:**
> 
> |Instance RAM Range|Min %|Default %|Max %|
> |:-|:-|:-|:-|
> |0 - 4.0GB of RAM||~34%||	
> |4.0GB - 7.5GB|~20%|~34%|~34%|
> |7.5GB - 12GB|~20%|~52%|~52%|
> |12GB - 24GB|~20%|~67%|~67%|
> |24GB and above|~20%|~72%|~72%|
>
> （引用元：[Google Cloud](https://cloud.google.com/sql/docs/mysql/flags?hl=en)、2023-02-18閲覧）

**例2**

> King was able to reduce the ~79MB installed version of BW3S to under ~20MB in a couple of weeks, and eventually reduced it to 15MB by stripping out all but the first five levels, removing cut scenes, eliminating unused code with better ProGuard rules, optimizing their LLVM compiler flags, and reducing the number of supported languages.
>
> （引用元：[Android Developers](https://developer.android.com/stories/instant-apps/king)、2023-02-18閲覧）

### 「〜」との混同に注意

日本語にはチルダ（~）とよく似た波ダッシュ（〜）があります。一般的に波ダッシュは数の「範囲」を示すのに用いられます。例えば「10〜20%」です[^1]。

範囲を示すことから、「〜」の前にある数を省略して「最大」の意味で使われることがあります。例えば「〜20%」は「最大20%」です。そのため、英語で「最大20%」と書こうとして、チルダを使って「~20%」とした場合、意味が違ってしまうことになります。

チルダ（~）と波ダッシュ（〜）の混同に注意してください。

[^1]: まれに英語でも範囲を示すことがあります。例えば「hour in day (0~23)」（引用元：[Android Developers](https://developer.android.com/reference/kotlin/android/icu/text/DateFormat.HourCycle)、2023-02-23閲覧）です。ただし一般的な使い方ではありません。

## 関連資料

- Microsoft Style Guide
    - [Special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters)
