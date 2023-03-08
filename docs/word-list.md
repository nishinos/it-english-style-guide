---
sidebar_position: 6
last_update:
  date: 2023-03-08
  author: 西野 竜太郎
---

# 注意する言葉

注意して使う言葉や表記で迷いがちな言葉を取り上げます。

下記の4社の英語スタイルガイドを参考にしています。また、そういったスタイルガイドとの違いがある場合、その旨も記載しています。

- [Google developer documentation style guide](https://developers.google.com/style/?hl=en)
- [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
- [Red Hat Technical Writing Style Guide](https://stylepedia.net/style/6.0/)
- [Apple Style Guide](https://support.apple.com/ja-jp/guide/applestyleguide/welcome/1.0/web)

## A

### abort

一般読者向けには使わず、代わりにcancel、close、end、exit、stopといった言葉を使います。

### above

「上記の」や「前述の」の意味では、earlier、preceding、previousを使います。また、バージョンがより高い（新しい）意味では、laterを使います。なおAppleでは「上記の」（すぐ上にある場合）の意味でaboveの使用は可としています。

below、earlier、laterの項目も参照してください。

### access

動詞の場合、できればedit、find、see、use、viewといった普段使う言葉にします。

### allow

「<製品名や機能名> allows you to <動詞>」という無生物主語の構文ではなく、できるだけ「You can <動詞>」の構文を使います。

### and/or

できるだけ避けます。内容に応じて、andやorのみ、「A or B, or both」のような表現を使います。

### appendixes（✕ appendices）

appendixの複数形はappendixesとappendicesの2つがありますが、「appendixes」とします。ただしMicrosoftはappendicesとしています。

## B

### back end、back-end

名詞の場合は「back end」と2語、形容詞の場合は「back-end」とハイフンありの1語とします。ただしGoogleはbackendと1語としています。

front endの項目も参照してください。

### back up、backup

動詞の場合は「back up」と2語、名詞または形容詞の場合は「backup」と1語とします。

### backward compatible

「backwards」ではないので注意してください。なおRed Hatでは「compatible with earlier versions」という書き方を勧めています。

### below

「下記の」や「後述の」の意味では、 laterやfollowingを使います。また、バージョンがより低い（古い）意味では、earlierを使います。ただしAppleでは「下記の」（すぐ下にある場合）の意味でbelowの使用は可としています。

above、earlier、laterの項目も参照してください。

### blacklist

人種的偏見が助長される恐れがあるとされるため、使用しません。言い換えとしては「blocklist」や「denylist」があります。なおAppleでは「block list」や「deny list」と2語としています。

graylistとwhitelistの項目も参照してください。

### Boolean

一般的には最初を大文字にしますが、プログラミング言語の型を記述する場合はその言語の表記に合わせます。

### built-in

「内蔵の」や「組み込みの」という形容詞の場合、「built-in」とハイフンありの1語とします。

## C

### canceled、canceling、cancellation

動詞cancelの過去形と過去分詞形はcanceledとcancelled、ing形はcancelingとcancellingとそれぞれ2種類あります（前者がアメリカ式、後者がイギリス式）。lが1つの「canceled」と「canceling」とします。ただし、名詞cancellationはlが2つです。

### cell phone、cellular phone

cell phoneやcellular phoneではなく「mobile phone」を使います。

### check

「チェックボックスにチェックマークを入れる」という動詞としては、checkではなくselectを使います。

checkboxの項目も参照してください。

### checkbox（✕ check box）

「checkbox」と1語で表記します。なお、checkboxの選択と選択解除に関する動詞として、GoogleとMicrosoftは「select」と「clear」、Appleは「select」と「deselect」を使うとしています。

### click

マウス操作に限って他動詞として使います。「click on <物>」という表現は使いません。マウス操作でなければ、文脈に応じてselectやtapといった動詞を使います。

また、左クリック、右クリック、ダブルクリックという動詞はleft-click、right-click、double-clickとハイフンありの1語とします。

### client/server

「client/server」とスラッシュで区切ります。間にスペースは入りません。

### combo box（✕ combo-box）

「combo box」と2語とします。なお、Red Hatはcombo-boxとハイフンありの1語としています。

### command line、command-line

名詞の場合は「command line」と2語、形容詞の場合は「command-line」とハイフンありの1語とします。

### crash

「突然停止する」という動詞です。crashの使用は避け、ハードウェアであれば「fail」、ソフトウェアであれば「stop responding」といった表現を使います。

## D

### deselect

「チェックボックスからチェックマークを外す」という動詞としては使いません。この場合、deselectではなく「clear」を使います。ただしAppleでは使用するとしています。

checkboxの項目も参照してください。

### desire

「〜したい」という動詞としては、desireではなく「want」を使います。

### DevOps

developmentとoperationsからできた言葉で、Oが大文字である点に注意してください。

### dialog（✕ dialog box）

UI要素のダイアログは「dialog box」ではなく「dialog」と呼びます。なお「dialogue」という形は「（人間同士の）対話」を指す場合に使います。

### directory

一般ユーザー向けドキュメントの場合、問題なければ「folder」とします。

### disable、disabled

UI操作が関連する場面で、動詞disableや形容詞disabledは使えます。しかし一般ユーザー向けでもっと文脈に合う表現があれば書き換えます。例えば、動詞なら「deselect」、「turn off」、形容詞なら「inactive」、「not available」、「unavailable」といった言葉です。

enableの項目も参照してください。

### display

自動詞ではなく他動詞として使います。例えば「The Login window displays.」ではなく「The Login window is displayed.」です。自動詞であればappearを使います。例えば「The Login window appears.」です。

### double-click

「double-click」とハイフンでつなぎ、他動詞として使います。

clickの項目も参照してください。

### drag and drop、drag-and-drop

動詞の場合は「drag and drop」、形容詞の場合は「drag-and-drop」とハイフンありの1語とします。

### drop-down（✕ dropdown）

「drop-down」とハイフンありの1語とします。ただしMicrosoftは「dropdown」とハイフンなしの1語としています。

## E

### e.g.

できるだけ使用は避けます。代わりに「for example」、「like」、「such as」といった表現を使います。

### earlier

まず、バージョンが低い（古い）ことを示すのにlowerやolderではなく「earlier」を使います。

また、「上記の」や「前述の」を表すのにaboveではなく「earlier」を使います。

above、below、laterの項目も参照してください。

### e-book（✕ ebook）

「e-book」とハイフンありの1語とします。「e〜」は、emailを除いてハイフンを付ける形とします。

### e-commerce（✕ ecommerce）

「e-commerce」とハイフンありの1語とします。「e〜」は、emailを除いてハイフンを付ける形とします。

### email（✕ e-mail）

「email」とハイフンありの1語とします。「e〜」は、emailを除いてハイフンを付ける形とします。

### enable、enabled

UI操作が関連する場面で、動詞enableや形容詞enabledは使えます。しかし一般ユーザー向けでもっと文脈に合う表現があれば書き換えます。例えば、動詞なら「turn on」、形容詞なら「available」、「selected」といった言葉です。

また、「<製品名や機能名> enables you to <動詞>」という無生物主語の構文ではなく、できるだけ「You can <動詞>」の構文を使います。

disableの項目も参照してください。

### etc.

できるだけ使用は避けます。代わりに「and so forth」、「and so on」、「including」、「like」、「such as」といった表現を使います。

### execute

文脈上「run」で問題なければrunを使います。

## F

### fail over、failover

動詞の場合は「fail over」と2語、名詞や形容詞の場合は「failover」と1語とします。

### filename（✕ file name）

「filename」と1語とします。ただし、MicrosoftとRed Hatは2語としています。

### following

リストや手順などの導入文で使います。followingには名詞も形容詞もありますが、具体的に何を指しているのか明確になるよう、できるだけ「the following list」や「the following steps」のように形容詞として使います。

### front end、front-end

名詞の場合は「front end」と2語、形容詞の場合は「front-end」とハイフンありの1語とします。ただしGoogleはfrontendと1語としています。

back endの項目も参照してください。

## G

### graylist、greylist

blacklistとwhitelistと同様に使いません。代わりに「provisional list」のような言葉とします。なおgrayは主にアメリカ、greyは主にイギリスで用いられるスペルです。

blacklistとwhitelistの項目も参照してください。

## H

### ⁠home page（✕ homepage）

「home page」と2語とします。ただしAppleでは1語としています。

### hostname（✕ host name）

「hostname」と1語とします。ただしMicrosoftでは2語としています。

## I

### i.e.

できるだけ使用は避けます。代わりに「that is」のような表現を使います。

### indexes（✕ indices）

indexの複数形はindexesとindicesの2つがありますが、「indexes」とします。ただし数学分野ではindicesを使うことがあります。

### inline（✕ in-line）

「inline」と1語とします。

### interface

名詞と動詞がありますが、名詞としてであれば使用は問題ありません。動詞の場合、代わりに「communicate」や「interact」のような言葉を使います。

### internet（✕ Internet）

最初の文字を小文字とします。かつては「Internet」と大文字でしたが、現在では小文字が主流です。

## K

### kill

できるだけ使用は避け、文脈に応じて「cancel」、「end」、「exit」、「terminate」といった言葉を使います。

## L

### later

バージョンが高い（新しい）ことを示すのにhigherやnewerではなく「later」を使います。また、「後述の」の意味ではbelowではなく「later」を使います。

above、below、earlierの項目も参照してください。

### leftの付く言葉

leftで位置を示す言葉がいくつかあります。左上は「upper left」（形容詞はupper-left）、左下は「lower left」（形容詞はlower-left）、左側は「left side」、最も左は「leftmost」です。

### log in、login

動詞の場合は「log in」と2語、名詞または形容詞の場合は「login」と1語とします。なお「〜にログインする」は「log in to 〜」と3語になるので注意してください。

「sign in」に言い換えても問題なければ、sign inを優先して使います。

### lower

「下記の」や「後述の」を表す場合、laterやfollowingを使います。また、バージョンが低い（古い）ことを示す場合、lowerではなくearlierを使います。

## M

### master

できるだけ使用は避けます。特に「master/slave」のように「slave」との組み合わせでは使いません。代わりに、文脈に応じてprimary/replica、primary/secondary、main/secondaryといった組み合わせの言葉を使います。

slaveの項目も参照してください。

### matrixes（✕ matrices）

matrixの複数形はmatrixesとmatricesの2つがありますが、「matrixes」とします。ただしMicrosoftではmatricesとしています。

### message

動詞としての使用は避けます。代わりに「send a message」のような表現を使います。

### metadata（✕ meta-data）

「metadata」とハイフンなしの1語とします。

## O

### offline（✕ off-line）

「offline」とハイフンなしの1語とします。

### once

「〜した後」を表現したい場合、接続詞はonceではなくafterを使います。

### online（✕ on-line）

「online」とハイフンなしの1語とします。

### ⁠open source（✕ open-source）

「open source」と2語とします。ただしMicrosoftでは名詞を修飾する形容詞の場合に「open-source」とハイフンありの1語としています。

## P

### plain text、plaintext

文字修飾のないテキストは「plain text」と2語、暗号化前のテキストは「plaintext」と1語とします。

### please

操作手順などの指示文ではpleaseを使いません。「[指示の書き方](../docs/it-specific-writing/procedures-instructions.md#指示の書き方)」の項目も参照してください。

### plug-in（✕ plugin）

「plug-in」とハイフンありの1語とします。ただしGoogleでは「plugin」とハイフンなしの1語としています。

### pop-up（✕ popup）

名詞または形容詞の場合、「pop-up」とハイフンありの1語とします。ただしGoogleではこの語は使わないとしています。

### press、press and hold

「press」は、キーボードのキーなど物理的なボタンについて使います。そういったボタンを押し続ける操作は「press and hold」で表します。

### pull-down（✕ pulldown)

形容詞の場合は「pull-down」とハイフンありの1語とします。

## R

### read-only

「read-only」とハイフンありの1語とします。

### ⁠read/write

「read/write」とスラッシュで区切ります。間にスペースは入りません。

### real time、real-time

名詞の場合は「real time」と2語、形容詞の場合は「real-time」とハイフンありの1語とします。

### rightの付く言葉

rightで位置を示す言葉がいくつかあります。右上は「upper right」（形容詞はupper-right）、右下は「lower right」（形容詞はlower-right）、右側は「right side」、最も右は「rightmost」です。

### right-click

「right-click」とハイフンでつなぎ、他動詞として使います。clickの項目も参照してください。

### runtime（✕ run-time）

実行環境の意味では「runtime」とハイフンなしの1語とします。

## S

### screenshot（✕ screen shot、screen-shot）

「screenshot」とハイフンなしの1語とします。

### ⁠scroll bar（✕ scrollbar）

「scroll bar」と2語とします。ただしRed Hatではscrollbarと1語としています。

### select

「チェックボックスにチェックマークを入れる」という動詞としては、checkではなくselectを使います。また、テキストを選択してハイライト表示にする場合もselectを使います。

### ⁠set up、setup

動詞の場合は「set up」と2語、名詞または形容詞の場合は「setup」とハイフンなしの1語とします。

### ⁠should

ニュアンスがあいまいになりがちなので使用には注意します。要件であれば命令文や「must」を使ったり、推奨であれば「We recommend 〜」を使ったりします。

### ⁠shut down、shutdown

動詞の場合は「shut down」と2語、名詞の場合は「shutdown」とハイフンなしの1語とします。

### ⁠sign in、sign-in

動詞の場合は「sign in」と2語、名詞または形容詞の場合は「sign-in」とハイフンありの1語とします。なお「〜にサインインする」は「sign in to 〜」と3語になるので注意してください。

### sign out、sign-out

動詞の場合は「sign out」と2語、名詞または形容詞の場合は「sign-out」とハイフンありの1語とします。

### ⁠since、because

理由を表す接続詞にはsinceではなくbecauseを使います。sinceは「〜以来」と時を表すのに使います。

### single sign-on

「single sign-on」とsignとonの間にハイフンを入れる形にします。

### slave

奴隷制度を連想させるため、使用は避けます。代わりに、文脈に応じてprimary/replica、primary/secondary、main/secondaryといった組み合わせの言葉を使います。

masterの項目も参照してください。

### smart card

「smart card」と2語とします。

### smartphone

「smartphone」とハイフンなしの1語とします。

### standalone

「standalone」という形容詞はハイフンなしの1語とします。ただしRed Hatはハイフンを入れるとしています。

## T

### tap

タッチ画面操作の場面で使います。しかし長押しの場合は「touch and hold」とします。ただしMicrosoftは「tap and hold」としています。

### time zone

「time zone」と2語とします。

### toolkit

「toolkit」と1語とします。

### turn on、turn off

デバイス（電源）や機能のオンとオフを表す場合に使います。power on/offやswitch on/offよりも優先して使います。 

### type

動詞の場合、キーボードを使った入力を指します。キーボード以外の入力も含まれるのであれば「enter」を使います。

## U

### uncheck

「チェックボックスからチェックマークを外す」という動詞としては、uncheckではなく「clear」を使います。ただしAppleはdeselectとしています。checkboxの項目も参照してください。

### user

ドキュメントの読者を指す場合はuserではなく「you」を使います。「[userは読者のプロダクトを使うユーザー](../docs/it-specific-writing/person.md#userは読者のプロダクトを使うユーザー)」の項目も参照してください。

### username（✕ user name）

「username」と1語とします。ただしAppleは2語としています。

## W

### web page（✕ webpage）

「web page」と2語とします。ただしAppleとMicrosoftは「webpage」とハイフンなしの1語としています。

### website（✕ web site）

「website」と1語とします。

### whether、if

「〜かどうか」を表す接続詞にはwhetherとifの2つがあります。これにはできるだけwhetherを使い、ifは「もし〜」と条件を表すのに使います。

### while

whileという接続詞には「〜している間に」という同時の意味と、「一方で」や「〜なのに」という対比の意味があります。できるだけwhileは同時の意味で使い、対比の意味では文脈に合わせて「although」、「on the other hand」、「whereas」といった表現を使います。

### whitelist

人種的偏見が助長される恐れがあるとされるため、使用しません。言い換えとしては「allowlist」があります。ただしAppleでは「allow list」と2語としています。

blacklistとgraylistの項目も参照してください。

### wish

wishは使わず、文脈に応じて「want」や「need」を使います。

## Z

### ⁠ZIP Code

「ZIP Code」はアメリカの郵便番号制度なので、アメリカ以外も含めるなら「postal code」を使います。なおAppleは「zip code」と小文字としています。
