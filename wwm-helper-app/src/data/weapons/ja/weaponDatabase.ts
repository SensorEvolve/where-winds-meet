import { Weapon } from "../../../types/weapons";

export const weaponDatabase: Weapon[] = [
  {
    id: "heavenquaker-spear",
    name: "ヘブンクエーカー・スピア",
    type: "Spear", // Must remain English
    path: "Bellstrike - Umbra", // Must remain English
    image: require("../../../../assets/martial_art_weapons/heavenquaker_spear.png"),
    description:
      "出血ダメージを与えて敵のHPを削ることに特化した武学武器です。ヘブンクエーカー・スピアは素早く出血を付与することができ、敵の群れに対して強力な範囲（AoE）ダメージを与えます。",
    playstyle: "持続的なダメージと範囲攻撃能力を持つ、出血重視のDPS",

    howToGet: {
      method: "Skill Theft",
      location: "清河エリア（Qinghe Region）のヘブンクエーカー・スピアの聖域",
      level: 8,
      details:
        "平和の鐘楼にいるQiu Yuehaiからクエスト「Skill Theft: Unearned Lesson」を完了する。聖域へのアクセスには龍の鍵（Dragon Key）が必要です。",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"], // Kept English for type safety
      weaknesses: ["Support", "Survivability", "Control"], // Kept English for type safety
    },

    skills: [
      {
        name: "Sober Sorrow（醒めた悲哀）",
        type: "Martial Art", // Must remain English
        description:
          "長槍を全力で回転させ、近くの敵に対して6回連続のなぎ払い攻撃を行い、大ダメージを与えます。スキル終了後、コンボヒット数に基づいて12秒間バフを獲得します：雫（5ヒット未満）、春の奔流（5ヒット以上）、または大河の流れ（10ヒット以上）。",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Sweep All（一掃）",
        type: "Special", // Must remain English
        description:
          "槍を振り回し、近くの敵にダメージを与えます。現在のバフに基づいて強化されます：雫（中ダメージ）、春の奔流（ダメージ/範囲増加、防御力低下）、大河の流れ（ダメージ/範囲さらに増加、防御力低下、出血付与）。",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "槍 - 軽攻撃",
        type: "Light Attack", // Must remain English
        description: "長槍を振るい、最大4回の軽攻撃を行います。",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Drifting Thrust（漂流突き）",
        type: "Charged", // Must remain English
        description:
          "スタミナ（Endurance）を消費してチャージし、長槍による突きの連打を放ち、前方の敵に多段ヒットを与えます。スキル中は「不屈（Fortitude）」（CC以外の攻撃に対して無敵）を獲得します。",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "槍 - 重攻撃",
        type: "Heavy Attack", // Must remain English
        description: "長槍を振るい、最大3回の重攻撃を行います。",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "槍 - 切り替え",
        type: "Dual-Weapon", // Must remain English
        description: "槍に切り替えてなぎ払い攻撃を行います。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Horizon（剣の地平）",
        type: "Attack/Martial Arts/Pursuit",
        description:
          "ストラテジック・ソードの武学スキル、特殊スキル、またはチャージスキルを発動した後、完璧なタイミングで入力すると「交差する剣（Crisscrossing Sword）」を発動し、追撃を行います。ターゲットが出血スタックを5つ持っている場合、すべての出血スタックを取り除き、一度に高い出血ダメージを与えます。",
      },
      {
        name: "Wolfchaser's Art（狼追いの術）",
        type: "Martial Arts/Buff",
        description:
          "「Sober Sorrow」のバフを得るために必要なコンボ数を5/10から4/8に減少させます。「Sober Sorrow」が出血状態のボスにヒットするたびに、出血スタック数に基づいて20-100%の確率でコンボカウントが1増加します。",
      },
      {
        name: "Adaptive Steel（適応する鋼）",
        type: "Attack/Support/Buff",
        description: "槍：攻撃はターゲットの物理防御の12.5%を無視します。",
      },
      {
        name: "Insightful Strike（洞察の一撃）",
        type: "Attack/Damage Boost/DMG Reduction",
        description:
          "親和性（Affinity）ダメージを与えるとフォーカス（Focus）が生成されます。フォーカスが満タンになると、10秒間「集中（Concentration）」状態になります（親和性ダメージが10%増加し、被弾時に5%の確率で受けるダメージを40%軽減します）。",
      },
    ],

    gearSets: [
      {
        name: "ホークウィング・セット",
        pieces: 4,
        bonuses: {
          twoSet: "親和性率 +0.1%",
          fourSet:
            "いずれかのダメージで親和性が発動した際、「ホークウィング」を獲得：物理攻撃力が5秒間2%増加し、最大5回までスタックします。",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "イーグルライズ・セット",
        pieces: 4,
        bonuses: {
          twoSet: "物理防御 +1",
          fourSet:
            "継続ダメージ（DoT）を与えるか回復を行うと、「イーグルライズ」を獲得：受けるダメージを10秒間1.2%軽減し、最大5回までスタックします。最大スタック時、「イーグルガード」により次の被ダメージを90%軽減します（ボスからのダメージの場合は半減）。クールダウン30秒。",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Campaign - Halo Peak",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "継続ダメージ強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "ターゲットにチャージスキルを当てると、そのターゲットが受ける継続ダメージが増加します。",
      },
      {
        name: "物理攻撃力増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "力（Power）によって最大物理攻撃力を増加させることができます。",
      },
      {
        name: "継続ダメージ強化 II",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "カテゴリスダメージ計算時、親和性ダメージをさらに増加させます。",
      },
      {
        name: "ベルストライク増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "ベルストライク（属性）攻撃力を増加させます。また、最大ベルストライク攻撃力に基づいてベルストライク貫通も増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、ベルストライクダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "出血（Bleed）",
        description:
          "時間の経過とともに継続的なHPダメージを与え、最大5層までスタックします。",
      },
      {
        name: "雫（Droplet）",
        description: "与えるHPダメージが10%増加します。",
      },
      {
        name: "春の奔流（Spring Surge）",
        description: "与えるHPダメージが15%増加します。",
      },
      {
        name: "大河の流れ（River Flow）",
        description: "与えるHPダメージが20%増加します。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > 親和性率",
      "出血シナジーのため、ストラテジック・ソードとの相性が抜群です",
      "聖域へのアクセスには龍の鍵が必要です",
    ],
  },

  {
    id: "strategic-sword",
    name: "ストラテジック・ソード",
    type: "Sword", // Must remain English
    path: "Bellstrike - Umbra", // Must remain English
    image: require("../../../../assets/martial_art_weapons/strategic_sword.png"),
    description:
      "剣と槍を使用する際に選択できる2つ目の武学タイプです。純粋なダメージを与えるだけでなく、この武学は出血ダメージを与えて敵のHPを削ることに重点を置いています。同時に、シンプルな攻撃でダメージを与え続けることもできます。非常に柔軟な武学であり、大型の敵を受動的に攻撃しながら残りの敵に対処したり、個々のターゲットを各個撃破することに集中したりできます。また、高い機動力を誇りますが、ペースを維持するには大量のスタミナ（Endurance）が必要です。",
    playstyle:
      "持続ダメージ、高機動力、柔軟なターゲット管理を持つ出血重視のDPS - 高度なスタミナ管理が必要",

    howToGet: {
      method: "Skill Theft",
      location: "清河エリア（Qinghe Region）南部のストラテジック・ソードの聖域",
      details:
        "龍の鍵が必要です。裏山のテレポーターへファストトラベルします。Loong Herm Dragon Pillarを経由して聖域に入ります。民兵の警備を抜け、2つの宝箱を略奪し、東側へ向かい、スロープを上がって2階へ行き、青い円を使って技の奪取を行います。",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Survivability", "Control"],
    },

    skills: [
      {
        name: "Inner Track Slash（内なる斬撃）",
        type: "Martial Art",
        description:
          "敵にダッシュして素早い斬撃を行い、軽ダメージを与えて出血を付与します。フォロースルー中に再度押すと、前方の敵に4回連続の斬撃を放ち、出血を付与します。",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Inner Balance Strike III（内なる均衡の一撃 III）",
        type: "Special",
        description:
          "スタミナを消費して後方に回避して距離を取り、元の位置にいる敵を複数回攻撃します。ターゲットが出血スタックを5つ持っている場合、即座に大ダメージを与え、出血スタックを取り除きます。この効果は同じターゲットに対して1回の使用につき一度だけ発動します。各ヒットで出血を付与します。",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "剣 - 軽攻撃",
        type: "Light Attack",
        description: "長剣で最大4回の軽攻撃を行います。",
        recovery: "0.6s",
        key: "Left Click",
      },
      {
        name: "Second Track Slash（二の太刀）",
        type: "Charged",
        description:
          "スタミナを消費してチャージし、前方に急速ダッシュして、経路上の敵に大ダメージを与えます。ダッシュ中は不可視状態となりダメージを受けず、ヒットごとに出血を付与します。",
        recovery: "1.0s",
        key: "Hold R",
      },
      {
        name: "剣 - 重攻撃",
        type: "Heavy Attack",
        description: "長剣で最大3回の重攻撃を行います。",
        recovery: "0.9s",
        key: "R",
      },
      {
        name: "剣 - 切り替え",
        type: "Dual-Weapon",
        description: "剣に切り替えて斬りつけます。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Horizon（剣の地平）",
        type: "Attack/Martial Arts/Pursuit",
        description:
          "ストラテジック・ソードの武学スキル、特殊スキル、またはチャージスキルを発動した後、終了フェーズ中の完璧なタイミングでスキルボタンを押すと「交差する剣（Crisscrossing Sword）」を発動し、追撃を行います。ターゲットが出血スタックを5つ持っている場合、すべての出血スタックを取り除き、一度に高い出血ダメージを与えます。",
      },
      {
        name: "Wolfchaser's Art（狼追いの術）",
        type: "Martial Arts/Buff",
        description:
          "ヘブンクエーカー・スピアの武学スキル「Sober Sorrow」のバフを得るために必要なコンボ数を5/10から4/8に減少させます。自身の出血効果を受けたボスに「Sober Sorrow」がヒットするたびに、出血スタック数に基づいて20%/40%/60%/80%/100%の確率でコンボカウントが1増加します。",
      },
      {
        name: "Adaptive Steel（適応する鋼）",
        type: "Attack/Support/Buff",
        description:
          "使用している刃の武器に基づいて武学スキルを獲得します。剣：親和性ダメージを与えた際、10%の確率でターゲットに出血スタックを1つ付与。槍：攻撃はターゲットの物理防御の12.5%を無視。双剣：パーフェクトドッジ後、8秒以内の次の武学スキルのダメージを25%増加。陌刀（Mo Blade）：チャージスキルとパリィカウンタースキルのクリティカルダメージを20%増加。剣の武学スキルは10秒のクールダウンがあり、双剣の武学スキルは25秒のクールダウンがあります。",
      },
      {
        name: "Insightful Strike（洞察の一撃）",
        type: "Attack/Damage Boost/DMG Reduction",
        description:
          "親和性（Affinity）ダメージを与えるとフォーカス（Focus）が生成されます。フォーカスが満タンになると、10秒間「集中（Concentration）」状態になります。集中：親和性ダメージが10%増加します。被弾時に5%の確率で受けるダメージを40%軽減します。",
      },
    ],

    gearSets: [
      {
        name: "ホークウィング・セット",
        pieces: 4,
        bonuses: {
          twoSet: "親和性率 +0.1%",
          fourSet:
            "いずれかのダメージで親和性が発動した際、「ホークウィング」を獲得：物理攻撃力が5秒間2%増加し、最大5回までスタックします。",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "イーグルライズ・セット",
        pieces: 4,
        bonuses: {
          twoSet: "物理防御 +1",
          fourSet:
            "継続ダメージ（DoT）を与えるか回復を行うと、「イーグルライズ」スタックを1つ獲得：受けるダメージを10秒間1.2%軽減し、最大5回までスタックします。最大スタック時、「イーグルガード」効果を受け取り、10秒以内に受ける次のダメージを90%軽減します（このダメージがボスからのものである場合は半減）。この効果は30秒ごとに一度だけ発動可能です。",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Campaign - Halo Peak",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "出血メカニズム強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "最大出血スタックの影響下にある敵に特定のスキルを当てると、一度に高い出血ダメージを与えることができます。",
      },
      {
        name: "親和性率アップグレード",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "力（Power）によって親和性率を増加させることができます。",
      },
      {
        name: "出血親和性強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "出血ダメージ計算時、親和性率をさらに増加させます。",
      },
      {
        name: "ベルストライク増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "ベルストライク（属性）攻撃力を増加させます。また、最大ベルストライク攻撃力に基づいてベルストライク貫通も増加させます。",
      },
      {
        name: "属性ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、ベルストライクダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "出血（Bleed）",
        description:
          "時間の経過とともに継続的なHPダメージを与え、最大5層までスタックします。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > 親和性率",
      "ヘブンクエーカー・スピアと非常に相性が良い（どちらもベルストライク・パスを共有）",
      "敵のHPを時間経過で削る出血ダメージに特化",
      "非常に柔軟 - 他の敵に対処しながら大型の敵を受動的に攻撃可能",
      "個々のターゲットを各個撃破することに集中可能",
      "再配置やカイティング（引き撃ち）のための高い機動力",
      "ペースを維持するために大量のスタミナが必要",
      "Second Track Slashはダッシュ中に不可視とダメージ免疫を付与",
      "Inner Balance Strike IIIはターゲットが5出血スタックの時に大ダメージを与える",
      "出血は最大5層までスタックしてダメージを最大化",
      "Wolfchaser's ArtとSword Horizonを通じてヘブンクエーカー・スピアとシナジー効果あり",
      "聖域へのアクセスには龍の鍵が必要",
      "ヘブンクエーカー・スピアとホークウィングおよびイーグルライズ装備セットを共有",
    ],
  },

  {
    id: "panacea-fan",
    name: "パナセア・ファン",
    type: "Fan",
    path: "Skillbind - Deluge",
    image: require("../../../../assets/martial_art_weapons/panacea_fan.png"),
    description:
      "扇のサポート指向の代替武器であり、ソウルシェード・アンブレラと並んでユニットを回復できる唯一の武器です。この武器は回復の提供や味方の蘇生によるサポートが全てであり、マルチプレイに強く適していますが、ダメージ力には著しく欠けます。戦闘中は後方に位置し、回復の提供に専念する武器と考えられています。",
    playstyle:
      "バースト回復と持続回復、単体およびグループ回復、蘇生能力、チームダメージバフを持つサポートヒーラー",

    howToGet: {
      method: "Quest Reward, Skill Theft, or Join Sect",
      location: "清河エリア（Qinghe Region）の銀針（Silver Needle）の聖域",
      details:
        "清河での「Oddities - Mystery of Five Tones」遭遇クエストの報酬、または銀針の聖域での技の奪取（龍の鍵が必要）、または銀針門派への加入で入手可能。聖域の場合：Loong Dragon Pillarで龍の鍵を使って入り、隠密を使って民兵を通り抜け、門派マスターに到達して技の奪取を行う。",
    },

    stats: {
      strengths: ["Support", "Survivability", "Difficulty"],
      weaknesses: ["Mobility", "DPS", "Control"],
    },

    skills: [
      {
        name: "Cloudburst Healing（豪雨の癒し）",
        type: "Martial Art",
        description:
          "使用時に露の雫（Dewdrops）を20ポイント生成します。ターゲット地点に水の分身を召喚し、近くの味方を毎秒1回回復させ、少量のHPを回復します。分身は7秒間持続します。使用後に露の雫が満タンの場合、センススキル（Sense Skill）を発動できます。",
        recovery: "20.0s",
        key: "Q",
      },
      {
        name: "Endless Cloud（終わらぬ雲）",
        type: "Martial Art",
        description:
          "露の雫のスタックをすべて消費し、範囲内のすべての味方に大きなバースト回復を提供します。ソウルシェード・アンブレラを装備しており、特殊スキル「Echoing Grow」がクールダウン中でない場合、自動的に発動されます。（センススキル - 露の雫が満タン時に発動）",
        recovery: "1.0s",
        key: "Q (when Dewdrops full)",
      },
      {
        name: "Light Dust After Morning Rain（朝雨後の光塵）",
        type: "Special",
        description:
          "扇を振るって水流を放ち、露の雫を50消費して、自身とパーティ内で最もHPの低い味方に6秒間の回復効果を付与し、中程度のHPを回復します。パーティパネルでターゲットが選択されている場合、効果はそのターゲットに固定されます。決闘（Duel）以外のゲームプレイでは、自身に適用される回復効果が30%増加します。近くに重傷（Fatally Wounded）の味方がいてセンススキルがクールダウン中でない場合、センススキルに切り替わります。",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Resurrection（蘇生）",
        type: "Special",
        description:
          "パーティ内に重傷のプレイヤーがいる場合、このスキルを使用し露の雫を消費して、再び戦えるようにします。選択したチームメイトが重傷の場合、そのチームメイトを蘇生します。選択されていないチームメイトが重傷の場合、最も近い重傷のチームメイトを蘇生します。パーティリストから重傷のチームメイトを素早く蘇生することも可能です。露の雫を多く消費するほど、蘇生後のHP回復量が増加します。ターゲットを蘇生した後、5秒間「豊富な露（Abundant Dew）」効果を獲得します。（センススキル - 味方が重傷時に発動）",
        recovery: "0.2s",
        key: "~ (when ally Fatally Wounded)",
      },
      {
        name: "Fourfold Inquiry（四重の問い）",
        type: "Light Attack",
        description: "扇を振るい、最大4回の遠距離軽攻撃を行います。",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Emerald Dewtouch（翠玉の露触）",
        type: "Healing",
        description:
          "自身または味方のHPを少量回復します。各セグメントで自身の露の雫を3、5、12回復します。HPの割合が最も低いターゲットを優先します。パーティパネルでターゲットが選択されている場合、回復はそのターゲットに固定されます。",
        key: "R",
      },
      {
        name: "扇 - 切り替え",
        type: "Dual-Weapon",
        description:
          "扇に切り替えてそれを振るい、自身と近くの味方1人のHPを持続的に回復します。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Royal Remedy（王家の治療）",
        type: "Support/Martial Arts/Recover",
        description:
          "パナセア・ファンの武学スキル「Cloudburst Healing」によって生成される水の分身の回復効果を10%増加させます。その範囲内にいる場合、持続回復を受けるたびに露の雫を1つ獲得します。",
      },
      {
        name: "Restoring Blossom（回復の開花）",
        type: "Support/Buff/Stacking",
        description:
          "クリティカル回復を行うと、「育成（Nurturing）」スタックを1つ、3秒間適用します。これにより受ける回復量が2%増加し、最大3回までスタックします。",
      },
      {
        name: "Esoteric Revival（秘儀の蘇生）",
        type: "Support/Buff/Recover",
        description:
          "パナセア・ファンの知覚スキル「Resurrection（蘇生）」による回復量を、蘇生されたターゲットに対して50%増加させます。",
      },
      {
        name: "Mending Loom（修復の織機）",
        type: "Support/Buff/Recover",
        description:
          "ソウルシェード・アンブレラの特殊スキル「Echoing Grow」を発動すると、露の雫を5回復し、消費した露の雫100ごとに自身の最大HPの10%を追加で回復します。（スキルバインド - デリュージの一部としてソウルシェード・アンブレラを使用している場合）",
      },
    ],

    gearSets: [
      {
        name: "アイボリーブルーム・セット",
        pieces: 4,
        bonuses: {
          twoSet: "Critical Rate +0.1%",
          fourSet:
            "HP最大時、クリティカル回復およびダメージを与える確率が5%ボーナスされ、クリティカル回復およびダメージの効果が15%増加します。",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "ワールスノー・セット",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "一度のダメージで最大HPの40%以上を失うか、HPが20%未満に低下した場合、5秒以内に受ける次の回復で最大HPの25%を追加で回復します。この効果は60秒ごとに一度発動します。",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Campaign - Furnace of Righteousness",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "水属性回復ブースト",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "自身の作成した水の分身の範囲内にいる間、毎秒2つの露の雫を追加で回復します。",
      },
      {
        name: "最大HP増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "防御力に基づいて最大HPを増加させることができます。最大ボーナスには25のDEFが必要です。",
      },
      {
        name: "重攻撃回復ブースト",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "重攻撃の回復量を5%増加させ、さらに最小物理攻撃力に基づいて増加させます（最小物理攻撃力250で最大5%増加）。",
      },
      {
        name: "スキルバインド属性増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "スキルバインド（属性）攻撃力を増加させます。また、最小スキルバインド攻撃力に基づいてスキルバインドダメージボーナスを増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "スキルバインド攻撃力に基づいてボーナス回復を与えます。すべてのスキルは属性攻撃力に基づいてダメージを与え、スキルバインドダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "露の雫（Dewdrop）",
        description:
          "パナセア・ファンとソウルシェード・アンブレラで使用される特別な武学リソースで、最大100ポイントです。",
      },
      {
        name: "心魔 - 回復減少",
        description:
          "キャンペーンおよび謎のボスに対する最初のクリアチャレンジを完了する前は、戦闘が心魔（Inner Demons）の影響を受け、回復効果が大幅に減少します。",
      },
      {
        name: "センススキル（Sense Skill）",
        description:
          "特定の特別な状況下で、対応するスキルが他の形態に変化する場合があります。",
      },
      {
        name: "秘技 - ダメージアップ",
        description:
          "ソウルシェード・アンブレラとパナセア・ファンの両方を装備している場合、秘技（Mystic Arts）のダメージが20%増加します。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > クリティカル率",
      "主要なヒーラー武器 - ソウルシェード・アンブレラ以外で回復できる唯一の武器",
      "マルチプレイで重傷の味方を蘇生可能",
      "マルチプレイのサポートに強く特化",
      "ダメージ出力に著しく欠ける",
      "戦闘では後方で回復を提供することに最適",
      "バースト（Endless Cloud）と持続回復（Cloudburst Healing）の両方を備える",
      "単体およびグループ回復をカバー",
      "チーム全体のダメージバフを提供",
      "ソウルシェード・アンブレラとスキルバインド - デリュージのパスを共有",
      "露の雫リソースシステム（最大100ポイント）を使用",
      "水の分身の回復はRoyal Remedy内功で強化可能",
    ],
  },

  {
    id: "inkwell-fan",
    name: "インクウェル・ファン",
    type: "Fan",
    path: "Skillbind - Jade",
    image: require("../../../../assets/martial_art_weapons/inkwell_fan.png"),
    description:
      "扇の攻撃的な代替武器であり、パナセア・ファンとは全く異なります。回復を提供する代わりに、この武器はユーザーがターゲットされない安全な距離から個々のターゲットを狙うことに重点を置いています。かなりの機動力とクラウドコントロール（妨害）を提供します。",
    playstyle: "持続ダメージ、妨害、空中攻撃コンボを持つ遠距離DPS",

    howToGet: {
      method: "Skill Theft",
      location: "清河エリア（Qinghe Region）北部のインクウェル・ファンの聖域",
      details:
        "龍の鍵が必要です。聖域を進み、6つの宝箱を集め、最後にマスターに対して技の奪取を行います。",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Difficulty", "Survivability", "Support"],
    },

    skills: [
      {
        name: "Jadewind Shield（翡翠風の盾）",
        type: "Martial Art",
        description:
          "扇で近くのターゲットをノックバックし、ボス以外のユニットと敵の投射物を8秒間ブロックする風のバリアを作成しながら、後方にジャンプして距離を取ります。このスキルを使用すると、来る攻撃を回避し、強化弾道（Enhanced Ballistics）を獲得します（最大2回スタック）。",
        recovery: "15.0s",
        key: "Q",
      },
      {
        name: "Peak's Springless Silence（峰の静寂）",
        type: "Special",
        description:
          "前方にダッシュしてターゲットを打ち上げます。短い束縛（Root）を適用します。人型エネミーにヒットすると打ち上げ（Launch）状態にします。非プレイヤーエネミーにヒットすると「Lingering Bone（残存する骨）」マークを付与します。既に打ち上げ状態または自身のLingering Boneマークが付いた敵にヒットすると、「風に乗る（Riding the Wind）」効果を獲得します。元の位置に水の分身を作成し、5秒以内に再使用すると分身の位置にフラッシュバックできます。",
        recovery: "12.0s",
        key: "~",
      },
      {
        name: "扇 - 軽攻撃",
        type: "Light Attack",
        description: "扇で最大4回の遠距離軽攻撃を行います。",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Forsaken Fame（見捨てられた名声）",
        type: "Charged",
        description:
          "短時間のチャージ後、前方に振るって旋風を放ち、中程度のダメージを与えます。人型エネミーにヒットすると打ち上げ状態にします。非プレイヤーエネミーにヒットすると「Lingering Bone」マークを付与します。",
        key: "Hold Left Click",
      },
      {
        name: "扇 - 重攻撃",
        type: "Heavy Attack",
        description:
          "最大3セグメントの重攻撃を行います。ターゲットが打ち上げ状態、または自身のLingering Boneマークの影響下にある場合、センススキルを発動するために知覚できます。",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Moon Shatter Spring（月砕く泉）",
        type: "Heavy Attack",
        description:
          "打ち上げ状態または自身のLingering Boneマークの影響下にある敵に対して空中重攻撃を行い、空中に跳躍して扇を振り3ヒットコンボを行います。「風に乗る」効果がある場合、強化された5ヒットコンボを行い大ダメージを与え、決闘以外のゲームプレイでは「不屈（Tenacity）」を獲得します。使用後6秒のクールダウン。",
        key: "Press R (while targeting Airborne enemy)",
      },
      {
        name: "扇 - 切り替え",
        type: "Dual-Weapon",
        description: "扇に切り替えて斬りつけます。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Blossom Barrage（満開の弾幕）",
        type: "Attack/Martial Arts/Damage Boost",
        description:
          "ヴァーナル・アンブレラの武学スキル「Spring Sorrow」は最大2スタック保持できます。ターゲットにヒットするとコンボ効果を適用：キャスターの弾道スキル（Ballistic Skills）から受けるダメージが8秒間10%増加します。（スキルバインド - ジェイドの一部としてヴァーナル・アンブレラを使用する場合に推奨）",
      },
      {
        name: "Flying Gourds（空飛ぶ瓢箪）",
        type: "Martial Arts/Support",
        description:
          "インクウェル・ファンの「Peak's Springless Silence」に2チャージを付与しますが、クールダウンが3秒増加します。",
      },
      {
        name: "Thunderous Bloom（雷鳴の開花）",
        type: "Damage Boost/Buff",
        description:
          "3秒以内に15m以上移動すると「春の雷（Spring Thunder）」を獲得：12秒以内の次の3回の重攻撃または空中重攻撃のダメージボーナスが15%増加します。この効果は15秒ごとに1回発動します。",
      },
      {
        name: "Star Reacher（星を掴む者）",
        type: "Attack/Pursuit/Buff",
        description: "敵を空中に打ち上げた後、8秒間物理攻撃力が10%増加します。",
      },
    ],

    gearSets: [
      {
        name: "Veil of the Willow Set",
        pieces: 4,
        bonuses: {
          twoSet: "Precision Rate +0.1%",
          fourSet:
            "軽攻撃/空中重攻撃の後、ダメージが12%増加し、10秒間持続します。重攻撃/空中重攻撃/軽攻撃/チャージ攻撃の後、ダメージが12%増加します。",
        },
        howToObtain: ["Campaign - Heavenfall", "Sword Trial", "Group Dungeons"],
      },
      {
        name: "Beyond the Chill Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "戦闘開始後、10秒間ダメージを受けなかった場合、「Beyond the Chill」を獲得：次の被ダメージとその後2秒以内のすべての被ダメージを40%軽減します。「Beyond the Chill」は戦闘を離れると解除されます。",
        },
        howToObtain: [
          "Campaign - Heavenfall",
          "Campaign - Furnace of Righteousness",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "低気（Qi）追撃強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "気の低いターゲットに対する「Moon Shatter Spring」のクリティカル率を増加させます。",
      },
      {
        name: "物理攻撃力増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "敏捷性（Agility）によって最小物理攻撃力を増加させることができます。",
      },
      {
        name: "空中追撃強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "「Moon Shatter Spring」のクリティカルダメージを増加させます。",
      },
      {
        name: "スキルバインド属性増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "スキルバインド（属性）攻撃力を増加させます。また、最小スキルバインド攻撃力に基づいてスキルバインドダメージボーナスを増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、スキルバインドダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "打ち上げ（Launch）",
        description:
          "特殊スキルを使用してターゲットを空中に送り、大ダメージに対してより脆弱にします。",
      },
      {
        name: "風に乗る（Riding the Wind）",
        description:
          "インクウェル・ファンのユニークな効果。この間に使用される次の追撃スキルが強化されます。この効果は2秒間持続します。",
      },
      {
        name: "センススキル（Sense Skill）",
        description:
          "特定の特別な状況下で、対応するスキルが他の形態に変化する場合があります。",
      },
      {
        name: "強化弾道（Enhanced Ballistics）",
        description: "投射物スキルのダメージが20%増加します。",
      },
      {
        name: "Lingering Bone（残存する骨）",
        description:
          "非プレイヤーエネミーに適用されるマークで、空中コンボ攻撃を可能にします。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > クリティカル率",
      "近接武器でリスクを冒したくないプレイヤーに適したオプション",
      "クラウドコントロール（妨害）を伴う持続的な遠距離DPSに優れています",
      "聖域へのアクセスには龍の鍵が必要です",
    ],
  },

  {
    id: "mortal-rope-dart",
    name: "モータル・ロープダート",
    type: "Rope Dart",
    path: "Bamboocut - Wind",
    image: require("../../../../assets/martial_art_weapons/mortal_rope_dart.png"),
    description:
      "縄鏢は遠距離攻撃と近接攻撃の混合を提供します。このユニークなハイブリッド武器は、戦闘でのアプローチに多様性を与えます。プレイヤーは鞭のようななぎ払い攻撃で遠距離から攻撃し、敵のバランスを崩して追撃コンボにつなげることができます。",
    playstyle:
      "タイミングと位置取りが重要な流動的な戦闘を持つハイブリッド遠距離/近接武器、群衆管理に優れる",

    howToGet: {
      method: "Skill Theft",
      location: "開封（Kaifeng）エリアの武術館（Martial Hall）",
      details:
        "Nine Mortal Ways門派への加入が必要です。変装システムを含む複雑なクエストラインを完了します：長老と話す、Wuyanと話す、Jade Sachetを入手、変装を解除、Muddleに変装、キッチンでCore Disciple's Tokenを入手、Elder Tianと話す、Art Theftを使用して武学を習得。",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Support", "Survivability", "Difficulty"],
    },

    skills: [
      {
        name: "Bladebound Thread（刃の糸）",
        type: "Martial Art",
        description:
          "縄鏢を前方に投げます。ボスに当たった場合、自分がターゲットに向かって引っ張られます。それ以外の場合、ターゲットと縄鏢を自分のほうへ引き寄せます。2.5秒以内に再度押すと、ターゲットをノックダウンするコンボキックを放ちます。ヒットしたターゲットは「復讐のトークン（Vendetta Token）」を受け取ります。ネズミが復讐のトークンを持つターゲットを攻撃すると、50%増加したダメージを与え、「感謝のトークン（Token of Gratitude）」を回復します。",
        recovery: "8.0s",
        key: "Q",
      },
      {
        name: "Rodent Rampage（齧歯類の暴走）",
        type: "Special",
        description:
          "感謝のトークン（Token of Grace）を消費するごとに、ネズミを召喚して連携攻撃を行います。軽攻撃を行うと、ネズミが地面から飛び出して攻撃します。この効果は10秒間持続し、武器を切り替えても効果は残ります。",
        recovery: "0.5s",
        key: "~",
      },
      {
        name: "縄鏢 - 軽攻撃",
        type: "Light Attack",
        description: "縄鏢を振り、最大4回の連続攻撃を行います。",
        recovery: "0.3s",
        key: "Left Click",
      },
      {
        name: "Coiled Dragon（とぐろを巻く龍）",
        type: "Light Attack",
        description:
          "チャージ構え（Charging Stance）中に使用すると、縄鏢を強力に投げてヒットした敵をノックダウンします。",
        recovery: "0.5s",
        key: "Left Click while holding R",
      },
      {
        name: "Rodent's Resilience（ネズミの回復力）",
        type: "Charged",
        description:
          "チャージしてスタミナを消費し、前方に剣気を放ちます。ヒットしたターゲットは長時間制御されます。剣気ダメージはヒットごとに20%減少し、最小50%になります。チャージレベルが高いほどダメージと範囲が増加します。",
        recovery: "1.0s",
        key: "Hold R",
      },
      {
        name: "Rodent's Resilience（引き寄せ）",
        type: "Charged",
        description:
          "チャージ構え中に使用すると、縄鏢を投げて遠くの敵を自分の方へ引き寄せます。",
        recovery: "0.3s",
        key: "Press R",
      },
      {
        name: "縄鏢 - 切り替え",
        type: "Dual-Weapon",
        description: "縄鏢に切り替えて攻撃します。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Echoes of Oblivion（忘却の残響）",
        type: "Pursuit/Martial Arts/Debuff",
        description:
          "Infernal Twinbladesの軽攻撃は「罪（Sin）」を付与します。Flamelash状態の軽攻撃は「カルマ（Karma）」を付与します。これらのデバフを持つターゲットに対するInfernal Twinbladesの軽攻撃は、物理防御またはバンブーカット耐性の一部を無視します。（バンブーカット - ウィンドの一部としてInfernal Twinbladesを使用している場合）",
      },
      {
        name: "Vendetta（復讐）",
        type: "Martial Arts/Buff/Recover",
        description:
          "Guided Blade：復讐のトークンの持続時間を延長し、感謝のトークンを払い戻します。",
      },
      {
        name: "Riptide Reflex（激流の反射）",
        type: "Control/Buff",
        description:
          "制御スキルで敵にヒットすると、現在の武学スキルのクールダウンが短縮されます。10秒ごとに1回発動可能です。",
      },
      {
        name: "Breaking Point（限界点）",
        type: "Pursuit/Buff/Stacking",
        description:
          "疲弊（Exhausted）した敵にクリティカルヒットを与えると、「崩壊（Disintegration）」スタックを1つ、3秒間適用し、最大3回までスタックします。各スタックは追加の物理貫通を付与し、クリティカルダメージボーナスを増加させます。",
      },
    ],

    gearSets: [
      {
        name: "Swallowcall Set",
        pieces: 4,
        bonuses: {
          twoSet: "Min Physical Attack Increase",
          fourSet:
            "気が40%未満のターゲットに対して軽攻撃のダメージが15%増加し、疲弊したターゲットに対しては5%増加します。",
        },
        howToObtain: [
          "Campaign - Blissful Retreat",
          "Campaign - Jinning Pool",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Calmwaters Set",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense Increase",
          fourSet:
            "敵の攻撃をパーフェクトドッジすると、50%の確率で最大HPの3%とスタミナ10を回復します。",
        },
        howToObtain: [
          "Campaign - Blissful Retreat",
          "Campaign - Jinning Pool",
          "Campaign - Halo Peak",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "クリティカル率増加",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "敏捷性（Agility）ステータスによってクリティカル率を増加させることができます。",
      },
      {
        name: "ネズミダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "ネズミの物理ダメージを増加させます。",
      },
      {
        name: "バンブーカット増加",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "バンブーカット攻撃力を増加させます。また、最小バンブーカット攻撃力に基づいてバンブーカットダメージを増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、バンブーカットダメージはさらに増加します。",
      },
      {
        name: "骨腐食強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "武学スキル「Guided Blade」と派生コンボ「Coiled Dragon」は、敵に5秒間「骨腐食（Bone Corrosion）」を適用します。",
      },
    ],

    effects: [
      {
        name: "感謝のトークン（Token of Gratitude）",
        description:
          "縄鏢武学「モータル・ロープダート」で使用される戦闘リソース。一部のスキルは発動に感謝のトークンの消費が必要です。",
      },
      {
        name: "復讐のトークン（Vendetta Token）",
        description: "武学「モータル・ロープダート」の特別なマーク。",
      },
      {
        name: "チャージ構え（Charging Stance）",
        description:
          "特別な縄鏢の構え：この構えの間、特定のスキルが変化します。",
      },
      {
        name: "スタミナ（Endurance）",
        description:
          "被弾時、クラウドコントロール（CC）以外のすべてに対して免疫を持ちます。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > クリティカル率",
      "Nine Mortal Ways門派への加入が必要",
      "変装システムを伴う複雑なクエストライン",
      "群衆を管理し、臨機応変に戦闘戦術を変えるためのツールを求めるプレイヤーに推奨",
      "戦闘は流動的かつ動的で、力押しよりもタイミングと位置取りが報われます",
    ],
  },

  {
    id: "nameless-spear",
    name: "名もなき槍",
    type: "Spear",
    path: "Bellstrike - Splendor",
    image: require("../../../../assets/martial_art_weapons/nameless_spear.png"),
    description:
      "「Where Winds Meet」で最初にアンロックする武器であり、名もなき剣を補完します。この多才な槍は、ゲームの仕組みを学びながら強力な範囲（AoE）ダメージとスタミナ回復を提供します。初心者に理想的な単純明快な攻撃パターンを特徴とし、群衆を制御しエリアダメージを与えるスキルを持っています。",
    playstyle: "スタミナ回復と群衆制御を備えた、初心者向けの範囲攻撃戦闘",

    howToGet: {
      method: "Story Progression",
      details: "ゲーム開始時に名もなき剣と共に自動的に入手。特別な要件なし。",
    },

    stats: {
      strengths: ["AoE Damage", "Endurance Recovery", "Beginner-Friendly"],
      weaknesses: ["Single Target DPS", "Advanced Mechanics"],
    },

    skills: [
      {
        name: "Qiankun's Lock（乾坤の錠）",
        type: "Martial Art",
        description:
          "槍で前方に突きを放ち、経路上の敵にダメージを与えて移動不能（Immobilize）にします。使用後、10秒間スタミナを15回復します。",
        recovery: "10.0s",
        key: "Q",
      },
      {
        name: "Legion Crusher（軍団砕き）",
        type: "Special",
        description:
          "前方の地面を槍で叩き、狭い範囲の敵にダメージを与えます。このスキルを使用すると3秒間「無双（Unrivaled）」を獲得します。",
        recovery: "8.0s",
        key: "~",
      },
      {
        name: "Storm Dance（嵐の舞）",
        type: "Charged",
        description:
          "チャージして自身の周囲で槍を回転させ、近くの敵に複数回ダメージを与えます。",
        key: "Hold R",
      },
      {
        name: "槍 - 軽攻撃",
        type: "Light Attack",
        description: "長槍を振るい、最大4回の軽攻撃を行います。",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "槍 - 重攻撃",
        type: "Heavy Attack",
        description: "長槍を振るい、最大3回の重攻撃を行います。",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "槍 - 切り替え",
        type: "Dual-Weapon",
        description: "槍に切り替えてなぎ払い攻撃を行います。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Morph（剣の変化）",
        type: "Attack/Damage Boost",
        description: "特定のスキル使用後、短時間物理攻撃力を増加させます。",
      },
      {
        name: "Mountain's Might（山の威力）",
        type: "Defense/Buff",
        description:
          "発動中、受けるダメージを軽減し、物理防御力を増加させます。",
      },
      {
        name: "Wildfire Spark（野火の火花）",
        type: "Attack/DoT",
        description:
          "攻撃に火属性の継続ダメージを追加し、敵に継続的なダメージを与えます。",
      },
      {
        name: "Battle Anthem（戦いの賛歌）",
        type: "Support/Buff",
        description: "近くの味方にバフを提供し、戦闘能力を向上させます。",
      },
    ],

    gearSets: [
      {
        name: "Jadeware Set",
        pieces: 4,
        bonuses: {
          twoSet: "Increases Physical Attack",
          fourSet: "Skill damage bonus and increased Endurance recovery rate",
        },
        howToObtain: ["Early Campaign Quests", "Starter Dungeons"],
      },
      {
        name: "Formbend Set",
        pieces: 4,
        bonuses: {
          twoSet: "Increases Max HP",
          fourSet: "Reduces skill cooldowns and provides damage reduction",
        },
        howToObtain: ["Early Campaign Quests", "Starter Dungeons"],
      },
    ],

    talents: [
      {
        name: "親和性率アップグレード",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "親和性率を増加させ、ボーナスダメージを与える確率を向上させます。",
      },
      {
        name: "物理攻撃力増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "力（Power）によって最大物理攻撃力を増加させることができます。",
      },
      {
        name: "スタミナ回復強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "「Qiankun's Lock」によるスタミナ回復率を向上させます。",
      },
      {
        name: "ベルストライク増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description: "ベルストライク（属性）攻撃力と貫通を増加させます。",
      },
      {
        name: "最大スタミナ増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description: "長期戦のために最大スタミナプールを増加させます。",
      },
    ],

    effects: [
      {
        name: "移動不能（Immobilize）",
        description: "短時間、ターゲットの移動を防ぎます。",
      },
      {
        name: "無双（Unrivaled）",
        description:
          "制御効果に対する免疫を付与し、ダメージ出力を増加させます。",
      },
    ],

    notes: [
      "新規プレイヤーに最適なスターター武器",
      "最初の武器ペアとして名もなき剣を補完します",
      "範囲ダメージと群衆制御に焦点を当てています",
      "「Qiankun's Lock」は貴重なスタミナ回復を提供します",
      "シンプルなメカニクスは戦闘の基本を学ぶのに理想的です",
    ],
  },

  {
    id: "nameless-sword",
    name: "名もなき剣",
    type: "Sword",
    path: "Bellstrike - Splendor",
    image: require("../../../../assets/martial_art_weapons/nameless_sword.png"),
    description:
      "「Where Winds Meet」で最初にアンロックする武器です。範囲ダメージを与えるよりも、個々のターゲットに集中して素早く倒すことを好むプレイヤーに最適です。DPS特化の武器であり、ターゲットに複数回ヒットさせることができ、クリティカルヒットを絶えず発生させるのに適しています。優れた機動力を提供し、敵の大群に対して極めて必要不可欠です。",
    playstyle:
      "クリティカルヒット重視でバーストダメージの可能性を持つ、高機動力な単体DPS",

    howToGet: {
      method: "Story Progression",
      details: "ゲーム開始時に名もなき槍と共に自動的に入手。特別な要件なし。",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Control", "Survivability"],
    },

    skills: [
      {
        name: "Fearless Lunge（恐れなき突進）",
        type: "Martial Art",
        description:
          "飛剣を投げてヒットした敵に軽ダメージを与え、その後前方にダッシュして剣を追います。フォロースルー中に再度押すと、最大2回の「裁き（Judgment）」を放ち、それぞれ増加したダメージを与えます。「裁き」の2撃目の後、3秒間持続する「気の盾（Qi Shield）」を獲得します。",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Shadow Step（影歩）",
        type: "Special",
        description:
          "スタミナを消費して後方に回避し、剣気（Sword Qi）を放ちます（剣気ダメージはヒットごとに20%減少し、最小50%になります）。3秒以内に再度押すと「剣のダッシュ（Sword Dash）」を使用できます。",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "剣 - 軽攻撃",
        type: "Light Attack",
        description: "長剣で最大4回の軽攻撃を行います。",
        recovery: "0.6s",
        key: "Left Click",
      },
      {
        name: "Homeless Charge（寄る辺なき突撃）",
        type: "Charged",
        description:
          "スタミナを消費してチャージし、前方に剣気を放ちます（剣気ダメージはヒットごとに20%減少し、最小50%になります）。チャージレベルは時間とともに増加し、剣気のダメージと範囲を強化します。",
        key: "Hold R",
      },
      {
        name: "剣 - 重攻撃",
        type: "Heavy Attack",
        description: "長剣で最大3回の重攻撃を行います。",
        recovery: "0.9s",
        key: "R",
      },
      {
        name: "剣 - 切り替え",
        type: "Dual-Weapon",
        description: "剣に切り替えて斬りつけます。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Morph（剣の変化）",
        type: "Attack/Martial Arts/Damage Buff",
        description:
          "気の盾が存在する間に名もなき剣のチャージスキル「Homeless Charge」がチャージされると、2段階目のチャージ状態で複数の追加の剣エネルギー攻撃を放ちます。ボーナススタミナを消費して剣エネルギーのダメージを増加させることができ、スタミナごとのダメージ増加は1%、最大20%までです。",
      },
      {
        name: "Mountain's Might（山の威力）",
        type: "Support/Martial Arts/Cost Reduction",
        description:
          "名もなき槍の武学スキル「Qiankun's Lock」は「終わらぬ疾風（Endless Gale）」効果を付与し、5秒間スタミナコスト削減を20%に増加させます。名もなき槍をベルストライク - スプレンダーの一部として使用している場合にのみ推奨されます。",
      },
      {
        name: "Wildfire Spark（野火の火花）",
        type: "Support/Recover",
        description: "消費したスタミナの3.5%を払い戻します。",
      },
      {
        name: "Battle Anthem（戦いの賛歌）",
        type: "Attack/Damage Boost",
        description:
          "すべてのボスに対するチャージスキルのダメージを10%増加させます。",
      },
    ],

    gearSets: [
      {
        name: "Jadeware Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max Physical Attack +1",
          fourSet:
            "武学スキルの発動で「Jadeware」効果が発動：親和性ダメージが10%増加し、制御下のターゲットまたは気が40%未満のターゲットに対して親和性ダメージが20%増加します。12秒間持続。この効果は30秒ごとに一度発動可能です。",
        },
        howToObtain: [
          "Campaign - Palace of Annals",
          "Campaign - Bodhi Sea",
          "Sword Trial",
          "Group Dungeons",
          "Activity Shop",
        ],
      },
      {
        name: "Formbend Set",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "気の盾の持続時間が2秒延長されます。気が85%以上あるか、気ダメージ免疫シールドがある場合、受けるすべてのHPダメージを20%軽減します。",
        },
        howToObtain: [
          "Campaign - Palace of Annals",
          "Campaign - Bodhi Sea",
          "Campaign - Halo Peak",
          "Sword Trial",
          "Group Dungeons",
          "Activity Shop",
        ],
      },
    ],

    talents: [
      {
        name: "気（Qi）闘争強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "与える気ダメージが10%増加します。",
      },
      {
        name: "物理ダメージ増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "最大物理攻撃力をモメンタム（Momentum）に基づいて増加させることができます。（モメンタム：特定の比率に基づいてキャラクターの親和性率と最大物理攻撃力に変換されます）。",
      },
      {
        name: "剣気親和性強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "気が20%未満のターゲット（疲弊したターゲットを含む）に対する剣エネルギー攻撃の親和性率を、最大物理攻撃力に基づいて増加させます（最大物理攻撃力500で最大3.5%増加）。",
      },
      {
        name: "ベルストライク増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "ベルストライク攻撃力（属性攻撃）を19 - 38増加させます。最大ベルストライク攻撃力に基づいてベルストライク貫通を増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、ベルストライク攻撃は50%のボーナスダメージを与えます。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > 親和性率",
      "新規プレイヤーに最適なスターター武器",
      "最初の武器ペアとして名もなき槍を補完します",
      "両方の武器は同じ開発パス（ベルストライク - スプレンダー）を共有します",
      "高い機動力と単体制御；敵のカイティング（引き撃ち）に優れています",
      "強力なスタミナとチャージスキルを組み合わせてバーストダメージを放ちます",
    ],
  },

  {
    id: "vernal-umbrella",
    name: "ヴァーナル・アンブレラ",
    type: "Umbrella",
    path: "Skillbind - Jade",
    image: require("../../../../assets/martial_art_weapons/vemal_umbrella.png"),
    description:
      "ソウルシェード・アンブレラの攻撃的な代替武器であり、機能は全く異なります。回復を提供する代わりに、この武器はユーザーがターゲットされない安全な距離から個々のターゲットを狙うことに重点を置いています。かなりの機動力とクラウドコントロールを提供し、近接武器でリスクを冒したくないプレイヤーに適したオプションとなっています。",
    playstyle: "制御と空中バーストコンボを持つ遠距離持続DPS",

    howToGet: {
      method: "Quest Reward or Skill Theft",
      location: "開封（Kaifeng）エリアの時の塔（Time Tower）",
      details:
        "清河での「Oddities - Mystery of Five Tones」遭遇クエストの報酬、または時の塔での技の奪取で入手可能。技の奪取の場合：塔の基部でWang Ping'anと話し、登ってJiang Ting'erを見つけ、記念品のヒント探し（トラ猫、チェスプレイヤー、噂話をする女性、倉庫、2階の宝物庫）を完了し、倉庫からBramble Rose Hairpinを回収し、Jiang Ting'erに戻り、マスターに対して技の奪取を行う。",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Difficulty", "Survivability", "Support"],
    },

    skills: [
      {
        name: "Spring Sorrow（春の悲しみ）",
        type: "Martial Art",
        description:
          "短時間チャージし、前方に空飛ぶ花びらを撃ちます。ヒット時、非ボスの敵を3秒間移動不能（Immobilize）にします。",
        recovery: "15.0s",
        key: "Q",
      },
      {
        name: "Unfading Flower（色褪せぬ花）",
        type: "Special",
        description:
          "少なくとも50の開花（Blossom）がある場合に使用できます。傘を空中に投げて隠し剣を抜きます。その後、別の武器に切り替えるか、隠し剣の基本スキルを使用できます。発動中、傘は空中であなたに追従し、5m以内の単体ターゲットに自動的に投射物を発射します。ターゲットが空中にいる場合、傘は追加の開花を消費して強化された投射物を発射し、ターゲットの滞空時間を延長します。毎秒10の開花を消費します。開花が不足すると、傘は自動的に回収されます。",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "傘 - 軽攻撃",
        type: "Light Attack",
        description:
          "傘を振るい、最大3回の軽攻撃を行い、近〜中距離のダメージを与えます。",
        recovery: "0.1s",
        key: "Left Click",
      },
      {
        name: "Spring Away（春の逃走）",
        type: "Light Attack",
        description:
          "チャージ後、傘を開いて空中に上昇し急速に回転して、自身を滞空状態にし、投射物を発射して中程度のダメージを与えます。これらの投射物をターゲットに当てると、開花を急速に蓄積できます。",
        key: "Hold Left Click",
      },
      {
        name: "Apricot Heaven（杏子の天国）",
        type: "Charged",
        description:
          "大ダメージを与える1段階チャージスキルです。傘を開いて空中に飛び、近くの敵に一度範囲ダメージを与えます。空中でのチャージ中、チャージ時間に基づいて2つのバリエーションがあります：通常の下降範囲攻撃と強化された範囲攻撃。",
        key: "Hold R",
      },
      {
        name: "Colorful Phoenix（彩りの鳳凰）",
        type: "Heavy Attack",
        description:
          "1回目または2回目の重攻撃のリカバリー中に軽攻撃ボタンをタップするとコンボスキルが発動します - 傘を開いて前方にダッシュし、多段ヒットダメージを与えます。",
        recovery: "0.2s",
        key: "R while in the air",
      },
      {
        name: "傘 - 重攻撃",
        type: "Heavy Attack",
        description:
          "傘を振るい、最大4回の重攻撃を行い、近〜中距離のダメージを与えます。",
        key: "R",
      },
      {
        name: "傘 - 切り替え",
        type: "Dual-Weapon",
        description: "武器を傘に切り替えて振り、ダメージを与えます。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Blossom Barrage（満開の弾幕）",
        type: "Attack/Martial Arts/Damage Boost",
        description:
          "ヴァーナル・アンブレラの武学スキル「Spring Sorrow」は最大2スタック保持できます。ターゲットにヒットするとコンボ効果を適用：キャスターの弾道スキルから受けるダメージが8秒間10%増加します。影響を受ける弾道スキルには、武学スキル「Spring Sorrow」と特殊スキル「Unfading Flower」が含まれます。スキルバインド - ジェイドの一部としてヴァーナル・アンブレラを使用する場合に推奨されます。",
      },
      {
        name: "Flying Gourds（空飛ぶ瓢箪）",
        type: "Martial Arts/Support",
        description:
          "インクウェル・ファンの「Peak's Springless Silence」に2チャージを付与しますが、クールダウンが3秒増加します。",
      },
      {
        name: "Thunderous Bloom（雷鳴の開花）",
        type: "Damage Boost/Buff",
        description:
          "3秒以内に15m以上移動すると「春の雷（Spring Thunder）」を獲得：12秒以内の次の3回の重攻撃または空中重攻撃のダメージボーナスが15%増加します。この効果は15秒ごとに1回発動します。",
      },
      {
        name: "Star Reacher（星を掴む者）",
        type: "Attack/Pursuit/Buff",
        description: "敵を空中に打ち上げた後、8秒間物理攻撃力が10%増加します。",
      },
    ],

    gearSets: [
      {
        name: "Veil of the Willow Set",
        pieces: 4,
        bonuses: {
          twoSet: "Precision Rate +0.1%",
          fourSet:
            "軽攻撃/空中重攻撃の後、ダメージが12%増加し、10秒間持続します。逆もまた真なりです。特に、重攻撃/空中重攻撃/軽攻撃/チャージ攻撃の後、ダメージが12%増加します。",
        },
        howToObtain: ["Campaign - Heavenfall", "Sword Trial", "Group Dungeons"],
      },
      {
        name: "Beyond the Chill Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "戦闘開始後、10秒間ダメージを受けなかった場合、「Beyond the Chill」を獲得：次の被ダメージとその後2秒以内のすべての被ダメージを40%軽減します。「Beyond the Chill」は戦闘を離れると解除されます。",
        },
        howToObtain: [
          "Campaign - Heavenfall",
          "Campaign - Furnace of Righteousness",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "弾道スキル強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "ヴァーナル・アンブレラのすべての弾道スキルは、移動不能または空中の敵にダメージを与える際、ターゲットの物理耐性の一部を無視します。",
      },
      {
        name: "クリティカル率増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "敏捷性（Agility）によってクリティカル率を増加させることができます。",
      },
      {
        name: "弾道計算強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "ヴァーナル・アンブレラの弾道スキルのクリティカルダメージを増加させます。",
      },
      {
        name: "スキルバインド属性増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "スキルバインド（属性）攻撃力を増加させます。また、最小スキルバインド攻撃力に基づいてスキルバインドダメージボーナスを増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、スキルバインドダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "空中（Airborne）",
        description:
          "特殊スキルを使用してターゲットを空中に送り、大ダメージに対してより脆弱にします。",
      },
      {
        name: "開花（Blossom）",
        description:
          "ヴァーナル・アンブレラのユニークな武学リソース。最大100ポイント。この武学を装備して敵に攻撃を当てると獲得できます。開花はスキル使用中に継続的に消費されます。",
      },
      {
        name: "移動不能（Immobilize）",
        description:
          "ターゲットは無効化され、移動やスキルの使用ができなくなります。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > クリティカル率",
      "ソウルシェード・アンブレラの攻撃的な代替品",
      "インクウェル・ファンとスキルバインド - ジェイドのパスを共有",
      "持続的なDPS能力を持つ遠距離プレイスタイル",
      "安全な距離での戦闘 - ユーザーは容易にターゲットされない",
      "かなりの機動力と群衆制御オプション",
      "近接武器でリスクを冒したくないプレイヤーに適しています",
      "技の奪取方法のヒント探しを伴う複雑なクエストライン",
      "ユニークな開花リソースシステム - 最大100ポイント",
      "傘が自動的に投射物を発射する間、隠し剣を抜くことができます",
    ],
  },

  {
    id: "soulshade-umbrella",
    name: "ソウルシェード・アンブレラ",
    type: "Umbrella",
    path: "Skillbind - Deluge",
    image: require("../../../../assets/martial_art_weapons/soulshade_umbrella.png"),
    description:
      "傘のサポート指向の代替武器であり、パナセア・ファンと並んでユニットを回復できる唯一の武器です。この武器は回復の提供によるサポートが全てであり、マルチプレイに強く適していますが、ダメージ力には著しく欠けます。戦闘中は後方に位置し、回復の提供に専念する武器と考えられています。",
    playstyle:
      "バースト回復と持続回復、単体およびグループ回復、蘇生能力、チームダメージバフを持つサポートヒーラー",

    howToGet: {
      method: "Skill Theft",
      location: "開封（Kaifeng）エリア東部のソウルシェード・アンブレラの宿場",
      details:
        "開封エリアをアンロックするために第1章：Heaven Has No Pierを完了する必要があります。宿場を隠密で進む：左の家に入り、警備兵を暗殺し、弟子を一掃し、宝箱を略奪し、棺桶の梯子から隠れ家へ降り、吊り棺エリアを一掃し、目的エリアへ登り、マスターに対して技の奪取を行う。",
    },

    stats: {
      strengths: ["Support", "Survivability", "Difficulty"],
      weaknesses: ["Mobility", "DPS", "Control"],
    },

    skills: [
      {
        name: "Floating Grace（浮遊する恩恵）",
        type: "Martial Art",
        description:
          "傘を送り出し、自身と近くの味方に8秒間15%のダメージ増加を付与し、一度回復します。",
        recovery: "60.0s",
        key: "Q",
      },
      {
        name: "Echoes of a Thousand Plants（千草の残響）",
        type: "Special",
        description:
          "傘を空中に投げて柄から隠し剣を抜きます。別の武器に切り替えるか、隠し剣の基本スキルを使用できます。回復量を15%増加させ、時間とともに露の雫を生成します（最大60）。傘は空中でホバリングしてあなたに追従し、近くで最もHP割合の低い味方（自身を含む）を自動的に回復します。自身を回復する場合、回復効果が50%増加します。隠し剣を振るっている間に特殊スキルを使用すると、傘を早期に回収できます。",
        recovery: "60.0s",
        key: "~",
      },
      {
        name: "傘 - 軽攻撃",
        type: "Light Attack",
        description:
          "傘を振るい、最大3回の軽攻撃を行い、近〜中距離のダメージを与えます。",
        recovery: "0.1s",
        key: "Left Click",
      },
      {
        name: "傘 - 重攻撃",
        type: "Heavy Attack",
        description: "傘を前方に送り出し、回転攻撃を行います。",
        recovery: "1.6s",
        key: "R",
      },
      {
        name: "Pale Petal（淡い花びら）",
        type: "Charged",
        description:
          "傘を前方に送り出し、回転攻撃を行います。ターゲットが既に疲弊（Exhausted）している場合、攻撃は疲弊状態の持続時間を延長します。スキルを長押しすると、ダメージと効果時間の両方が増加します。",
        key: "Hold R",
      },
      {
        name: "傘 - 切り替え",
        type: "Dual-Weapon",
        description:
          "武器を傘に切り替えて振り、ダメージを与えます。回復量を5%増加させ、一定時間かけて露の雫を生成します（最大30）。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Royal Remedy（王家の治療）",
        type: "Support/Martial Arts/Recover",
        description:
          "パナセア・ファンの武学スキル「Cloudburst Healing」によって生成される水の分身の回復効果を10%増加させます。その範囲内にいる場合、持続回復を受けるたびに露の雫を1つ獲得します。",
      },
      {
        name: "Restoring Blossom（回復の開花）",
        type: "Support/Buff/Stacking",
        description:
          "クリティカル回復を行うと、「育成（Nurturing）」スタックを1つ、3秒間適用します。これにより受ける回復量が2%増加し、最大3回までスタックします。",
      },
      {
        name: "Esoteric Revival（秘儀の蘇生）",
        type: "Support/Buff/Recover",
        description:
          "パナセア・ファンの知覚スキル「Resurrection（蘇生）」による回復量を、蘇生されたターゲットに対して50%増加させます。",
      },
      {
        name: "Mending Loom（修復の織機）",
        type: "Support/Buff/Recover",
        description:
          "ソウルシェード・アンブレラの特殊スキル「Echoing Grow」を発動すると、露の雫を5回復し、消費した露の雫100ごとに自身の最大HPの10%を追加で回復します。（スキルバインド - デリュージの一部としてソウルシェード・アンブレラを使用している場合）",
      },
    ],

    gearSets: [
      {
        name: "アイボリーブルーム・セット",
        pieces: 4,
        bonuses: {
          twoSet: "Critical Rate +0.1%",
          fourSet:
            "HP最大時、クリティカル回復およびダメージを与える確率が5%ボーナスされ、クリティカル回復およびダメージの効果が15%増加します。",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "ワールスノー・セット",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "一度のダメージで最大HPの40%以上を失うか、HPが20%未満に低下した場合、5秒以内に受ける次の回復で最大HPの25%を追加で回復します。この効果は60秒ごとに一度発動します。",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Campaign - Furnace of Righteousness",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "バフ強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "武学スキルにより、自身と味方が疲弊した敵に対してボーナスダメージを与えられるようになります。ソウルシェード・アンブレラとパナセア・ファンの両方を装備している場合、秘技（Mystic Arts）のダメージが増加します。",
      },
      {
        name: "物理攻撃力増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "敏捷性（Agility）によって最小物理攻撃力を増加させることができます。",
      },
      {
        name: "クリティカル回復強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "特殊スキルのクリティカル回復効果を増加させます。",
      },
      {
        name: "スキルバインド属性増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "スキルバインド（属性）攻撃力を増加させます。また、最小スキルバインド攻撃力に基づいてスキルバインド貫通を増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "スキルバインド攻撃力に基づいてボーナス回復を与えます。すべてのスキルは属性攻撃力に基づいてダメージを与え、スキルバインドダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "露の雫（Dewdrop）",
        description:
          "パナセア・ファンとソウルシェード・アンブレラで使用される特別な武学リソースで、最大100ポイントです。",
      },
      {
        name: "心魔 - 回復減少",
        description:
          "キャンペーンおよび謎のボスに対する最初のクリアチャレンジを完了する前は、戦闘が心魔（Inner Demons）の影響を受け、回復効果が大幅に減少します。",
      },
      {
        name: "センススキル（Sense Skill）",
        description:
          "特定の特別な状況下で、対応するスキルが他の形態に変化する場合があります。",
      },
      {
        name: "秘技 - ダメージアップ",
        description:
          "ソウルシェード・アンブレラとパナセア・ファンの両方を装備している場合、秘技（Mystic Arts）のダメージが20%増加します。",
      },
    ],

    notes: [
      "装備調整の優先順位：最小物理攻撃力 > 最大物理攻撃力 > クリティカル率",
      "サポートヒーラー武器 - パナセア・ファン以外で回復できる唯一の武器",
      "マルチプレイのサポートに強く特化",
      "ダメージ出力に著しく欠ける",
      "戦闘では後方で回復を提供することに最適",
      "バースト回復と持続回復の両方を備える",
      "単体およびグループ回復をカバー",
      "蘇生能力により敗北した味方を戦線に復帰させられる",
      "チーム全体のダメージバフを提供（8秒間ダメージ15%増）",
      "パナセア・ファンとスキルバインド - デリュージのパスを共有",
      "露の雫リソースシステム（最大100ポイント）を使用",
      "傘が最もHPの低い味方を自動回復する間、隠し剣を抜くことができます",
      "回復量を15%増加させ、時間とともに露の雫を生成",
      "パナセア・ファンとシナジーあり - 共に装備すると秘技のダメージが20%増加",
      "開封エリアをアンロックするために第1章を完了する必要あり",
    ],
  },

  {
    id: "stormbreaker-spear",
    name: "ストームブレイカー・スピア",
    type: "Spear",
    path: "Stonesplit - Might",
    image: require("../../../../assets/martial_art_weapons/stormbreaker_spear.png"),
    description:
      "この武器は、入ってくるダメージを受け止めることを好むプレイヤー向けに特別に設計されています。ストームブレイカー・スピアは、生存率を高めるいくつかのシールドとダメージ軽減リソースをユーザーに提供します。機動力は低下しており、ゲームプレイは理解しやすくなっています。ダメージを与えることは得意ではありませんが、適切に使用すれば大きなダメージを与えることができます。",
    playstyle:
      "シールド、ダメージ軽減、妨害耐性、挑発能力を持つタンク - 広範囲のAoEチャージスキルでチームのダメージスポンジとして機能",

    howToGet: {
      method: "Story Progression",
      details:
        "最初のクエストの1つを終え、Wang将軍を訪問した後、メールでストームブレイカー・スピアを受け取ります。受信箱を確認して「Raging Tides General's Gift」を受け取ってください（メインメニュー > 右上の手紙）。",
    },

    stats: {
      strengths: ["Survivability", "Control", "DPS"],
      weaknesses: ["Mobility", "Support", "Difficulty"],
    },

    skills: [
      {
        name: "Storm Roar（嵐の咆哮）",
        type: "Martial Art",
        description:
          "槍を振って音波を放ち、近くの敵を挑発（Taunt）し、8秒間「感電（Shocked）」状態にしながら、16秒間20%のダメージ軽減を獲得します（マルチプレイキャンペーンボスにヒットした場合は40%）。スキル中は「不屈（Fortitude）」を獲得します。",
        recovery: "20.0s",
        key: "Q",
      },
      {
        name: "Thunder Shock（雷撃）",
        type: "Special",
        description:
          "戦意（Fighting Spirit）を2バー消費して槍を構え、前方に回転蹴りを放った後、反転して叩きつけ、ターゲットをノックダウンして8秒間「脆弱（Vulnerability）」を適用します。スキル中は「不屈」を獲得します。",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "槍 - 軽攻撃",
        type: "Light Attack",
        description: "長槍を振るい、最大4回の軽攻撃を行います。",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Fury Spear（激怒の槍）",
        type: "Charged",
        description:
          "チャージ後、突きの連打を放ち、大ダメージを与えます。最後の攻撃で「ドラムビート（Drumbeat）」を獲得します。スキル中は「不屈」を獲得します。",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "槍 - 重攻撃",
        type: "Heavy Attack",
        description: "長槍を振るい、最大3回の重攻撃を行います。",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "槍 - 切り替え",
        type: "Dual-Weapon",
        description: "槍に切り替えてなぎ払い攻撃を行います。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Exquisite Scenery（絶景）",
        type: "Defense/Martial Arts/Counter",
        description:
          "Thundercry Bladeでの防御に成功すると、特別なカウンターアタックが発動可能になります。知覚スキルまたは重攻撃を押すと、チャージなしで1段階目のチャージ重攻撃を放ちます。この効果は10秒ごとに一度発動可能です。派生コンボでターゲットにヒットすると、戦意を1バー回復します（キャストごとに1バーまで）。",
      },
      {
        name: "Trapped Beast（囚われの獣）",
        type: "Defense/Buff/Recover",
        description:
          "HPが30%未満の状態でダメージを受けると「追い詰められた獣（Cornered Beast）」が発動し、最大HPの30%まで吸収するシールドを生成します。この効果は4秒間持続し、300秒ごとに一度発動可能です。",
      },
      {
        name: "Art of Resistance（抵抗の術）",
        type: "Defense/Buff",
        description:
          "自身のHPシールドの持続時間とその発生元スキルのボーナス効果を4秒延長します。",
      },
      {
        name: "Rock Solid（盤石）",
        type: "Defense/Martial Arts/DMG Reduction",
        description:
          "ボスユニットを挑発した後のストームブレイカー・スピアの「Storm Roar」のダメージ軽減を20%増加させ、非ボスユニットを挑発した後は5%増加させ、合計で最大20%まで増加します。ダメージ軽減がアクティブな間、与えるすべてのダメージが10%減少します。ストームブレイカー・スピアをストーンスプリット - マイトの一部として使用する場合に推奨されます。",
      },
    ],

    gearSets: [
      {
        name: "Rainwhisper Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "すべてのクリティカルダメージと回復を10%増加させ、HPシールドがある場合はさらに15%増加させます。",
        },
        howToObtain: [
          "Campaign - Unbound Cavern",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Moonflare Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "防御中に攻撃すると、30%の確率で最大HPの10%まで吸収するシールドを作成し、20秒間持続します。既にシールドが存在する場合、追加でHPを2%回復します。この効果は60秒ごとに一度発動可能です。",
        },
        howToObtain: [
          "Campaign - Unbound Cavern",
          "Campaign - Furnace of Righteousness",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "最大戦意（Fighting Spirit）増加",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "最大戦意を1バー増加させます。",
      },
      {
        name: "精度率増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "身体（Body）に基づいて精度率を増加させます（14 Bodyで上限）。",
      },
      {
        name: "被ヒットダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "チャージスキルとその派生コンボを当てた直後、受ける物理ダメージを軽減します。",
      },
      {
        name: "ストーンスプリット増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "ストーンスプリット（属性）攻撃力を増加させます。また、最大ストーンスプリット攻撃力に基づいてストーンスプリット貫通を増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、ストーンスプリットダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "戦意（Fighting Spirit）",
        description:
          "Thundercry Bladeとストームブレイカー・スピアのユニークな武学リソース。ブロックや時間の経過による自然回復で得られ、特定のスキルを使用する際に消費されます。",
      },
      {
        name: "ドラムビート（Drumbeat）",
        description:
          "6秒間、チャージスキルのダメージを15%増加させます。ストームブレイカー・スピア専用。Thundercry Bladeの武学スキルの知覚スキルを発動できます。",
      },
      {
        name: "挑発（Taunt）",
        description: "敵は挑発されたターゲットを優先的に攻撃します。",
      },
      {
        name: "感電（Shocked）",
        description: "与えるダメージを20%減少させます。",
      },
      {
        name: "脆弱（Vulnerable）",
        description:
          "受けるHPおよび気ダメージが8%増加します。ダメージ源がThundercry Bladeまたはストームブレイカー・スピアを使用している場合、さらに8%増加します。",
      },
      {
        name: "不屈（Fortitude）",
        description:
          "被弾時、クラウドコントロール（CC）以外のすべてに対して免疫を持ちます。",
      },
    ],

    notes: [
      "装備調整の優先順位：最大HP",
      "入ってくるダメージを受け止めるために設計されています",
      "複数のシールドとダメージ軽減リソース",
      "高い生存力 - チームのダメージスポンジとして機能可能",
      "敵のヘイトを制御する挑発能力",
      "妨害耐性（不屈）を装備",
      "チャージスキルで敵を集めて広範囲のAoEダメージを与えることが可能",
      "機動力が低いためゲームプレイが理解しやすい",
      "ダメージは専門ではありませんが、適切に使用すれば大きなダメージを与えることができます",
      "Thundercry Bladeとストーンスプリット - マイトのパスおよび戦意リソースを共有",
      "Storm Roarは20%のダメージ軽減（マルチプレイキャンペーンボスに対しては40%）を付与",
      "専用のドラムビート効果でチャージスキルのダメージが15%増加",
      "ゲーム序盤にWang将軍からのメールで入手",
    ],
  },

  {
    id: "thundercry-blade",
    name: "サンダークライ・ブレード",
    type: "Mo Blade",
    path: "Stonesplit - Might",
    image: require("../../../../assets/martial_art_weapons/thundercry_blade.png"),
    description:
      "この武器は、入ってくるダメージを受け止めることを好むプレイヤー向けに特別に設計されています。サンダークライ・ブレードは、生存率を高めるいくつかのシールドをユーザーに提供します。機動力は低下しており、ゲームプレイは理解しやすくなっています。ダメージを与えることは得意ではありませんが、適切に使用すれば大きなダメージを与えることができます。",
    playstyle:
      "シールド、ダメージ軽減、妨害耐性を持つタンク - 広範囲のチャージスキルでチームのダメージスポンジとして機能しAoEダメージを与える",

    howToGet: {
      method: "Quest Reward, Skill Theft, or Join Sect",
      location: "開封（Kaifeng）エリアのWell of Heaven Martial Camp",
      details:
        "清河での「Oddities - Mystery of Five Tones」遭遇クエストの報酬、または開封エリアのWell of Heaven Martial Campでの技の奪取、またはWell of Heaven門派への加入で入手可能。",
    },

    stats: {
      strengths: ["Survivability", "Control", "DPS"],
      weaknesses: ["Mobility", "Support", "Difficulty"],
    },

    skills: [
      {
        name: "Predator's Shield（捕食者の盾）",
        type: "Martial Art",
        description:
          "8秒間、最大HPの25%に相当するシールドを付与し、戦意を2バー増加させます。ドラムビートを持っている場合、それが削除されて知覚スキルが発動します。",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Shifting Heaven（移ろう天）",
        type: "Martial Art",
        description:
          "8秒間持続する、最大HPの25%に相当するシールドを付与します。また、戦意2バーと「突破（Breakthrough）」を獲得します。（知覚スキル - ドラムビート時に発動）",
        recovery: "12.0s",
        key: "Q (with Drumbeat)",
      },
      {
        name: "Sunrush Gale（陽衝く疾風）",
        type: "Special",
        description:
          "戦意を2バー消費して陌刀を地面に突き刺し、近くの敵を引き寄せる渦を生成します（ボスには無効）。その後、陌刀を回転させて強力ななぎ払い攻撃を放ち、フォーカスを獲得します。スキル中は「不屈」を獲得します。",
        recovery: "7.0s",
        key: "~",
      },
      {
        name: "陌刀 - 軽攻撃",
        type: "Light Attack",
        description:
          "陌刀を振るい、最大3回の軽攻撃を行い、軽ダメージを与えます。",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Galecloud Cleave（疾風雲の斬撃）",
        type: "Charged",
        description:
          "軽チャージスキルです。チャージ後、陌刀を回転させて二重のなぎ払い攻撃を行い、広範囲に中程度のダメージを与えます。チャージ中に移動可能です。チャージには3段階あり、段階ごとにダメージが増加します。ステージ3でリリースすると、戦意を1バー消費して（利用可能な場合）ダメージを20%ブーストし、軽攻撃派生コンボスキルをアンロックします。スキル中は「不屈」を獲得します。",
        recovery: "0.2s",
        key: "Hold Left Click",
      },
      {
        name: "軽攻撃派生コンボ",
        type: "Light Attack",
        description:
          "戦意を1バー消費して陌刀を逆に振り、広範囲に中程度のダメージを与えるなぎ払い攻撃を行います。スキル中は「不屈」を獲得します。（Galecloud Cleaveステージ3後にアンロック）",
        recovery: "1.0s",
        key: "Left Click (after Galecloud Cleave)",
      },
      {
        name: "陌刀 - 重攻撃",
        type: "Heavy Attack",
        description:
          "陌刀で最大3回の重攻撃を行い、それぞれ低ダメージを与えます。",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Avalanche（雪崩）",
        type: "Charged",
        description:
          "チャージ可能な重攻撃です。斬り上げた後、叩きつけて狭い範囲に大ダメージを与えます。チャージ中に移動可能です。スキルには3つのパワーステージがあり、それぞれダメージが増加します。ステージ3で、戦意を1バー消費して（利用可能な場合）ダメージを20%ブーストし、重攻撃コンボをアンロックします。スキル中は「不屈」を獲得します。",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "派生コンボ",
        type: "Heavy Attack",
        description:
          "戦意を1バー消費して空中に跳躍し宙返りし、地面に叩きつけて狭い範囲に大ダメージを与え、ターゲットをノックダウンします。スキル中は「不屈」を獲得します。（Avalancheステージ3後にアンロック）",
        recovery: "1.0s",
        key: "R (after Avalanche)",
      },
      {
        name: "陌刀 - 切り替え",
        type: "Dual-Weapon",
        description: "武器を陌刀に切り替えて振り、軽ダメージを与えます。",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Exquisite Scenery（絶景）",
        type: "Defense/Martial Arts/Counter",
        description:
          "Thundercry Bladeでの防御に成功すると、特別なカウンターアタックが発動可能になります。知覚スキルまたは重攻撃を押すと、チャージなしで1段階目のチャージ重攻撃を放ちます。この効果は10秒ごとに一度発動可能です。派生コンボでターゲットにヒットすると、戦意を1バー回復します（キャストごとに1バーまで）。",
      },
      {
        name: "Trapped Beast（囚われの獣）",
        type: "Defense/Buff/Recover",
        description:
          "HPが30%未満の状態でダメージを受けると「追い詰められた獣（Cornered Beast）」が発動し、最大HPの30%まで吸収するシールドを生成します。この効果は4秒間持続し、300秒ごとに一度発動可能です。",
      },
      {
        name: "Art of Resistance（抵抗の術）",
        type: "Defense/Buff",
        description:
          "自身のHPシールドの持続時間とその発生元スキルのボーナス効果を4秒延長します。",
      },
      {
        name: "Rock Solid（盤石）",
        type: "Defense/Martial Arts/DMG Reduction",
        description:
          "ボスユニットを挑発した後のストームブレイカー・スピアの「Storm Roar」のダメージ軽減を20%増加させ、非ボスユニットを挑発した後は5%増加させ、合計で最大20%まで増加します。ダメージ軽減がアクティブな間、与えるすべてのダメージが10%減少します。ストームブレイカー・スピアをストーンスプリット - マイトの一部として使用する場合に推奨されます。",
      },
    ],

    gearSets: [
      {
        name: "Rainwhisper Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "すべてのクリティカルダメージと回復を10%増加させ、HPシールドがある場合はさらに15%増加させます。",
        },
        howToObtain: [
          "Campaign - Unbound Cavern",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Moonflare Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "防御中に攻撃すると、30%の確率で最大HPの10%まで吸収するシールドを作成し、20秒間持続します。既にシールドが存在する場合、追加でHPを2%回復します。この効果は60秒ごとに一度発動可能です。",
        },
        howToObtain: [
          "Campaign - Unbound Cavern",
          "Campaign - Furnace of Righteousness",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
    ],

    talents: [
      {
        name: "チャージ計算強化",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "チャージスキルと派生コンボは決して摩耗（Abrasion）せず、より多くのクリティカルダメージを与えます。",
      },
      {
        name: "最大HP増加",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "身体（Body）によって最大HPを増加させることができます。",
      },
      {
        name: "チャージクリティカルヒット強化",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "チャージスキルおよび関連する派生コンボのクリティカル率を増加させます。",
      },
      {
        name: "ストーンスプリット増加",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "ストーンスプリット（属性）攻撃力を増加させます。また、最大ストーンスプリット攻撃力に基づいてストーンスプリット貫通を増加させます。",
      },
      {
        name: "属性攻撃ダメージ強化",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "すべてのスキルは属性攻撃力に基づいてダメージを与え、ストーンスプリットダメージはさらに増加します。",
      },
    ],

    effects: [
      {
        name: "戦意（Fighting Spirit）",
        description:
          "Thundercry Bladeとストームブレイカー・スピアのユニークな武学リソース。ブロックや時間の経過による自然回復で得られ、特定のスキルを使用する際に消費されます。",
      },
      {
        name: "突破（Breakthrough）",
        description:
          "12秒間、チャージスキルのダメージを30%増加させ、チャージ中のスタミナコストを削除します。",
      },
      {
        name: "シールド（Shield）",
        description:
          "固定気ダメージを除く、HPダメージと関連する気ダメージを吸収します。",
      },
      {
        name: "フォーカス（Focus）",
        description:
          "5秒以内に使用される次のチャージスキルは50%速くチャージされます。",
      },
      {
        name: "ドラムビート（Drumbeat）",
        description:
          "6秒間、チャージスキルのダメージを15%増加させます。ストームブレイカー・スピア専用。Thundercry Bladeの武学スキルの知覚スキルを発動できます。",
      },
    ],

    notes: [
      "装備調整の優先順位：最大HP",
      "入ってくるダメージを受け止めるために設計されています",
      "複数のシールド能力が生存率を高めます",
      "機動力が低いためゲームプレイが理解しやすい",
      "ダメージは専門ではありませんが、適切に使用すれば大きなダメージを与えることができます",
      "ストームブレイカー・スピアとストーンスプリット - マイトのパスおよび戦意リソースを共有",
      "Predator's Shieldは25%のHPシールドと+2の戦意バーを付与",
      "ドラムビートバフを持っているとShifting Heaven知覚スキルが発動",
      "突破効果：チャージスキルダメージ+30%、12秒間スタミナコストなし",
      "不屈は被弾時にクラウドコントロール以外のすべてに対する免疫を付与",
      "段階ごとにダメージが増加する3段階チャージ攻撃",
      "ステージ3のチャージは派生コンボスキルをアンロック（戦意1バーを消費）",
      "Sunrush Galeの渦は敵を引き寄せます（ボスには無効）",
      "ストームブレイカー・スピアとRainwhisperおよびMoonflare装備セットを共有",
      "ドラムビート効果を通じてストームブレイカー・スピアとシナジー効果あり",
    ],
  },
];

// Helper function to get weapon by ID
export const getWeaponById = (id: string): Weapon | undefined => {
  return weaponDatabase.find((weapon) => weapon.id === id);
};

// Helper function to get weapons by type
export const getWeaponsByType = (type: string): Weapon[] => {
  return weaponDatabase.filter((weapon) => weapon.type === type);
};

// Helper function to get all weapon types
export const getAllWeaponTypes = (): string[] => {
  const types = new Set(weaponDatabase.map((weapon) => weapon.type));
  return Array.from(types);
};
