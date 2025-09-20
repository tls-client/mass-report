// Discord User Report データ
const userReportData = {
    "name": "user",
    "variant": "2",
    "version": "1.0",
    "postback_url": "/api/reporting/user",
    "root_node_id": 48,
    "success_node_id": 51,
    "fail_node_id": 55,
    "nodes": {
        "7": "GENERIC_SUBMIT",
        "8": {
            "key": "USER_PROFILE_SELECT_REPORT_TYPE",
            "subkeys": {
                "スパム": 13,
                "嫌がらせや虐待（追放理由）": 16,
                "ヘイトスピーチや暴力の賛美": 17,
                "なりすまし、詐欺、不正行為": 18,
                "その他": 19
            }
        },
        "10": "USER_PROFILE_SELECT_ELEMENTS",
        "13": "USER_SPAM",
        "16": {
            "key": "USER_ABUSE_OR_HARASSMENT",
            "subkeys": {
                "アイデンティティや脆弱性に基づく憎悪の促進": 24,
                "露骨、グラフィック、または不要な性的コンテンツ": 20,
                "暴力や現実世界での危害を脅かす": 21,
                "未成年者が関与するコンテンツ": 22
            }
        },
        "17": {
            "key": "USER_HATE_SPEECH",
            "subkeys": {
                "暴力行為を祝賛または賛美": 34,
                "アイデンティティや脆弱性に基づく憎悪の促進": 24
            }
        },
        "18": {
            "key": "USER_IMPERSONATION",
            "subkeys": {
                "従業員やサポートエージェントのなりすまし": 38,
                "私または知人のなりすまし": 35,
                "有名人や公人のなりすまし": 36,
                "企業や組織のなりすまし": 37,
                "詐欺や不正行為": 39
            }
        },
        "19": {
            "key": "USER_SOMETHING_ELSE",
            "subkeys": {
                "この人はDiscordを使うには若すぎる": 23,
                "プロフィールに自傷や自殺について記載": 135,
                "盗難アカウントやクレジットカードの配布": 40,
                "薬物やその他の違法商品の販売": 41,
                "ハック、チート、フィッシング、悪意のあるリンク": 42,
                "プロフィールが個人識別情報を公開": 46
            }
        },
        "20": {
            "key": "USER_NSFW_UNWANTED",
            "subkeys": {
                "ゴア、動物虐待、暴力的ショックコンテンツ": 25,
                "不要な成人向け性的画像": 26,
                "品位を落とす成人ポルノ": 27,
                "リベンジポルノまたはその共有の脅迫": 28,
                "未成年者が関与する性的コンテンツや行為": 22
            }
        },
        "21": {
            "key": "USER_THREAT_IRL",
            "subkeys": {
                "私または他の誰かを物理的に傷つける脅迫": 33,
                "暴力行為を祝賛または賛美": 34
            }
        },
        "22": {
            "key": "USER_CONTENT_INVOLVING_MINOR",
            "subkeys": {
                "ロリコン、ショタコン、カブなど、未成年者を性的に描いたイラスト": 29,
                "この人のプロフィールが未成年者について性的に話している": 30,
                "その人は未成年者で、プロフィールに性的コンテンツが含まれる": 31,
                "現実世界の児童性的虐待を描いた写真や動画": 32
            }
        },
        "23": {
            "key": "USER_UNDERAGE_USER",
            "subkeys": {
                "はい、プロフィールに年齢を記載している": 43,
                "いいえ、プロフィールに年齢を記載していない": 56
            }
        },
        "24": "USER_HATE_IDENTITY",
        "25": "USER_GORE",
        "26": "USER_UNSOLICITED_PORN",
        "27": "USER_NSFW_DEGRADING",
        "28": "USER_NCP",
        "29": "USER_LOLI",
        "30": "USER_SCRM",
        "31": "USER_ICAAM",
        "32": "USER_CSAM",
        "33": "USER_THREATENING_BEHAVIOR",
        "34": "USER_GLORIFYING_VIOLENCE",
        "35": "USER_IMPERSONATE_INDIVIDUAL",
        "36": "USER_IMPERSONATE_PUBLIC_FIGURE",
        "37": "USER_IMPERSONATE_BUSINESS",
        "38": "USER_IMPERSONATE_DISCORD_EMPLOYEE",
        "39": "USER_SCAM_OR_FRAUD",
        "40": "USER_DIST_ACCOUNTS",
        "41": "USER_ILLICIT_GOODS",
        "42": "USER_HACKS_CHEATS",
        "43": "USER_UNDERAGE_CONFIRM",
        "44": "USER_SELF_HARM_RISK",
        "45": "USER_SELF_HARM_ENCOURAGE",
        "46": "SHARING_PII",
        "48": "USER_WELCOME",
        "51": "SUCCESS",
        "55": "FAIL",
        "56": "UNDERAGE_NEEDS_MORE_INFO",
        "73": {
            "key": "SELF_HARM",
            "subkeys": {
                "彼らが自傷を計画していることを心配している": 44,
                "他の人に自傷を促している": 45
            }
        },
        "135": "SELF_HARM_INTERSTITIAL"
    }
};

