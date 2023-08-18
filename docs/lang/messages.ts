export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "user_manual": "User Manual",
    "connect_wallet": "Connect Wallet" ,
    "trading": "Trading" ,
    "liquidity_mining": "Liquidity Mining" ,
    "mint": "Mint pUSD",
    "cookbook": "Cookbook",
    "references": "References",
    "essential": "Essential",
    "trade_and_swap": "Trade and swap",
    "mint_and_pusd": "Mint and pUSD",
    "earn_crypto": "Earn crypto",
    "other_topics": "Other Topics",
    "chat_mode": "Chat Mode",
    "faq": "FAQ",
    "troubleshooting": "Troubleshooting",
    "audit_report": "Audit report",
    "claim_free_coin": "Claim free coin",
    "lend_and_borrow": "Lend and borrow",
    "support": "Support",
    "community": "Community",
    "listing": "Listing",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "user_manual": "用户手册",
    "connect_wallet": "连接钱包" ,
    "trading": "交易" ,
    "liquidity_mining": "流动性挖矿" ,
    "mint": "铸造 pUSD",
    "cookbook": "Cookbook",
    "references": "参考",
    "essential": "核心概念",
    "trade_and_swap": "交易和交换",
    "mint_and_pusd": "铸造 pUSD",
    "earn_crypto": "赚取代币",
    "other_topics": "其他话题",
    "chat_mode": "聊天模式",
    "faq": "常见问题",
    "troubleshooting": "故障排除",
    "audit_report": "审计报告",
    "claim_free_coin": "领取免费代币",
    "lend_and_borrow": "借出和借入",
    "support": "支持",
    "community": "社区",
    "listing": "上币申请",
  },
  "ja": {
    "home": "ホーム",
    "tutorial": "チュートリアル",
    "user_manual": "ユーザーマニュアル",
    "connect_wallet": "ウォレットを接続する" ,
    "trading": "取引" ,
    "liquidity_mining": "流動性マイニング" ,
    "mint": "pUSDを鋳造する",
    "cookbook": "クックブック",
    "references": "リファレンス",
    "essential": "基本の概念",
    "trade_and_swap": "取引とスワップ",
    "mint_and_pusd": "pUSDを鋳造する",
    "earn_crypto": "暗号通貨を稼ぐ",
    "other_topics": "その他のトピック",
    "chat_mode": "チャットモード",
    "faq": "よくある質問",
    "troubleshooting": "トラブルシューティング",
    "audit_report": "監査報告書",
    "claim_free_coin": "無料のコインを請求する",
    "lend_and_borrow": "貸し出しと借り入れ",
    "support": "サポート",
    "community": "コミュニティ",
    "listing": "上場申請",
  }
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
