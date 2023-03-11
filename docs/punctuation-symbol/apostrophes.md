---
sidebar_position: 12
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# アポストロフィー（'）

アポストロフィー（'）についての説明です。

## アポストロフィーを使う場面

アポストロフィーは、語句の短縮や名詞の所有格の場面で使います。

### 語句の短縮

語句が短縮されていることを示します。例1の場合、「don't」（do not）と「isn't」（is not）です。

「[短縮形](../it-specific-writing/contractions.md)」のページも参照してください。

**例1**

> If you don’t reverify your app before publishing the new version, a "This app isn't verified," warning is displayed to your users.
> 
> （引用元：[Google Developers](https://developers.google.com/apps-script/add-ons/how-tos/update-published-add-on)、2023-02-17閲覧）

### 名詞の所有格

名詞が所有格であることを示します。名詞が単数形か複数形かによって作り方が少し違うので注意が必要です。

- 単数形の名詞の場合、末尾に「's」
    - 例2の1行目の「user's」
    - 例3の「address's」ように、sで終わる名詞でも「's」
- 複数形の名詞でsで終わる場合、末尾に「'」
    - 例2の2行目の「users'」
- 複数形の名詞でsで終わらない場合、末尾に「's」
    - 例4の「children's」

**例2**

> |Method|Return type|Brief description|
> |:-|:-|:-|
> |getRole(user)|Role|Retrieves a user's role in the context of the group.|
> |getRoles(users)|Role[]|Retrieves users' roles in the context of the group.|
> （引用元：[Google Developers](https://developers.google.com/apps-script/reference/groups/group)、2023-02-17閲覧）

**例3**

> If not specified, current address's name is used.
>
> （引用元：[Google Cloud](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/addresses/move)、2023-02-17閲覧）

**例4**

> All values are directly correlated with the children's _alpha_.
>
> （引用元：[Android Developers](https://developer.android.com/reference/com/google/android/material/animation/ChildrenAlphaProperty)、2023-02-17閲覧）

## 関連資料

- Google developer documentation style guide
    - [Contractions](https://developers.google.com/style/contractions)
    - [Possessives](https://developers.google.com/style/possessives)
- Microsoft Style Guide
    - [Apostrophes](https://learn.microsoft.com/en-us/style-guide/punctuation/apostrophes)
    - [Use contractions](https://learn.microsoft.com/en-us/style-guide/word-choice/use-contractions)
- Red Hat Technical Writing Style Guide
    - [⁠2.8.6. Apostrophes](https://stylepedia.net/style/6.0/#apostrophes)