// Discord Server Report データ
const serverReportData = {
    "name": "guild",
    "variant": "1",
    "version": "1.0",
    "postback_url": "/api/reporting/guild",
    "root_node_id": 0,
    "success_node_id": 52,
    "fail_node_id": 55,
    "nodes": {
        "0": {
            "key": "GUILD_WELCOME",
            "subkeys": {
                "スパムの促進や奨励": 79,
                "嫌がらせや虐待": 57,
                "露骨、グラフィック、または不要な性的コンテンツ": 66,
                "その他": 61
            }
        },
        "7": "GENERIC_SUBMIT",
        "52": "GUILD_SUCCESS",
        "55": "FAIL",
        "57": {
            "key": "ABUSE_OR_HARASSMENT",
            "subkeys": {
                "失礼、下品、または攻撃的な言葉の使用": 83,
                "アイデンティティや脆弱性に基づく憎悪の促進": 86,
                "レイドの組織化や奨励": 109,
                "有害な誤情報や暴力の賛美": 75
            }
        },
        "61": {
            "key": "SOMETHING_ELSE",
            "subkeys": {
                "自傷や危険な行為": 133,
                "なりすまし、詐欺、不正行為": 99,
                "盗難アカウントやクレジットカードの配布": 102,
                "薬物やその他の違法商品の販売": 103,
                "ハック、チート、フィッシング、悪意のあるリンク": 105,
                "有害な誤情報や暴力の賛美": 75
            }
        },
        "63": "SERVER_NSFW_SUBMIT",
        "64": "SERVER_NSFW_LEAKING",
        "66": {
            "key": "NSFW_UNWANTED",
            "subkeys": {
                "サーバーがNSFWチャンネル外で性的コンテンツを表示": 64,
                "サーバーがゴア、動物虐待、暴力的ショックコンテンツを許可": 87,
                "サーバーが品位を落とす成人ポルノを許可": 89,
                "サーバーがリベンジポルノを促進": 90,
                "サーバーが未成年者が関与する性的コンテンツや行為を促進": 68
            }
        },
        "68": {
            "key": "NSFW_MINOR",
            "subkeys": {
                "ロリコン、ショタコン、カブなど、未成年者を性的に描いたイラスト": 91,
                "未成年者が性的メッセージを投稿または送信": 94,
                "現実世界の児童性的虐待を描いた写真や動画": 95
            }
        },
        "75": {
            "key": "MISINFO_EXTREMISM",
            "subkeys": {
                "誤情報や陰謀論の拡散": 76,
                "暴力行為を祝賛または賛美": 97,
                "暴力的過激主義の調整": 98
            }
        },
        "76": {
            "key": "SPREADING_MISINFO",
            "subkeys": {
                "私または知人について悪いことを言っている": 82,
                "フェイクニュースや有害な陰謀論の拡散": 112
            }
        },
        "79": "SERVER_SPAM",
        "82": "SERVER_VERBAL_HARASSMENT",
        "83": "SERVER_VULGAR_LANG",
        "86": "SERVER_HATE_IDENTITY",
        "87": "SERVER_GORE",
        "89": "SERVER_NSFW_DEGRADING",
        "90": "SERVER_REVENGE_NCP",
        "91": "SERVER_LOLI",
        "94": "SERVER_ICAAM",
        "95": "SERVER_CSAM",
        "97": "SERVER_GLORIFY_VIOLENCE",
        "98": "SERVER_EXTREMISM",
        "99": "SERVER_FRAUD",
        "102": "SERVER_ATO",
        "103": "SERVER_ILLICIT_GOODS",
        "105": "SERVER_HACKS_CHEATS",
        "109": "SERVER_ACTIVE_RAID",
        "112": "SERVER_HARMFUL_MISINFO",
        "133": "STAGE_SELF_HARM_GENERAL"
    }
};

