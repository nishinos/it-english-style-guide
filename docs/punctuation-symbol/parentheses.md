---
sidebar_position: 13
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 丸かっこ（( )）

丸かっこ（( )）についての説明です。

## 丸かっこを使う場面

丸かっこは、情報を補足するのに使います。また頭字語の説明にも用いられます。

**例1**

> The Firebase Admin Go SDK (v4.7.0) is now available. This release comes with support for using the authorization code flow with OpenID Connect (OIDC) providers. 
> 
> （引用元：[Firebase](https://firebase.google.com/support/releases)、2023-02-21閲覧）

**例2**

> An activity can be top-resumed, but not have focus (for example, if the notification shade is expanded).
> 
（引用元：[Android Developers](https://developer.android.com/about/versions/10/behavior-changes-10)、2023-02-21閲覧）

一文全体が丸かっこ内に入る場合、例3のように丸かっこ内にピリオドを入れます。

**例3**

> The example below shows how to add a menu with one item, followed by a visual separator, then a sub-menu that contains another item. (Note that in Google Sheets, unless you're using the new version, you must use the addMenu() syntax instead, and sub-menus are not possible.) When the user selects either menu item, a corresponding function opens an alert dialog. For more information on the types of dialogs you can open, see the guide to dialogs and sidebars.
>
> （引用元：[Google Developers](https://developers.google.com/apps-script/guides/menus)、2023-02-21閲覧）

### 複数形を表すのに使わない

名詞の単数と複数の両方を表そうとして、「item(s)」のように書くことがあります。この表記は避け、複数形で問題なければ複数形（items）を使います。

なお、プログラムの変数に入る数によって表示を単数形と複数形で切り替えたい場合、インターナショナリゼーション（I18N）のライブラリーで対応できることがあります。例えば、変数に入るのが1なら「item」を使い、1以外なら「items」を使うようなライブラリーです。前者は「1 item」、後者は「5 items」のように表示されます。

## 関連資料

- Google developer documentation style guide
    - [Parentheses](https://developers.google.com/style/parentheses)
- Microsoft Style Guide
    - [(s), (es)](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/s/s-es)
- Red Hat Technical Writing Style Guide
    - [2.8.3. Parentheses](https://stylepedia.net/style/6.0/#parentheses)