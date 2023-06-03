# よくあるご質問

## 流動性マイニングの収益はどこで確認できますか？

プールに流動性を提供している場合は、「Earn」ページに移動して収益を確認することができます。

## 収益を引き出す方法はありますか？

収益はLPトークンの形式であり、基になるアセットを取り出すために流動性を削除することができます。

基になるアセットから利益を得た場合は、それらを売却してPNDを得ることができます。

## 価格はどのように決定されるのですか？

Pandoの取引機能によるすべての取引は価格に影響を与えます。

もし流動性プールの総額が大きければ、取引金額は流動性プールの深さに比べて無視できるほど小さく、この取引は非常に低い価格への影響を与えます。これはスリッページと呼びます。

影響が一定レベルに達すると、4swap上の価格が他の取引所の価格と異なるため、アービトラージの機会が生まれます。一貫した価格を確保するために、常に多くの自動アービトラージロボットが活動しています。


::: warning
流動性の総量に対する取引額の大きさに注意することが重要です。もし取引金額が流動性プールの総額に対してあまりにも大きい場合、取引価格は市場価格から大きく逸脱し、大きな損失を引き起こす可能性があります。
:::

## どのトークンがサポートされていますか？

理論上、PandoはMixin Networkでサポートされているすべての暗号通貨をサポートしていますが、異なるプロトコルにはくつかの制限があります。

1.4swapは、Mixin Networkがサポートするすべての暗号通貨をサポートします。4swapにリストされていない暗号通貨については、ご自身で新しいプールを作成しhttps://governance.pando.im 追加することができます。
2.Leafは、評価が高く流動性のある暗号通貨のみを担保資産としてサポートしています。
3.Ringsは現在、新しい通貨を受け入れていません。


## Ringsで供給したアセットが損失することはありますか？

ローンがない場合、一般的には答えはNOです。供給したアセットから利息を得ることができ、支払う必要のある手数料はありません。

ただし、非常に極端な状況では、市場で利用可能な資産はすべてユーザーの供給によるものであるため、不良債権（返済されない可能性のあるローン）が存在する場合、供給したアセットの全額を回収できない可能性があります。ただし、Pando Ringsでは流動化は、リアルタイムに流動化ボット(流動化を実行するアルゴリズム）によって監視されており、不良債権が発生するのを防いでいます。

もしローンがある場合、借りたセットの価値が借入限度額を超えると、流動化が発生し、担保(＝供託した資産）の一部またはすべてを失います。供給されたアセットのうち、担保となってたアセットは流動化の対象になりますが、供託されていないアセットはそのまま保持されます。

ローンリスクインジケーターに注意を払い、ローンリスクを監視し、担保を流動化から守ることが重要です。

##  Leafで供託したアセットが損失することはありますか？

可能性があります。もしバルトが最低限必要担保比率を下回る場合、バルトは流動化され、担保はオークションに出され、供託したアセットはローンの返済のために売却されます。

## MTGって何ですか？

MTGとは「Mixin Trusted Group」の略称で、Mixin Networkのマルチシグネチャ機能に基づいたフレームワークの一種です。基本的には、カストディアンコンセンサスソリューションです。

これは資金や資産、及びその他のリソースを管理するために使用できる分散型自律組織(DAO)の一種です。

Pandoでは、いくつかのチームが選ばれ、「Trusted Group」として選ばれ、配置され「Nodes」となります。特定の管理アクションを実行するためには、ノード間で合意がなされなければ、特定の管理アクションを実行することはできません。その結果、安定したサービス、分散化、および資産の安全性が保証されます。

 MTGについて詳しくは [こちら](https://developers.mixin.one/docs/mainnet/mtg/overview)をご覧ください。

## LTC, MOB, XIN, sETH-BTCを担保として使用してもpUSDを発行できません。何が問題ですか？

セキュリティ上の理由から、これら4つの制限された担保のpUSDの最大供給量は0にリセットされました。これらの担保を使用してpUSDを発行した場合でも、引き続きそれらを償還することができます。ただし、これらの担保を使用してさらにpUSDを発行することはできません。

## pUSDとUSDT、USDC、DAIなど他のステーブルコインとの違いは何ですか？

pUSDは、Pandoが発行するステーブルコインです。主にBTC、ETHなどを含む暗号通貨のバスケットによって担保されています（Pandoは中央集権的なアセットを担保として受け入れていません）。pUSDの担保率は常に200％以上です。他のステーブルコインよりも安定しており安全です。