// Discord Message Report データ
const messageReportData = {
    "name": "message",
    "variant": "3",
    "version": "1.0",
    "postback_url": "/api/reporting/message",
    "root_node_id": 3,
    "success_node_id": 52,
    "fail_node_id": 55,
    "nodes": {
        "3": {
            "key": "MESSAGE_WELCOME",
            "subkeys": {
                "スパム": 79,
                "攻撃またはハラスメント": 57,
                "有害な誤情報または暴力の是認": 75,
                "個人を特定できる情報を晒している": 60,
                "その他": 61
            }
        },
        "7": "GENERIC_SUBMIT",
        "52": "MESSAGE_SUCCESS",
        "55": "FAIL",
        "57": {
            "key": "ABUSE_OR_HARASSMENT",
            "subkeys": {
                "私または他人に対する言葉での嫌がらせ": 82,
                "無礼、卑猥、または攻撃的な言葉遣い": 83,
                "アイデンティティや弱みを理由としたヘイトを助長している": 86,
                "露骨な表現、残酷なコンテンツ、望んでない性的コンテンツ": 66
            }
        },
        "60": "SHARING_PII",
        "61": {
            "key": "SOMETHING_ELSE",
            "subkeys": {
                "Discordを使える最低年齢に達していない": 71,
                "自傷行為または自殺に言及している": 73,
                "BAN回避、レイド、別アカウントの使用": 74,
                "有害な誤情報または暴力の是認": 75,
                "なりすまし、欺瞞、詐欺": 99,
                "盗まれたアカウントやクレジットカードを配っている": 102,
                "ドラックやその他の既製品を販売している": 103,
                "ハック、チート、フィッシング、またはその他の悪意のあるリンク": 105
            }
        },
        "66": {
            "key": "NSFW_UNWANTED",
            "subkeys": {
                "ゴア（流血）、動物虐待、他人にショックを与えることを意図した暴力的なコンテンツ": 87,
                "成人を描いた、望んでいない性的画像": 88,
                "成人を描いた侮辱的なポルノ": 89,
                "リベンジポルノ、またはリベンジポルノを共有するという脅し": 90,
                "未成年者の関わる性的コンテンツまたは性的行為": 68
            }
        },
        "68": {
            "key": "NSFW_MINOR",
            "subkeys": {
                "未成年者を性的に扱うイラスト（「ロリコン」、「ショタコン」、「幼獣ポルノ」など）": 91,
                "未成年者について性的な話をしている人物がいる": 92,
                "未成年者に性的な示唆を含む、または性的なメッセージを送っている人物がいる": 93,
                "未成年者が性的なメッセージを投稿または送信している": 94,
                "現実の子供に対する性的虐待の写真または動画": 95
            }
        },
        "71": {
            "key": "UNDERAGE_USER",
            "subkeys": {
                "はい、このメッセージ内で年齢を宣言しています": 106,
                "いいえ、このメッセージ内で年齢を宣言していません": 56
            }
        },
        "73": {
            "key": "SELF_HARM",
            "subkeys": {
                "自傷行為を計画しているのではないかと懸念される": 113,
                "他者に自傷行為を行うように促している": 107
            }
        },
        "74": {
            "key": "BAN_EVASION_RAID",
            "subkeys": {
                "別のDiscordサーバーを攻撃すると脅している": 108,
                "現行のレイドを宣言または奨励している": 109,
                "BANされているにも関わらず再度サーバーに参加した": 110,
                "ブロックしたにもかかわらずメッセージを送ってきている": 111
            }
        },
        "75": {
            "key": "MISINFO_EXTREMISM",
            "subkeys": {
                "誤情報または陰謀論を広めている": 76,
                "暴力行為を賛美または美化している": 97,
                "アイデンティティや弱みを理由としたヘイトを助長している": 86
            }
        },
        "76": {
            "key": "SPREADING_MISINFO",
            "subkeys": {
                "自分または知人について悪口を言っている": 82,
                "フェイクニュースや有害な陰謀論を広めている": 112
            }
        },
        "79": "MESSAGE_SPAM",
        "82": "MESSAGE_VERBAL_HARASSMENT",
        "83": "MESSAGE_VULGAR_LANG",
        "86": "MESSAGE_HATE_IDENTITY",
        "87": "MESSAGE_GORE",
        "88": "MESSAGE_UNSOLICITED_PORN",
        "89": "MESSAGE_NSFW_DEGRADING",
        "90": "MESSAGE_REVENGE_NCP",
        "91": "MESSAGE_LOLI",
        "92": "MESSAGE_TALKING_ABOUT_MINOR",
        "93": "MESSAGE_GROOMING_MINOR",
        "94": "MESSAGE_ICAAM",
        "95": "MESSAGE_CSAM",
        "97": "MESSAGE_GLORIFY_VIOLENCE",
        "99": "MESSAGE_FRAUD",
        "102": "MESSAGE_ATO",
        "103": "MESSAGE_ILLICIT_GOODS",
        "105": "MESSAGE_HACKS_CHEATS",
        "106": "MESSAGE_UNDERAGE_CONFIRM",
        "107": "MESSAGE_SELF_HARM_ENCOURAGE",
        "108": "MESSAGE_THREATEN_RAID",
        "109": "MESSAGE_ACTIVE_RAID",
        "110": "MESSAGE_BAN_EVASION",
        "111": "MESSAGE_BLOCK_EVASION",
        "112": "MESSAGE_HARMFUL_MISINFO",
        "113": "MESSAGE_SELF_HARM_RISK",
        "56": "UNDERAGE_NEEDS_MORE_INFO"
    }
};

// Discord Versions for User Agent
const discordVersions = [
    "69548", "69547", "69546", "69545"
];

const darwinVersions = [
    "24.3.0", "24.2.0", "24.1.0", "23.3.0"
];

const cfnetworkVersions = [
    "3826.400.110", "3826.400.100", "3826.300.110"
];

// ランダムなUser Agentを生成
function generateRandomUserAgent() {
    const version = discordVersions[Math.floor(Math.random() * discordVersions.length)];
    const darwin = darwinVersions[Math.floor(Math.random() * darwinVersions.length)];
    const cfnet = cfnetworkVersions[Math.floor(Math.random() * cfnetworkVersions.length)];
    
    return `Discord/${version} CFNetwork/${cfnet} Darwin/${darwin}`;
}
