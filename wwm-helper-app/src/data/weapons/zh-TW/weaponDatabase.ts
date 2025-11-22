import { Weapon } from '../../../types/weapons';

export const weaponDatabase: Weapon[] = [
  {
    id: 'heavenquaker-spear',
    name: '震天槍',
    type: 'Spear', // Logic preserved
    path: 'Bellstrike - Umbra', // Logic preserved
    image: require('../../../../assets/martial_art_weapons/heavenquaker_spear.png'),
    description: '一把專注於造成流血傷害以消耗敵人生命值的武學武器。震天槍可以快速施加流血效果，對成群的敵人造成巨大的範圍（AoE）傷害。',
    playstyle: '以流血為核心的輸出（DPS），具備持續傷害和範圍攻擊能力',

    howToGet: {
      method: 'Skill Theft',
      location: '清河區域的震天槍聖地',
      level: 8,
      details: '在和平鐘樓完成邱月海的任務「偷師：不勞而獲」。需要龍鑰（Dragon Key）才能進入聖地。',
    },

    stats: {
      strengths: ['DPS', 'Difficulty', 'Mobility'], // Logic preserved
      weaknesses: ['Support', 'Survivability', 'Control'], // Logic preserved
    },

    skills: [
      {
        name: 'Sober Sorrow (獨醒之悲)',
        type: 'Martial Art',
        description: '全力旋轉長槍，對附近的敵人進行六次連續的橫掃攻擊，造成巨大傷害。技能結束後，根據連擊數獲得持續12秒的增益：水滴（<5擊）、春潮（5+擊）或江流（10+擊）。',
        recovery: '12.0s',
        key: 'Q',
      },
      {
        name: 'Sweep All (橫掃千軍)',
        type: 'Special',
        description: '揮舞長槍對附近的敵人造成傷害。根據當前增益進行強化：水滴（中等傷害）、春潮（增加傷害/範圍，降低防禦）、江流（進一步增加傷害/範圍，降低防禦，施加流血）。',
        recovery: '1.0s',
        key: '~',
      },
      {
        name: 'Spear - Light Attack (槍 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞長槍進行最多四次的輕攻擊。',
        recovery: '0.2s',
        key: 'Left Click',
      },
      {
        name: 'Drifting Thrust (漂移突刺)',
        type: 'Charged',
        description: '消耗耐力進行蓄力，然後用長槍發動一連串突刺，對前方敵人造成多段傷害。技能期間獲得「堅韌」（受擊時免疫除控制外的所有效果）。',
        recovery: '0.2s',
        key: 'Hold R',
      },
      {
        name: 'Spear - Heavy Attack (槍 - 重攻擊)',
        type: 'Heavy Attack',
        description: '揮舞長槍進行最多三次的重攻擊。',
        recovery: '0.2s',
        key: 'R',
      },
      {
        name: 'Spear - Conversion (槍 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至長槍並進行橫掃攻擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Sword Horizon (劍界)',
        type: 'Attack/Martial Arts/Pursuit',
        description: '在施放戰略劍（Strategic Sword）的武學技能、特殊技能或蓄力技能後，在完美時機按下按鍵可施放「交錯之劍」並發動追擊。如果目標擁有5層流血，則移除所有流血層數並一次性造成高額流血傷害。',
      },
      {
        name: "Wolfchaser's Art (逐狼式)",
        type: 'Martial Arts/Buff',
        description: '將獲得「獨醒之悲」增益所需的連擊數從5/10減少至4/8。每當「獨醒之悲」擊中帶有你流血效果的Boss時，有20-100%的機率根據流血層數使連擊數加1。',
      },
      {
        name: 'Adaptive Steel (適應之鋼)',
        type: 'Attack/Support/Buff',
        description: '槍：攻擊無視目標12.5%的物理防禦。',
      },
      {
        name: 'Insightful Strike (洞察一擊)',
        type: 'Attack/Damage Boost/DMG Reduction',
        description: '造成親和（Affinity）傷害時產生專注（Focus）。專注滿時，進入「集中」狀態10秒（親和傷害增加10%，受擊時有5%機率減少40%的傷害）。',
      },
    ],

    gearSets: [
      {
        name: 'Hawkwing Set (鷹翼套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '親和率 +0.1%',
          fourSet: '當任何傷害觸發親和時，獲得「鷹翼」：物理攻擊增加2%，持續5秒，最多疊加5次。',
        },
        howToObtain: ['Campaign - Still Shore', 'Campaign - Gleaming Abyss', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Eaglerise Set (鷹揚套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '物理防禦 +1',
          fourSet: '造成持續傷害或治療時獲得「鷹揚」：受到的傷害減少1.2%，持續10秒（最多5層）。疊滿時，獲得「鷹衛」效果，使下一次受到的傷害減少90%（若來自Boss則減半）。冷卻時間30秒。',
        },
        howToObtain: ['Campaign - Still Shore', 'Campaign - Gleaming Abyss', 'Campaign - Halo Peak', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '持續傷害強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '蓄力技能擊中目標時，增加其受到的持續傷害。',
      },
      {
        name: '物理攻擊力增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '力量（Power）可以增加最大物理攻擊力。',
      },
      {
        name: '持續傷害強化 II',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '計算類別傷害時，進一步增加親和傷害。',
      },
      {
        name: 'Bellstrike 增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Bellstrike（屬性）攻擊力。同時根據最大 Bellstrike 攻擊力增加 Bellstrike 穿透。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Bellstrike 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Bleed (流血)',
        description: '隨時間造成持續的生命值傷害，最多疊加5層。',
      },
      {
        name: 'Droplet (水滴)',
        description: '造成的生命值傷害增加10%。',
      },
      {
        name: 'Spring Surge (春潮)',
        description: '造成的生命值傷害增加15%。',
      },
      {
        name: 'River Flow (江流)',
        description: '造成的生命值傷害增加20%。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 親和率',
      '與戰略劍（Strategic Sword）搭配極佳，具有流血協同效應',
      '需要龍鑰才能進入聖地',
    ],
  },

  {
    id: 'strategic-sword',
    name: '戰略劍',
    type: 'Sword',
    path: 'Bellstrike - Umbra',
    image: require('../../../../assets/martial_art_weapons/strategic_sword.png'),
    description: '當你使用劍和槍時可以選擇的第二種武學。這種武學不僅僅造成純粹的傷害，而是專注於造成流血傷害以消耗敵人的生命值。同時，你可以繼續用簡單的攻擊傷害他們。這種武學非常靈活，允許你在被動攻擊大型敵人的同時處理其他敵人，或者專注於逐個擊殺單個目標。此外還擁有很高的機動性，但需要大量的耐力來保持節奏。',
    playstyle: '以流血為核心的輸出，具備持續傷害、高機動性和靈活的目標管理 - 需要高水平的耐力管理',

    howToGet: {
      method: 'Skill Theft',
      location: '清河區域南部的戰略劍聖地',
      details: '需要龍鑰。快速傳送至後山傳送點。通過龍隱石柱（Loong Herm Dragon Pillar）進入聖地。穿過民兵守衛，掠奪2個寶箱，前往東側，上坡到二樓，使用藍色圓圈進行偷師。',
    },

    stats: {
      strengths: ['DPS', 'Difficulty', 'Mobility'],
      weaknesses: ['Support', 'Survivability', 'Control'],
    },

    skills: [
      {
        name: 'Inner Track Slash (內徑斬)',
        type: 'Martial Art',
        description: '衝向敵人並進行快速斬擊，造成輕微傷害並施加流血。在後續動作中再次按下，可對前方敵人進行四次連續斬擊，施加流血。',
        recovery: '12.0s',
        key: 'Q',
      },
      {
        name: 'Inner Balance Strike III (內衡擊 III)',
        type: 'Special',
        description: '消耗耐力向後閃避拉開距離，然後多次攻擊原位置的敵人。如果目標有5層流血，立即造成高額傷害並移除流血層數。此效果對同一目標每次使用只能觸發一次。每次擊中施加流血。',
        recovery: '1.0s',
        key: '~',
      },
      {
        name: 'Sword - Light Attack (劍 - 輕攻擊)',
        type: 'Light Attack',
        description: '使用長劍進行最多四次的輕攻擊。',
        recovery: '0.6s',
        key: 'Left Click',
      },
      {
        name: 'Second Track Slash (二徑斬)',
        type: 'Charged',
        description: '消耗耐力進行蓄力並迅速向前衝刺，對路徑上的敵人造成巨大傷害。衝刺時隱身並免疫傷害，每次擊中施加流血。',
        recovery: '1.0s',
        key: 'Hold R',
      },
      {
        name: 'Sword - Heavy Attack (劍 - 重攻擊)',
        type: 'Heavy Attack',
        description: '使用長劍進行最多三次的重攻擊。',
        recovery: '0.9s',
        key: 'R',
      },
      {
        name: 'Sword - Conversion (劍 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至長劍並進行斬擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Sword Horizon (劍界)',
        type: 'Attack/Martial Arts/Pursuit',
        description: '在施放戰略劍的武學技能、特殊技能或蓄力技能後，在結束階段的完美時機按下技能鍵可施放「交錯之劍」並發動追擊。如果目標擁有5層流血，則移除所有流血層數並一次性造成高額流血傷害。',
      },
      {
        name: "Wolfchaser's Art (逐狼式)",
        type: 'Martial Arts/Buff',
        description: '將獲得震天槍武學技能「獨醒之悲」增益所需的連擊數從5/10減少至4/8。每當「獨醒之悲」擊中帶有你流血效果的Boss時，有20%/40%/60%/80%/100%的機率根據流血層數使連擊數加1。',
      },
      {
        name: 'Adaptive Steel (適應之鋼)',
        type: 'Attack/Support/Buff',
        description: '根據你使用的刃類武器獲得武學技能：劍：造成親和傷害時有10%機率對目標施加一層流血。槍：攻擊無視目標12.5%的物理防禦。雙刀：完美閃避後，8秒內下一次武學技能傷害增加25%。陌刀：增加蓄力技能和招架反擊技能的暴擊傷害20%。劍的武學技能有10秒冷卻，雙刀的武學技能有25秒冷卻。',
      },
      {
        name: 'Insightful Strike (洞察一擊)',
        type: 'Attack/Damage Boost/DMG Reduction',
        description: '造成親和傷害時產生專注（Focus）。專注滿時，進入「集中」狀態10秒。集中：親和傷害增加10%。受擊時，有5%機率減少40%的傷害。',
      },
    ],

    gearSets: [
      {
        name: 'Hawkwing Set (鷹翼套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '親和率 +0.1%',
          fourSet: '當任何傷害觸發親和時，獲得「鷹翼」：物理攻擊增加2%，持續5秒，最多疊加5次。',
        },
        howToObtain: ['Campaign - Still Shore', 'Campaign - Gleaming Abyss', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Eaglerise Set (鷹揚套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '物理防禦 +1',
          fourSet: '造成持續傷害或治療時獲得1層「鷹揚」：受到的傷害減少1.2%，持續10秒，最多疊加5次。疊滿時，獲得「鷹衛」效果，使10秒內下一次受到的傷害減少90%（若來自Boss則減半）。此效果每30秒只能觸發一次。',
        },
        howToObtain: ['Campaign - Still Shore', 'Campaign - Gleaming Abyss', 'Campaign - Halo Peak', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '流血機制強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '使用特定技能擊中受最大層數流血影響的敵人時，可造成一次高額流血傷害。',
      },
      {
        name: '親和率升級',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '力量（Power）可以增加親和率。',
      },
      {
        name: '流血親和強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '計算流血傷害時，進一步增加親和率。',
      },
      {
        name: 'Bellstrike 增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Bellstrike（屬性）攻擊力。同時根據最大 Bellstrike 攻擊力增加 Bellstrike 穿透。',
      },
      {
        name: '屬性傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Bellstrike 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Bleed (流血)',
        description: '隨時間造成持續的生命值傷害，最多疊加5層。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 親和率',
      '與震天槍（Heavenquaker Spear）搭配極佳 - 兩者共享 Bellstrike 路徑',
      '專注於流血傷害以隨時間消耗敵人生命值',
      '非常靈活 - 可以在被動攻擊大型敵人的同時處理其他敵人',
      '可以專注於逐個擊殺單個目標',
      '高機動性，便於重新定位和風箏（Kiting）',
      '需要大量耐力來維持節奏',
      '二徑斬（Second Track Slash）在衝刺時提供隱身和傷害免疫',
      '當目標有5層流血時，內衡擊 III（Inner Balance Strike III）造成高額傷害',
      '流血最多疊加5層以達到最大傷害',
      '通過「逐狼式」和「劍界」與震天槍產生協同效應',
      '需要龍鑰才能進入聖地',
      '與震天槍共享鷹翼和鷹揚裝備套裝',
    ],
  },

  {
    id: 'panacea-fan',
    name: '濟世扇',
    type: 'Fan',
    path: 'Skillbind - Deluge',
    image: require('../../../../assets/martial_art_weapons/panacea_fan.png'),
    description: '扇子的輔助型替代品，也是除魂蔭傘外唯一可以治療單位的武器。這把武器完全是為了提供治療甚至復活盟友而存在的，這使其非常適合多人遊戲，但它的傷害嚴重不足，被認為是你需要在戰鬥中退後，只提供治療的武器。',
    playstyle: '具備爆發和持續治療、單體和群體恢復、復活能力以及團隊傷害增益的輔助治療者',

    howToGet: {
      method: 'Quest Reward, Skill Theft, or Join Sect',
      location: '清河區域的銀針聖地（Silver Needle Sanctum）',
      details: '可能來自清河的奇遇任務「五音之謎」獎勵，或在銀針聖地進行偷師（需要龍鑰），或加入銀針門派。聖地路線：在龍隱石柱使用龍鑰進入，潛在民兵周圍，到達門主處進行偷師。',
    },

    stats: {
      strengths: ['Support', 'Survivability', 'Difficulty'],
      weaknesses: ['Mobility', 'DPS', 'Control'],
    },

    skills: [
      {
        name: 'Cloudburst Healing (驟雨癒合)',
        type: 'Martial Art',
        description: '使用時產生20點露珠（Dewdrops）。在目標位置召喚一個水幻影，每秒治療附近的盟友一次，恢復少量生命值。幻影持續7秒。使用後若露珠已滿，可觸發感知技能（Sense Skill）。',
        recovery: '20.0s',
        key: 'Q',
      },
      {
        name: 'Endless Cloud (無盡雲)',
        type: 'Martial Art',
        description: '消耗所有露珠層數，為範圍內的所有盟友提供大量爆發治療。如果裝備了魂蔭傘且特殊技能「迴響生長（Echoing Grow）」不在冷卻中，將自動觸發。（感知技能 - 露珠滿時觸發）',
        recovery: '1.0s',
        key: 'Q (when Dewdrops full)',
      },
      {
        name: 'Light Dust After Morning Rain (雨後輕塵)',
        type: 'Special',
        description: '揮舞扇子釋放水流，消耗50點露珠，為自己和隊伍中生命值最低的盟友施加6秒的治療效果，恢復中等生命值。如果在隊伍面板中選擇了目標，效果將固定在該目標上。在非決鬥玩法中，施加在自己身上的治療效果增加30%。如果附近有重傷（Fatally Wounded）盟友且感知技能不在冷卻中，則切換為感知技能。',
        recovery: '0.2s',
        key: '~',
      },
      {
        name: 'Resurrection (復活)',
        type: 'Special',
        description: '當隊伍中有重傷玩家時，使用此技能消耗露珠讓他們再次戰鬥。如果選定的隊友重傷，復活該隊友。如果未選定的隊友重傷，復活最近的重傷隊友。也可以通過隊伍列表快速復活重傷隊友。消耗的露珠越多，復活後恢復的生命值越多。復活目標後，獲得5秒的「豐沛之露」效果。（感知技能 - 盟友重傷時觸發）',
        recovery: '0.2s',
        key: '~ (when ally Fatally Wounded)',
      },
      {
        name: 'Fourfold Inquiry (四問)',
        type: 'Light Attack',
        description: '揮舞扇子進行最多四次的遠程輕攻擊。',
        recovery: '0.2s',
        key: 'Left Click',
      },
      {
        name: 'Emerald Dewtouch (翠露之觸)',
        type: 'Healing',
        description: '為自己或盟友恢復少量生命值。每段為自己恢復3、5和12點露珠。優先選擇生命值百分比最低的目標。如果在隊伍面板中選擇了目標，恢復將固定在該目標上。',
        key: 'R',
      },
      {
        name: 'Fan - Conversion (扇 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至扇子並揮舞，隨時間為自己和附近一名盟友恢復生命值。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Royal Remedy (皇家療法)',
        type: 'Support/Martial Arts/Recover',
        description: '增加濟世扇武學技能「驟雨癒合」所創造的水幻影的治療效果10%。如果你在範圍內，每次受到持續治療時獲得1點露珠。',
      },
      {
        name: 'Restoring Blossom (復甦之花)',
        type: 'Support/Buff/Stacking',
        description: '造成暴擊治療時施加一層「滋養」持續3秒，增加受到的治療量2%，最多疊加3次。',
      },
      {
        name: 'Esoteric Revival (秘傳復活)',
        type: 'Support/Buff/Recover',
        description: '增加濟世扇感知技能「復活」對復活目標的治療量50%。',
      },
      {
        name: 'Mending Loom (補天梭)',
        type: 'Support/Buff/Recover',
        description: '施放魂蔭傘的特殊技能「迴響生長」時，恢復5點露珠，並且每消耗100點露珠額外治療你最大生命值的10%。（當使用魂蔭傘作為 Skillbind - Deluge 武器庫的一部分時）',
      },
    ],

    gearSets: [
      {
        name: 'Ivorybloom Set (象牙花套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '暴擊率 +0.1%',
          fourSet: '滿血時，有額外5%機率造成暴擊治療和傷害，並增加暴擊治療和傷害的效果15%。',
        },
        howToObtain: ['Campaign - Ever-Normal Granary', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Whirlsnow Set (迴雪套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '物理防禦 +1',
          fourSet: '當你單次受到的傷害超過最大生命值的40%或生命值低於20%時，5秒內受到的下一次治療額外恢復最大生命值的25%。此效果每60秒觸發一次。',
        },
        howToObtain: ['Campaign - Ever-Normal Granary', 'Campaign - Furnace of Righteousness', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '水療強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '當你在自己創造的水幻影範圍內時，每秒額外恢復2點露珠。',
      },
      {
        name: '最大生命值增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '最大生命值可以根據防禦力增加。最大加成需要25點防禦。',
      },
      {
        name: '重攻擊治療強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '增加重攻擊的治療量5%，並根據最小物理攻擊力進一步增加，在250最小物理攻擊力時最多增加5%。',
      },
      {
        name: 'Skillbind 屬性增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Skillbind（屬性）攻擊力。同時根據最小 Skillbind 攻擊力增加 Skillbind 傷害加成。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '根據 Skillbind 攻擊力造成額外治療。所有技能根據屬性攻擊力造成傷害，而 Skillbind 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Dewdrop (露珠)',
        description: '濟世扇和魂蔭傘使用的特殊武學資源，上限100點。',
      },
      {
        name: 'Inner Demon - Healing Reduction (心魔 - 治療減少)',
        description: '在完成戰役和神秘Boss的首次通關挑戰前，與它們的戰鬥會受到心魔影響，大幅降低治療效果。',
      },
      {
        name: 'Sense Skill (感知技能)',
        description: '在某些特殊情況下，相應的技能可能會轉變為其他形式。',
      },
      {
        name: 'Mystic Art - DMG Up (秘術 - 傷害提升)',
        description: '當同時裝備魂蔭傘和濟世扇時，秘術傷害增加20%。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 暴擊率',
      '主要治療武器 - 除魂蔭傘外唯一可以治療的武器',
      '可在多人遊戲中復活重傷盟友',
      '強烈偏向多人遊戲支援',
      '傷害輸出嚴重不足',
      '最好在戰鬥後方使用，提供治療',
      '兼具爆發（無盡雲）和持續治療（驟雨癒合）',
      '涵蓋單體和群體恢復',
      '提供全隊傷害增益',
      '與魂蔭傘共享 Skillbind - Deluge 路徑',
      '使用露珠資源系統（最大100點）',
      '水幻影治療可通過「皇家療法」心法增強',
    ],
  },

  {
    id: 'inkwell-fan',
    name: '墨池扇',
    type: 'Fan',
    path: 'Skillbind - Jade',
    image: require('../../../../assets/martial_art_weapons/inkwell_fan.png'),
    description: '扇子的攻擊型替代品，與濟世扇完全不同。這把武器不提供治療，而是專注於從安全的距離鎖定單個目標，且使用者無法被鎖定。提供相當大的機動性和群體控制能力。',
    playstyle: '遠程輸出，具備持續傷害、控制和空中連擊',

    howToGet: {
      method: 'Skill Theft',
      location: '清河區域北部的墨池扇聖地',
      details: '需要龍鑰。穿過聖地，收集6個寶箱，最後對大師進行偷師。',
    },

    stats: {
      strengths: ['DPS', 'Control', 'Mobility'],
      weaknesses: ['Difficulty', 'Survivability', 'Support'],
    },

    skills: [
      {
        name: 'Jadewind Shield (玉風盾)',
        type: 'Martial Art',
        description: '用扇子擊退附近的目標，製造一個風之屏障，阻擋所有非Boss單位和敵人投射物8秒，同時向後跳躍保持距離。使用此技能可躲避來襲攻擊並獲得「強化彈道」，最多疊加2次。',
        recovery: '15.0s',
        key: 'Q',
      },
      {
        name: "Peak's Springless Silence (峰之絕寂)",
        type: 'Special',
        description: '向前衝刺並將目標擊飛。施加短暫定身。擊中人形敵人使其進入擊飛狀態。擊中非玩家敵人施加「殘骨（Lingering Bone）」標記。擊中已處於擊飛狀態或帶有你「殘骨」標記的敵人將獲得「御風」效果。在原位置製造一個水幻影；5秒內再次施放可閃回幻影位置。',
        recovery: '12.0s',
        key: '~',
      },
      {
        name: 'Fan - Light Attack (扇 - 輕攻擊)',
        type: 'Light Attack',
        description: '使用扇子進行最多四次的遠程輕攻擊。',
        recovery: '0.2s',
        key: 'Left Click',
      },
      {
        name: 'Forsaken Fame (棄名)',
        type: 'Charged',
        description: '短暫蓄力後，向前揮舞釋放旋風，造成中等傷害。擊中人形敵人使其進入擊飛狀態。擊中非玩家敵人施加「殘骨」標記。',
        key: 'Hold Left Click',
      },
      {
        name: 'Fan - Heavy Attack (扇 - 重攻擊)',
        type: 'Heavy Attack',
        description: '進行最多三段的重攻擊。當目標處於擊飛狀態或帶有你的「殘骨」標記時，你可以感知以觸發感知技能。',
        recovery: '0.2s',
        key: 'R',
      },
      {
        name: 'Moon Shatter Spring (碎月泉)',
        type: 'Heavy Attack',
        description: '對處於擊飛狀態或帶有你「殘骨」標記的敵人進行空中重攻擊，躍入空中並揮舞扇子進行三連擊。在「御風」效果下，進行強化的五連擊造成高額傷害，並在非決鬥玩法中獲得「堅韌」。使用後冷卻6秒。',
        key: 'Press R (while targeting Airborne enemy)',
      },
      {
        name: 'Fan - Conversion (扇 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至扇子並斬擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Blossom Barrage (花雨彈幕)',
        type: 'Attack/Martial Arts/Damage Boost',
        description: '春華傘（Vernal Umbrella）的武學技能「春之悲（Spring Sorrow）」最多可保持2層。擊中目標施加連擊效果：使目標受到來自施法者彈道技能（Ballistic Skills）的傷害增加10%，持續8秒。（推薦在將春華傘作為 Skillbind - Jade 武器庫的一部分時使用）',
      },
      {
        name: 'Flying Gourds (飛葫)',
        type: 'Martial Arts/Support',
        description: '為墨池扇的「峰之絕寂」提供2次充能，但冷卻時間增加3秒。',
      },
      {
        name: 'Thunderous Bloom (雷鳴綻放)',
        type: 'Damage Boost/Buff',
        description: '當你在3秒內移動超過15米時，獲得「春雷」：12秒內的接下來3次重攻擊或空中重攻擊獲得15%傷害加成。此效果每15秒可觸發一次。',
      },
      {
        name: 'Star Reacher (摘星者)',
        type: 'Attack/Pursuit/Buff',
        description: '將敵人擊飛後，獲得10%物理攻擊加成，持續8秒。',
      },
    ],

    gearSets: [
      {
        name: 'Veil of the Willow Set (柳簾套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '精準率 +0.1%',
          fourSet: '在輕攻擊/空中重攻擊後，傷害增加12%，持續10秒。在重攻擊/空中重攻擊/輕攻擊/蓄力攻擊後，傷害增加12%。',
        },
        howToObtain: ['Campaign - Heavenfall', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Beyond the Chill Set (凌寒套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大生命值 +40',
          fourSet: '進入戰鬥後，若10秒內未受到傷害，獲得「凌寒」：減少下一次受到的傷害以及隨後2秒內受到的所有傷害40%。「凌寒」在離開戰鬥後移除。',
        },
        howToObtain: ['Campaign - Heavenfall', 'Campaign - Furnace of Righteousness', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '低氣追擊強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '增加「碎月泉」對低氣（Qi）目標的暴擊率。',
      },
      {
        name: '物理攻擊力增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '敏捷（Agility）可以增加最小物理攻擊力。',
      },
      {
        name: '空中追擊強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '增加「碎月泉」的暴擊傷害。',
      },
      {
        name: 'Skillbind 屬性增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Skillbind（屬性）攻擊力。同時根據最小 Skillbind 攻擊力增加 Skillbind 傷害加成。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Skillbind 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Launch (擊飛)',
        description: '使用特殊技能將目標擊飛至空中，使其更容易受到高額傷害。',
      },
      {
        name: 'Riding the Wind (御風)',
        description: '墨池扇的獨特效果。在此期間使用的下一次追擊技能將被強化。此效果持續2秒。',
      },
      {
        name: 'Sense Skill (感知技能)',
        description: '在某些特殊情況下，相應的技能可能會轉變為其他形式。',
      },
      {
        name: 'Enhanced Ballistics (強化彈道)',
        description: '增加投射物技能傷害20%。',
      },
      {
        name: 'Lingering Bone (殘骨)',
        description: '施加在非玩家敵人身上的標記，可進行空中連擊。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 暴擊率',
      '適合不喜歡近戰武器風險的玩家',
      '擅長持續遠程輸出和群體控制',
      '需要龍鑰才能進入聖地',
    ],
  },

  {
    id: 'mortal-rope-dart',
    name: '凡塵繩鏢',
    type: 'Rope Dart',
    path: 'Bamboocut - Wind',
    image: require('../../../../assets/martial_art_weapons/mortal_rope_dart.png'),
    description: '繩鏢提供遠程和近戰打擊的混合體驗。這種獨特的混合武器讓玩家在應對戰鬥時有更多的多樣性。玩家可以通過類似鞭子的橫掃攻擊進行遠程打擊，使敵人失去平衡並連接後續連擊。',
    playstyle: '混合遠程/近戰，戰鬥流暢，獎勵時機把握和站位，極佳的群體管理能力',

    howToGet: {
      method: 'Skill Theft',
      location: '開封區域的武館（Martial Hall）',
      details: '需要加入九凡門（Nine Mortal Ways）。完成涉及偽裝系統的複雜任務線：與長老對話，與無言對話，獲得玉囊，解鎖偽裝，偽裝成糊塗蛋，從廚房獲得核心弟子令牌，與田長老對話，使用偷師學習武學。',
    },

    stats: {
      strengths: ['DPS', 'Control', 'Mobility'],
      weaknesses: ['Support', 'Survivability', 'Difficulty'],
    },

    skills: [
      {
        name: 'Bladebound Thread (刃縛絲)',
        type: 'Martial Art',
        description: '向前投擲繩鏢。如果擊中Boss，你將被拉向目標；否則，你將把目標和繩鏢拉回你身邊。在2.5秒內再次按下，釋放連環踢將目標擊倒。被擊中的目標獲得「復仇標記（Vendetta Token）」。當老鼠攻擊帶有復仇標記的目標時，造成50%額外傷害並恢復「感恩標記（Token of Gratitude）」。',
        recovery: '8.0s',
        key: 'Q',
      },
      {
        name: 'Rodent Rampage (鼠疫狂暴)',
        type: 'Special',
        description: '每消耗一個感恩標記將召喚一隻老鼠進行協同攻擊。當你施放輕攻擊時，老鼠會從地下鑽出攻擊。此效果持續10秒，切換武器時效果仍然存在。',
        recovery: '0.5s',
        key: '~',
      },
      {
        name: 'Rope Dart - Light Attack (繩鏢 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞繩鏢進行最多四次的連續攻擊。',
        recovery: '0.3s',
        key: 'Left Click',
      },
      {
        name: 'Coiled Dragon (盤龍)',
        type: 'Light Attack',
        description: '在蓄力姿態下使用時，用力投擲繩鏢將擊中的敵人擊倒。',
        recovery: '0.5s',
        key: 'Left Click while holding R',
      },
      {
        name: "Rodent's Resilience (鼠之韌性)",
        type: 'Charged',
        description: '蓄力消耗耐力並向前釋放劍氣。被擊中的目標將被長時間控制。劍氣傷害每次擊中減少20%，最低至50%。更高的蓄力等級增加傷害和範圍。',
        recovery: '1.0s',
        key: 'Hold R',
      },
      {
        name: "Rodent's Resilience (Pull) (鼠之韌性 - 拉扯)",
        type: 'Charged',
        description: '在蓄力姿態下使用，投擲繩鏢將遠處的敵人拉向你。',
        recovery: '0.3s',
        key: 'Press R',
      },
      {
        name: 'Rope Dart - Conversion (繩鏢 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至繩鏢並攻擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Echoes of Oblivion (遺忘迴響)',
        type: 'Pursuit/Martial Arts/Debuff',
        description: '煉獄雙刃（Infernal Twinblades）輕攻擊施加「罪（Sin）」。炎鞭（Flamelash）狀態輕攻擊施加「業（Karma）」。煉獄雙刃輕攻擊對帶有這些減益的目標無視部分物理防禦或 Bamboocut 抗性。（當使用煉獄雙刃作為 Bamboocut - Wind 武器庫的一部分時）',
      },
      {
        name: 'Vendetta (復仇)',
        type: 'Martial Arts/Buff/Recover',
        description: '引導之刃（Guided Blade）：延長復仇標記的持續時間並退還感恩標記。',
      },
      {
        name: 'Riptide Reflex (激流反射)',
        type: 'Control/Buff',
        description: '用控制技能擊中敵人減少當前武學技能的冷卻時間。每10秒可觸發一次。',
      },
      {
        name: 'Breaking Point (臨界點)',
        type: 'Pursuit/Buff/Stacking',
        description: '對力竭（Exhausted）的敵人造成暴擊時施加一層「瓦解（Disintegration）」持續3秒，最多疊加3次。每層提供額外物理穿透並增加暴擊傷害加成。',
      },
    ],

    gearSets: [
      {
        name: 'Swallowcall Set (燕語套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最小物理攻擊增加',
          fourSet: '輕攻擊對氣（Qi）低於40%的目標造成15%額外傷害，對力竭目標造成5%額外傷害。',
        },
        howToObtain: ['Campaign - Blissful Retreat', 'Campaign - Jinning Pool', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Calmwaters Set (靜水套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '物理防禦增加',
          fourSet: '完美閃避敵人攻擊有50%機率恢復3%最大生命值和10點耐力。',
        },
        howToObtain: ['Campaign - Blissful Retreat', 'Campaign - Jinning Pool', 'Campaign - Halo Peak', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '暴擊率增加',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '敏捷屬性可以增加暴擊率。',
      },
      {
        name: '老鼠傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '增加老鼠的物理傷害。',
      },
      {
        name: 'Bamboocut 增加',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '增加 Bamboocut 攻擊力。同時根據最小 Bamboocut 攻擊力增加 Bamboocut 傷害。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Bamboocut 傷害獲得進一步提升。',
      },
      {
        name: '蝕骨強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '武學技能「引導之刃」和變體連擊「盤龍」對敵人施加「蝕骨（Bone Corrosion）」持續5秒。',
      },
    ],

    effects: [
      {
        name: 'Token of Gratitude (感恩標記)',
        description: '繩鏢武學「凡塵繩鏢」中使用的戰鬥資源。某些技能需要消耗感恩標記才能激活。',
      },
      {
        name: 'Vendetta Token (復仇標記)',
        description: '武學「凡塵繩鏢」的特殊標記。',
      },
      {
        name: 'Charging Stance (蓄力姿態)',
        description: '特殊繩鏢姿態：在此姿態下某些技能會發生變化。',
      },
      {
        name: 'Endurance (耐力)',
        description: '受擊時免疫除群體控制外的所有效果。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 暴擊率',
      '需要加入九凡門',
      '包含偽裝系統的複雜任務線',
      '適合尋求管理群體和隨時切換戰鬥策略工具的玩家',
      '戰鬥流暢且動態，獎勵時機和站位而非蠻力',
    ],
  },

  {
    id: 'nameless-spear',
    name: '無名槍',
    type: 'Spear',
    path: 'Bellstrike - Splendor',
    image: require('../../../../assets/martial_art_weapons/nameless_spear.png'),
    description: '你在《燕雲十六聲（Where Winds Meet）》中解鎖的第一把武器，與無名劍相輔相成。這把多功能的長槍在你學習遊戲機制的同時提供強大的範圍傷害和耐力恢復。它的特點是適合新手的直觀攻擊模式，擁有控制群體和造成區域傷害的技能。',
    playstyle: '適合新手，具備耐力恢復和群體控制的範圍戰鬥',

    howToGet: {
      method: 'Story Progression',
      details: '遊戲開始時與無名劍一起自動獲得。無特殊要求。',
    },

    stats: {
      strengths: ['AoE Damage', 'Endurance Recovery', 'Beginner-Friendly'],
      weaknesses: ['Single Target DPS', 'Advanced Mechanics'],
    },

    skills: [
      {
        name: "Qiankun's Lock (乾坤鎖)",
        type: 'Martial Art',
        description: '用長槍向前突刺，對路徑上的敵人造成傷害並使其定身。使用後，10秒內恢復15點耐力。',
        recovery: '10.0s',
        key: 'Q',
      },
      {
        name: 'Legion Crusher (破軍)',
        type: 'Special',
        description: '用長槍猛擊前方地面，對小範圍內的敵人造成傷害。使用此技能獲得「無雙」效果，持續3秒。',
        recovery: '8.0s',
        key: '~',
      },
      {
        name: 'Storm Dance (風暴之舞)',
        type: 'Charged',
        description: '蓄力並旋轉周圍的長槍，對附近的敵人多次造成傷害。',
        key: 'Hold R',
      },
      {
        name: 'Spear - Light Attack (槍 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞長槍進行最多四次的輕攻擊。',
        recovery: '0.2s',
        key: 'Left Click',
      },
      {
        name: 'Spear - Heavy Attack (槍 - 重攻擊)',
        type: 'Heavy Attack',
        description: '揮舞長槍進行最多三次的重攻擊。',
        recovery: '0.2s',
        key: 'R',
      },
      {
        name: 'Spear - Conversion (槍 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至長槍並進行橫掃攻擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Sword Morph (劍變)',
        type: 'Attack/Damage Boost',
        description: '使用特定技能後短時間內增加物理攻擊。',
      },
      {
        name: "Mountain's Might (山之威)",
        type: 'Defense/Buff',
        description: '激活時減少受到的傷害並增加物理防禦。',
      },
      {
        name: 'Wildfire Spark (野火星)',
        type: 'Attack/DoT',
        description: '為攻擊增加火屬性持續傷害，對敵人造成持續傷害。',
      },
      {
        name: 'Battle Anthem (戰歌)',
        type: 'Support/Buff',
        description: '為附近的盟友提供增益，提高他們的戰鬥效率。',
      },
    ],

    gearSets: [
      {
        name: 'Jadeware Set (玉器套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '增加物理攻擊',
          fourSet: '技能傷害加成和增加耐力恢復率',
        },
        howToObtain: ['Early Campaign Quests', 'Starter Dungeons'],
      },
      {
        name: 'Formbend Set (易形套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '增加最大生命值',
          fourSet: '減少技能冷卻時間並提供傷害減免',
        },
        howToObtain: ['Early Campaign Quests', 'Starter Dungeons'],
      },
    ],

    talents: [
      {
        name: '親和率升級',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '增加親和率，提高造成額外傷害的機率。',
      },
      {
        name: '物理攻擊力增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '力量（Power）可以增加最大物理攻擊力。',
      },
      {
        name: '耐力恢復強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '提高「乾坤鎖」的耐力恢復率。',
      },
      {
        name: 'Bellstrike 增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Bellstrike（屬性）攻擊力和穿透。',
      },
      {
        name: '最大耐力增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加最大耐力池以進行長時間戰鬥。',
      },
    ],

    effects: [
      {
        name: 'Immobilize (定身)',
        description: '使目標在短時間內無法移動。',
      },
      {
        name: 'Unrivaled (無雙)',
        description: '免疫控制效果並增加傷害輸出。',
      },
    ],

    notes: [
      '新玩家的完美初始武器',
      '作為第一對武器與無名劍相輔相成',
      '專注於範圍傷害和群體控制',
      '「乾坤鎖」提供寶貴的耐力恢復',
      '簡單的機制使其成為學習戰鬥基礎的理想選擇',
    ],
  },

  {
    id: 'nameless-sword',
    name: '無名劍',
    type: 'Sword',
    path: 'Bellstrike - Splendor',
    image: require('../../../../assets/martial_art_weapons/nameless_sword.png'),
    description: '你在《燕雲十六聲》中解鎖的第一把武器。適合喜歡專注於單個目標並快速清除他們，而不是造成範圍傷害的玩家。一把專注於輸出的武器，允許對目標進行多次打擊，非常適合持續觸發暴擊。提供極佳的機動性，在對抗大量敵人時非常必要。',
    playstyle: '高機動性單體輸出，專注於暴擊和爆發傷害潛力',

    howToGet: {
      method: 'Story Progression',
      details: '遊戲開始時與無名槍一起自動獲得。無特殊要求。',
    },

    stats: {
      strengths: ['DPS', 'Difficulty', 'Mobility'],
      weaknesses: ['Support', 'Control', 'Survivability'],
    },

    skills: [
      {
        name: 'Fearless Lunge (無畏衝鋒)',
        type: 'Martial Art',
        description: '投擲飛劍對擊中的敵人造成輕微傷害，然後向前衝刺跟隨飛劍。在後續動作中，再次按下可釋放最多兩次「審判（Judgment）」，每次造成增加的傷害。在第二次審判攻擊後，獲得持續3秒的氣盾（Qi Shield）。',
        recovery: '12.0s',
        key: 'Q',
      },
      {
        name: 'Shadow Step (影步)',
        type: 'Special',
        description: '消耗耐力向後閃避並釋放劍氣（劍氣傷害每次擊中減少20%，最低至50%）。3秒內再次按下可使用劍衝（Sword Dash）。',
        recovery: '1.0s',
        key: '~',
      },
      {
        name: 'Sword - Light Attack (劍 - 輕攻擊)',
        type: 'Light Attack',
        description: '使用長劍進行最多四次的輕攻擊。',
        recovery: '0.6s',
        key: 'Left Click',
      },
      {
        name: 'Homeless Charge (無歸衝擊)',
        type: 'Charged',
        description: '消耗耐力進行蓄力並向前釋放劍氣（劍氣傷害每次擊中減少20%，最低至50%）。蓄力等級隨時間增加，提升劍氣的傷害和範圍。',
        key: 'Hold R',
      },
      {
        name: 'Sword - Heavy Attack (劍 - 重攻擊)',
        type: 'Heavy Attack',
        description: '使用長劍進行最多三次的重攻擊。',
        recovery: '0.9s',
        key: 'R',
      },
      {
        name: 'Sword - Conversion (劍 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至長劍並斬擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Sword Morph (劍變)',
        type: 'Attack/Martial Arts/Damage Buff',
        description: '當無名劍的蓄力技能「無歸衝擊」在氣盾存在時進行蓄力，會在第二蓄力階段釋放多個額外的劍氣攻擊。你可以消耗額外耐力來增加劍氣傷害；每點耐力增加1%傷害，最高20%。',
      },
      {
        name: "Mountain's Might (山之威)",
        type: 'Support/Martial Arts/Cost Reduction',
        description: '無名槍的武學技能「乾坤鎖」賦予「無盡風（Endless Gale）」效果，使耐力消耗減少提升至20%，持續5秒。僅推薦在將無名槍作為 Bellstrike - Splendor 武器庫的一部分時使用。',
      },
      {
        name: 'Wildfire Spark (野火星)',
        type: 'Support/Recover',
        description: '退還3.5%消耗的耐力。',
      },
      {
        name: 'Battle Anthem (戰歌)',
        type: 'Attack/Damage Boost',
        description: '增加蓄力技能對所有Boss的傷害10%。',
      },
    ],

    gearSets: [
      {
        name: 'Jadeware Set (玉器套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大物理攻擊 +1',
          fourSet: '施放武學技能激活「玉器」效果：親和傷害增加10%，並對處於控制下或氣低於40%的目標造成20%額外親和傷害。持續12秒。此效果每30秒可觸發一次。',
        },
        howToObtain: ['Campaign - Palace of Annals', 'Campaign - Bodhi Sea', 'Sword Trial', 'Group Dungeons', 'Activity Shop'],
      },
      {
        name: 'Formbend Set (易形套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '物理防禦 +1',
          fourSet: '你的氣盾持續時間延長2秒。如果你有超過85%的氣或擁有氣傷害免疫護盾，減少所有受到的生命值傷害20%。',
        },
        howToObtain: ['Campaign - Palace of Annals', 'Campaign - Bodhi Sea', 'Campaign - Halo Peak', 'Sword Trial', 'Group Dungeons', 'Activity Shop'],
      },
    ],

    talents: [
      {
        name: '氣之爭鬥強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '造成的氣傷害增加10%。',
      },
      {
        name: '物理傷害增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '最大物理攻擊力可以根據動量（Momentum）增加。（動量：根據一定比例轉換為角色的親和率和最大物理攻擊力）。',
      },
      {
        name: '劍氣親和強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '根據最大物理攻擊力增加劍氣攻擊對氣低於20%的目標（包括力竭目標）的親和率，在500最大物理攻擊力時最多增加3.5%。',
      },
      {
        name: 'Bellstrike 增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Bellstrike 攻擊（屬性攻擊）19 - 38。根據最大 Bellstrike 攻擊力增加 Bellstrike 穿透。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Bellstrike 攻擊造成50%額外傷害。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 親和率',
      '新玩家的完美初始武器',
      '作為第一對武器與無名槍相輔相成',
      '兩把武器共享相同的發展路徑（Bellstrike - Splendor）',
      '高機動性和單體控制；擅長風箏敵人',
      '結合強大的耐力和蓄力技能釋放爆發傷害',
    ],
  },

  {
    id: 'vernal-umbrella',
    name: '春華傘',
    type: 'Umbrella',
    path: 'Skillbind - Jade',
    image: require('../../../../assets/martial_art_weapons/vemal_umbrella.png'),
    description: '魂蔭傘的攻擊型替代品，功能完全不同。這把武器不提供治療，而是專注於從安全的距離鎖定單個目標，且使用者無法被鎖定。提供相當大的機動性和群體控制，使其成為不喜歡近戰武器風險的玩家的合適選擇。',
    playstyle: '遠程持續輸出，具備控制和空中爆發連擊',

    howToGet: {
      method: 'Quest Reward or Skill Theft',
      location: '開封區域的時光塔（Time Tower）',
      details: '可能來自清河的奇遇任務「五音之謎」獎勵，或在時光塔進行偷師。偷師流程：在塔底與 Wang Ping\'an 對話，爬上去找 Jiang Ting\'er，完成信物線索尋找（斑貓、棋手、八卦婦女、倉庫、二樓寶庫），從倉庫取回荊棘玫瑰髮簪，返回 Jiang Ting\'er 處，對大師進行偷師。',
    },

    stats: {
      strengths: ['DPS', 'Control', 'Mobility'],
      weaknesses: ['Difficulty', 'Survivability', 'Support'],
    },

    skills: [
      {
        name: 'Spring Sorrow (春之悲)',
        type: 'Martial Art',
        description: '短暫蓄力，然後向前發射飛花。擊中時，使非Boss敵人定身3秒。',
        recovery: '15.0s',
        key: 'Q',
      },
      {
        name: 'Unfading Flower (不謝之花)',
        type: 'Special',
        description: '當至少有50點「花綻（Blossom）」時可以使用。將傘拋向空中並拔出隱藏的劍。你可以切換到其他武器或使用隱藏劍的基本技能。激活時，傘在空中跟隨你，並自動向5米內的單個目標發射投射物。如果目標在空中，傘會消耗額外的花綻發射強化投射物並延長目標的滯空時間。每秒消耗10點花綻。如果花綻不足，傘會自動召回。',
        recovery: '0.2s',
        key: '~',
      },
      {
        name: 'Umbrella - Light Attack (傘 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞傘進行最多三次的輕攻擊，造成近至中距離傷害。',
        recovery: '0.1s',
        key: 'Left Click',
      },
      {
        name: 'Spring Away (春逝)',
        type: 'Light Attack',
        description: '蓄力後，打開傘升入空中並快速旋轉，使自己浮空並發射投射物造成中等傷害。用這些投射物擊中目標可以快速積累花綻。',
        key: 'Hold Left Click',
      },
      {
        name: 'Apricot Heaven (杏天)',
        type: 'Charged',
        description: '一段蓄力技能，造成巨大傷害。打開傘飛入空中，對附近的敵人造成一次區域傷害。在空中蓄力時，根據蓄力時間有兩種變體：普通下落區域攻擊和強化區域攻擊。',
        key: 'Hold R',
      },
      {
        name: 'Colorful Phoenix (彩鳳)',
        type: 'Heavy Attack',
        description: '在第一次或第二次重攻擊的恢復期間，輕按輕攻擊鍵觸發連擊技能 - 打開傘並向前衝刺，造成多段傷害。',
        recovery: '0.2s',
        key: 'R while in the air',
      },
      {
        name: 'Umbrella - Heavy Attack (傘 - 重攻擊)',
        type: 'Heavy Attack',
        description: '揮舞傘進行最多四次的重攻擊，造成近至中距離傷害。',
        key: 'R',
      },
      {
        name: 'Umbrella - Conversion (傘 - 切換)',
        type: 'Dual-Weapon',
        description: '切換武器至傘並揮舞，造成傷害。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Blossom Barrage (花雨彈幕)',
        type: 'Attack/Martial Arts/Damage Boost',
        description: '春華傘的武學技能「春之悲」最多可保持2層。擊中目標施加連擊效果：使目標受到來自施法者彈道技能的傷害增加10%，持續8秒。受影響的彈道技能包括：武學技能「春之悲」和特殊技能「不謝之花」。推薦在將春華傘作為 Skillbind - Jade 武器庫的一部分時使用。',
      },
      {
        name: 'Flying Gourds (飛葫)',
        type: 'Martial Arts/Support',
        description: '為墨池扇的「峰之絕寂」提供2次充能，但冷卻時間增加3秒。',
      },
      {
        name: 'Thunderous Bloom (雷鳴綻放)',
        type: 'Damage Boost/Buff',
        description: '當你在3秒內移動超過15米時，獲得「春雷」：12秒內的接下來3次重攻擊或空中重攻擊獲得15%傷害加成。此效果每15秒可觸發一次。',
      },
      {
        name: 'Star Reacher (摘星者)',
        type: 'Attack/Pursuit/Buff',
        description: '將敵人擊飛後，獲得10%物理攻擊加成，持續8秒。',
      },
    ],

    gearSets: [
      {
        name: 'Veil of the Willow Set (柳簾套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '精準率 +0.1%',
          fourSet: '在輕攻擊/空中重攻擊後，傷害增加12%，持續10秒。反之亦然。特別是，在重攻擊/空中重攻擊/輕攻擊/蓄力攻擊後，傷害增加12%。',
        },
        howToObtain: ['Campaign - Heavenfall', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Beyond the Chill Set (凌寒套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大生命值 +40',
          fourSet: '進入戰鬥後，若10秒內未受到傷害，獲得「凌寒」：減少下一次受到的傷害以及隨後2秒內受到的所有傷害40%。「凌寒」在離開戰鬥後移除。',
        },
        howToObtain: ['Campaign - Heavenfall', 'Campaign - Furnace of Righteousness', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '彈道技能強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '所有春華傘彈道技能在傷害定身或浮空敵人時無視部分目標物理抗性。',
      },
      {
        name: '暴擊率增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '敏捷（Agility）可以增加暴擊率。',
      },
      {
        name: '彈道計算強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '增加春華傘彈道技能的暴擊傷害。',
      },
      {
        name: 'Skillbind 屬性增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Skillbind（屬性）攻擊力。同時根據最小 Skillbind 攻擊力增加 Skillbind 傷害加成。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Skillbind 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Airborne (浮空)',
        description: '使用特殊技能將目標擊飛至空中，使其更容易受到高額傷害。',
      },
      {
        name: 'Blossom (花綻)',
        description: '春華傘的獨特武學資源。上限100點。裝備此武學擊中敵人可獲得。使用技能時持續消耗花綻。',
      },
      {
        name: 'Immobilize (定身)',
        description: '目標被禁用；無法移動或使用任何技能。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 暴擊率',
      '魂蔭傘的攻擊型替代品',
      '與墨池扇共享 Skillbind - Jade 路徑',
      '具備持續輸出能力的遠程玩法',
      '安全距離戰鬥 - 使用者不易被鎖定',
      '相當大的機動性和群體控制選項',
      '適合不喜歡近戰武器風險的玩家',
      '涉及偷師線索尋找的複雜任務線',
      '獨特的花綻資源系統 - 最大100點',
      '可在傘自動發射投射物時拔出隱藏劍',
    ],
  },

  {
    id: 'soulshade-umbrella',
    name: '魂蔭傘',
    type: 'Umbrella',
    path: 'Skillbind - Deluge',
    image: require('../../../../assets/martial_art_weapons/soulshade_umbrella.png'),
    description: '傘的輔助型替代品，也是除濟世扇外唯一可以治療單位的武器。這把武器完全是為了提供治療支持，這使其非常適合多人遊戲，但它的傷害嚴重不足，被認為是你需要在戰鬥中退後，只提供治療的武器。',
    playstyle: '具備爆發和持續治療、單體和群體恢復、復活能力以及團隊傷害增益的輔助治療者',

    howToGet: {
      method: 'Skill Theft',
      location: '開封區域東部的魂蔭傘驛站',
      details: '需要完成第一章：天無涯（Heaven Has No Pier）以解鎖開封區域。潛入驛站：進入左邊的房子，暗殺守衛，清除弟子，掠奪寶箱，通過棺材梯子下到藏身處，清除懸棺區域，爬到目標區域，對大師進行偷師。',
    },

    stats: {
      strengths: ['Support', 'Survivability', 'Difficulty'],
      weaknesses: ['Mobility', 'DPS', 'Control'],
    },

    skills: [
      {
        name: 'Floating Grace (浮生恩典)',
        type: 'Martial Art',
        description: '送出傘，賦予自己和附近的盟友8秒內15%的傷害增加，並治療一次。',
        recovery: '60.0s',
        key: 'Q',
      },
      {
        name: 'Echoes of a Thousand Plants (千草迴響)',
        type: 'Special',
        description: '將傘拋向空中並從手柄中拔出隱藏的劍。你可以切換到其他武器或使用隱藏劍的基本技能。增加治療量15%並隨時間生成露珠（最多60）。傘在空中懸停並跟隨你，自動治療附近生命值百分比最低的盟友（包括你自己）。治療自己時效果增加50%。在揮舞隱藏劍時使用特殊技能可提前召回傘。',
        recovery: '60.0s',
        key: '~',
      },
      {
        name: 'Umbrella - Light Attack (傘 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞傘進行最多三次的輕攻擊，造成近至中距離傷害。',
        recovery: '0.1s',
        key: 'Left Click',
      },
      {
        name: 'Umbrella - Heavy Attack (傘 - 重攻擊)',
        type: 'Heavy Attack',
        description: '向前送出傘進行旋轉攻擊。',
        recovery: '1.6s',
        key: 'R',
      },
      {
        name: 'Pale Petal (蒼白花瓣)',
        type: 'Charged',
        description: '向前送出傘進行旋轉攻擊。如果目標已經力竭（Exhausted），攻擊將延長力竭狀態的持續時間。按住技能可增加傷害和效果持續時間。',
        key: 'Hold R',
      },
      {
        name: 'Umbrella - Conversion (傘 - 切換)',
        type: 'Dual-Weapon',
        description: '切換武器至傘並揮舞，造成傷害。增加治療量5%並隨時間生成露珠（最多30）。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Royal Remedy (皇家療法)',
        type: 'Support/Martial Arts/Recover',
        description: '增加濟世扇武學技能「驟雨癒合」所創造的水幻影的治療效果10%。如果你在範圍內，每次受到持續治療時獲得1點露珠。',
      },
      {
        name: 'Restoring Blossom (復甦之花)',
        type: 'Support/Buff/Stacking',
        description: '造成暴擊治療時施加一層「滋養」持續3秒，增加受到的治療量2%，最多疊加3次。',
      },
      {
        name: 'Esoteric Revival (秘傳復活)',
        type: 'Support/Buff/Recover',
        description: '增加濟世扇感知技能「復活」對復活目標的治療量50%。',
      },
      {
        name: 'Mending Loom (補天梭)',
        type: 'Support/Buff/Recover',
        description: '施放魂蔭傘的特殊技能「迴響生長」時，恢復5點露珠，並且每消耗100點露珠額外治療你最大生命值的10%。（當使用魂蔭傘作為 Skillbind - Deluge 武器庫的一部分時）',
      },
    ],

    gearSets: [
      {
        name: 'Ivorybloom Set (象牙花套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '暴擊率 +0.1%',
          fourSet: '滿血時，有額外5%機率造成暴擊治療和傷害，並增加暴擊治療和傷害的效果15%。',
        },
        howToObtain: ['Campaign - Ever-Normal Granary', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Whirlsnow Set (迴雪套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '物理防禦 +1',
          fourSet: '當你單次受到的傷害超過最大生命值的40%或生命值低於20%時，5秒內受到的下一次治療額外恢復最大生命值的25%。此效果每60秒觸發一次。',
        },
        howToObtain: ['Campaign - Ever-Normal Granary', 'Campaign - Furnace of Righteousness', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '增益強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '武學技能允許你和盟友對力竭的敵人造成額外傷害。當同時裝備魂蔭傘和濟世扇時，增加秘術的傷害。',
      },
      {
        name: '物理攻擊力增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '敏捷（Agility）可以增加最小物理攻擊力。',
      },
      {
        name: '暴擊治療強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '增加特殊技能的暴擊治療效果。',
      },
      {
        name: 'Skillbind 屬性增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Skillbind（屬性）攻擊力。同時根據最小 Skillbind 攻擊力增加 Skillbind 穿透。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '根據 Skillbind 攻擊力造成額外治療。所有技能根據屬性攻擊力造成傷害，而 Skillbind 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Dewdrop (露珠)',
        description: '濟世扇和魂蔭傘使用的特殊武學資源，上限100點。',
      },
      {
        name: 'Inner Demon - Healing Reduction (心魔 - 治療減少)',
        description: '在完成戰役和神秘Boss的首次通關挑戰前，與它們的戰鬥會受到心魔影響，大幅降低治療效果。',
      },
      {
        name: 'Sense Skill (感知技能)',
        description: '在某些特殊情況下，相應的技能可能會轉變為其他形式。',
      },
      {
        name: 'Mystic Art - DMG Up (秘術 - 傷害提升)',
        description: '當同時裝備魂蔭傘和濟世扇時，秘術傷害增加20%。',
      },
    ],

    notes: [
      '裝備調整優先級：最小物理攻擊 > 最大物理攻擊 > 暴擊率',
      '輔助治療武器 - 除濟世扇外唯一可以治療的武器',
      '強烈偏向多人遊戲支援',
      '傷害輸出嚴重不足',
      '最好在戰鬥後方使用，提供治療',
      '兼具爆發和持續治療',
      '涵蓋單體和群體恢復',
      '復活能力允許被擊敗的盟友重返戰鬥',
      '提供全隊傷害增益（15%傷害增加，持續8秒）',
      '與濟世扇共享 Skillbind - Deluge 路徑',
      '使用露珠資源系統（最大100點）',
      '可在傘自動治療最低血量盟友時拔出隱藏劍',
      '增加治療量15%並隨時間生成露珠',
      '與濟世扇協同 - 一起裝備時增加秘術傷害20%',
      '需要完成第一章以解鎖開封區域',
    ],
  },

  {
    id: 'stormbreaker-spear',
    name: '破風槍',
    type: 'Spear',
    path: 'Stonesplit - Might',
    image: require('../../../../assets/martial_art_weapons/stormbreaker_spear.png'),
    description: '這把武器專為喜歡承受傷害的玩家設計。破風槍為使用者提供數個護盾和減傷資源，增加其生存能力。且機動性降低，使其玩法易於理解。雖然造成傷害不是它的特長，但如果使用得當，這把武器也能造成大量傷害。',
    playstyle: '擁有護盾、減傷、抗打斷和嘲諷能力的坦克 - 作為團隊傷害吸收者，擁有廣泛的AoE蓄力技能',

    howToGet: {
      method: 'Story Progression',
      details: '在完成最初的任務之一併拜訪王將軍後，你將在郵件中收到破風槍。檢查收件箱領取「怒潮將軍的禮物」（主菜單 > 右上角信件）。',
    },

    stats: {
      strengths: ['Survivability', 'Control', 'DPS'],
      weaknesses: ['Mobility', 'Support', 'Difficulty'],
    },

    skills: [
      {
        name: 'Storm Roar (風暴咆哮)',
        type: 'Martial Art',
        description: '揮動長槍釋放聲波，嘲諷（Taunt）附近的敵人並使他們感電（Shocked）8秒，同時獲得20%傷害減免持續16秒（擊中多人戰役Boss時為40%）。技能期間獲得「堅韌」。',
        recovery: '20.0s',
        key: 'Q',
      },
      {
        name: 'Thunder Shock (雷擊)',
        type: 'Special',
        description: '消耗2格戰意（Fighting Spirit）架起長槍並向前發動旋轉踢，隨後翻轉猛擊，將目標擊倒並施加「易傷（Vulnerability）」8秒。技能期間獲得「堅韌」。',
        recovery: '0.2s',
        key: '~',
      },
      {
        name: 'Spear - Light Attack (槍 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞長槍進行最多四次的輕攻擊。',
        recovery: '0.2s',
        key: 'Left Click',
      },
      {
        name: 'Fury Spear (狂怒之槍)',
        type: 'Charged',
        description: '蓄力後，發動一連串突刺，造成高額傷害。在最後一擊獲得「鼓點（Drumbeat）」。技能期間獲得「堅韌」。',
        recovery: '0.2s',
        key: 'Hold R',
      },
      {
        name: 'Spear - Heavy Attack (槍 - 重攻擊)',
        type: 'Heavy Attack',
        description: '揮舞長槍進行最多三次的重攻擊。',
        recovery: '0.2s',
        key: 'R',
      },
      {
        name: 'Spear - Conversion (槍 - 切換)',
        type: 'Dual-Weapon',
        description: '切換至長槍並進行橫掃攻擊。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Exquisite Scenery (絕景)',
        type: 'Defense/Martial Arts/Counter',
        description: '成功使用雷嘯刀（Thundercry Blade）防禦會激活其特殊反擊。按下感知技能或重攻擊可無需蓄力釋放第一階段蓄力重攻擊。此效果每10秒只能觸發一次。用變體連擊擊中目標恢復1格戰意（每次施放最多恢復1格）。',
      },
      {
        name: 'Trapped Beast (困獸)',
        type: 'Defense/Buff/Recover',
        description: '在生命值低於30%時受到傷害觸發「困獸鬥（Cornered Beast）」，生成一個吸收最多30%最大生命值的護盾。此效果持續4秒，每300秒可觸發一次。',
      },
      {
        name: 'Art of Resistance (抵抗之術)',
        type: 'Defense/Buff',
        description: '增加你自身生命值護盾的持續時間及其源技能的獎勵效果4秒。',
      },
      {
        name: 'Rock Solid (堅如磐石)',
        type: 'Defense/Martial Arts/DMG Reduction',
        description: '嘲諷Boss單位後，增加破風槍「風暴咆哮」的傷害減免20%，嘲諷非Boss單位後增加5%，總計最多20%。在傷害減免激活期間，減少所有造成的傷害10%。推薦在將破風槍作為 Stonesplit - Might 武器庫的一部分時使用。',
      },
    ],

    gearSets: [
      {
        name: 'Rainwhisper Set (雨語套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大生命值 +40',
          fourSet: '增加所有暴擊傷害和治療10%，當你有生命值護盾時進一步增加15%。',
        },
        howToObtain: ['Campaign - Unbound Cavern', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Moonflare Set (月芒套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大生命值 +40',
          fourSet: '在防禦時攻擊，有30%機率生成一個吸收最多10%最大生命值的護盾，持續20秒。如果護盾已存在，額外恢復2%生命值。此效果每60秒只能觸發一次。',
        },
        howToObtain: ['Campaign - Unbound Cavern', 'Campaign - Furnace of Righteousness', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '最大戰意增加',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '增加最大戰意1格。',
      },
      {
        name: '精準率增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '根據體質（Body）增加精準率，上限為14點體質。',
      },
      {
        name: '受擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '擊中蓄力技能及其變體連擊後短暫減少受到的物理傷害。',
      },
      {
        name: 'Stonesplit 增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Stonesplit（屬性）攻擊力。同時根據最大 Stonesplit 攻擊力增加 Stonesplit 穿透。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Stonesplit 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Fighting Spirit (戰意)',
        description: '雷嘯刀和破風槍的獨特武學資源。通過格擋或隨時間自然恢復獲得，使用特定技能時消耗。',
      },
      {
        name: 'Drumbeat (鼓點)',
        description: '增加蓄力技能傷害15%，持續6秒。破風槍專屬。可觸發雷嘯刀武學技能的感知技能。',
      },
      {
        name: 'Taunt (嘲諷)',
        description: '敵人將優先攻擊被嘲諷的目標。',
      },
      {
        name: 'Shocked (感電)',
        description: '造成的傷害減少20%。',
      },
      {
        name: 'Vulnerable (易傷)',
        description: '受到的生命值和氣傷害增加8%。如果傷害來源使用雷嘯刀或破風槍，額外增加8%。',
      },
      {
        name: 'Fortitude (堅韌)',
        description: '受擊時免疫除群體控制外的所有效果。',
      },
    ],

    notes: [
      '裝備調整優先級：最大生命值',
      '專為吸收傷害設計',
      '多種護盾和減傷資源',
      '強大的生存能力 - 可作為團隊傷害吸收者',
      '控制敵人仇恨的嘲諷能力',
      '配備抗打斷（堅韌）',
      '可通過蓄力技能聚集敵人進行大範圍AoE傷害',
      '機動性降低使玩法易於理解',
      '雖然傷害不是特長，但適當使用可造成可觀傷害',
      '與雷嘯刀共享 Stonesplit - Might 路徑和戰意資源',
      '風暴咆哮提供20%傷害減免（對多人戰役Boss為40%）',
      '專屬鼓點效果增加蓄力技能傷害15%',
      '遊戲早期通過王將軍的郵件獲得',
    ],
  },

  {
    id: 'thundercry-blade',
    name: '雷嘯刀',
    type: 'Mo Blade',
    path: 'Stonesplit - Might',
    image: require('../../../../assets/martial_art_weapons/thundercry_blade.png'),
    description: '這把武器專為喜歡承受傷害的玩家設計。雷嘯刀為使用者提供數個護盾以增加生存能力。且機動性降低，使其玩法易於理解。雖然造成傷害不是它的特長，但如果使用得當，這把武器也能造成大量傷害。',
    playstyle: '擁有護盾、減傷、抗打斷能力的坦克 - 作為團隊傷害吸收者，擁有廣泛的蓄力技能進行AoE傷害',

    howToGet: {
      method: 'Quest Reward, Skill Theft, or Join Sect',
      location: '開封區域的天井武館（Well of Heaven Martial Camp）',
      details: '可能來自清河的奇遇任務「五音之謎」獎勵，或在開封區域天井武館進行偷師，或加入天井門派。',
    },

    stats: {
      strengths: ['Survivability', 'Control', 'DPS'],
      weaknesses: ['Mobility', 'Support', 'Difficulty'],
    },

    skills: [
      {
        name: "Predator's Shield (掠食者之盾)",
        type: 'Martial Art',
        description: '賦予相當於你最大生命值25%的護盾，持續8秒，並增加2格戰意。如果你有鼓點，它將被移除以觸發你的感知技能。',
        recovery: '12.0s',
        key: 'Q',
      },
      {
        name: 'Shifting Heaven (移天)',
        type: 'Martial Art',
        description: '賦予相當於你最大生命值25%的護盾，持續8秒。同時獲得2格戰意和「突破（Breakthrough）」。 （感知技能 - 在有鼓點時激活）',
        recovery: '12.0s',
        key: 'Q (with Drumbeat)',
      },
      {
        name: 'Sunrush Gale (逐日烈風)',
        type: 'Special',
        description: '消耗2格戰意將陌刀刺入地面，產生漩渦拉近附近的敵人（對Boss無效）。然後旋轉陌刀釋放強力的橫掃攻擊並獲得專注。技能期間獲得「堅韌」。',
        recovery: '7.0s',
        key: '~',
      },
      {
        name: 'Mo Blade - Light Attack (陌刀 - 輕攻擊)',
        type: 'Light Attack',
        description: '揮舞陌刀進行最多三次的輕攻擊，造成輕微傷害。',
        recovery: '0.2s',
        key: 'Left Click',
      },
      {
        name: 'Galecloud Cleave (風雲斬)',
        type: 'Charged',
        description: '輕蓄力技能。蓄力後，旋轉陌刀釋放雙重橫掃打擊，在大範圍內造成中等傷害。蓄力時可以移動。蓄力有三個階段，傷害隨階段增加。在第3階段釋放消耗1格戰意（如果可用）以提升20%傷害並解鎖輕攻擊變體連擊技能。技能期間獲得「堅韌」。',
        recovery: '0.2s',
        key: 'Hold Left Click',
      },
      {
        name: 'Light Attack Varied Combo (輕攻擊變體連擊)',
        type: 'Light Attack',
        description: '消耗1格戰意反向揮舞陌刀，發動橫掃攻擊，在大範圍內造成中等傷害。技能期間獲得「堅韌」。 （在風雲斬第3階段後解鎖）',
        recovery: '1.0s',
        key: 'Left Click (after Galecloud Cleave)',
      },
      {
        name: 'Mo Blade - Heavy Attack (陌刀 - 重攻擊)',
        type: 'Heavy Attack',
        description: '使用陌刀進行最多三次的重攻擊，每次造成低傷害。',
        recovery: '0.2s',
        key: 'R',
      },
      {
        name: 'Avalanche (雪崩)',
        type: 'Charged',
        description: '可蓄力重攻擊。向上斬擊，然後猛擊地面，在小範圍內造成高額傷害。蓄力時可以移動。技能有三個威力階段；傷害隨階段增加。在第3階段，消耗1格戰意（如果可用）以提升20%傷害並解鎖重攻擊連擊。技能期間獲得「堅韌」。',
        recovery: '0.2s',
        key: 'Hold R',
      },
      {
        name: 'Varied Combo (變體連擊)',
        type: 'Heavy Attack',
        description: '消耗1格戰意躍入空中並翻轉，猛擊地面在小範圍內造成高額傷害，將目標擊倒。技能期間獲得「堅韌」。 （在雪崩第3階段後解鎖）',
        recovery: '1.0s',
        key: 'R (after Avalanche)',
      },
      {
        name: 'Mo Blade - Conversion (陌刀 - 切換)',
        type: 'Dual-Weapon',
        description: '切換武器至陌刀並揮舞，造成輕微傷害。',
        recovery: '3.0s',
        key: 'TAB',
      },
    ],

    internalArts: [
      {
        name: 'Exquisite Scenery (絕景)',
        type: 'Defense/Martial Arts/Counter',
        description: '成功使用雷嘯刀防禦會激活其特殊反擊。按下感知技能或重攻擊可無需蓄力釋放第一階段蓄力重攻擊。此效果每10秒只能觸發一次。用變體連擊擊中目標恢復1格戰意（每次施放最多恢復1格）。',
      },
      {
        name: 'Trapped Beast (困獸)',
        type: 'Defense/Buff/Recover',
        description: '在生命值低於30%時受到傷害觸發「困獸鬥」，生成一個吸收最多30%最大生命值的護盾。此效果持續4秒，每300秒可觸發一次。',
      },
      {
        name: 'Art of Resistance (抵抗之術)',
        type: 'Defense/Buff',
        description: '增加你自身生命值護盾的持續時間及其源技能的獎勵效果4秒。',
      },
      {
        name: 'Rock Solid (堅如磐石)',
        type: 'Defense/Martial Arts/DMG Reduction',
        description: '嘲諷Boss單位後，增加破風槍「風暴咆哮」的傷害減免20%，嘲諷非Boss單位後增加5%，總計最多20%。在傷害減免激活期間，減少所有造成的傷害10%。推薦在將破風槍作為 Stonesplit - Might 武器庫的一部分時使用。',
      },
    ],

    gearSets: [
      {
        name: 'Rainwhisper Set (雨語套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大生命值 +40',
          fourSet: '增加所有暴擊傷害和治療10%，當你有生命值護盾時進一步增加15%。',
        },
        howToObtain: ['Campaign - Unbound Cavern', 'Sword Trial', 'Group Dungeons'],
      },
      {
        name: 'Moonflare Set (月芒套裝)',
        pieces: 4,
        bonuses: {
          twoSet: '最大生命值 +40',
          fourSet: '在防禦時攻擊，有30%機率生成一個吸收最多10%最大生命值的護盾，持續20秒。如果護盾已存在，額外恢復2%生命值。此效果每60秒只能觸發一次。',
        },
        howToObtain: ['Campaign - Unbound Cavern', 'Campaign - Furnace of Righteousness', 'Sword Trial', 'Group Dungeons'],
      },
    ],

    talents: [
      {
        name: '蓄力計算強化',
        unlockMethod: 'Unlocked after learning Martial Arts',
        description: '蓄力技能和變體連擊永遠不會磨損（Abrasion）並造成更多暴擊傷害。',
      },
      {
        name: '最大生命值增加',
        unlockMethod: 'Complete Breakthrough to Tier 1',
        description: '體質（Body）可以增加最大生命值。',
      },
      {
        name: '蓄力暴擊強化',
        unlockMethod: 'Complete Breakthrough to Tier 2',
        description: '增加蓄力技能及相關變體連擊的暴擊率。',
      },
      {
        name: 'Stonesplit 增加',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '增加 Stonesplit（屬性）攻擊力。同時根據最大 Stonesplit 攻擊力增加 Stonesplit 穿透。',
      },
      {
        name: '屬性攻擊傷害強化',
        unlockMethod: 'Complete Breakthrough to Tier 3',
        description: '所有技能根據屬性攻擊力造成傷害，而 Stonesplit 傷害獲得進一步提升。',
      },
    ],

    effects: [
      {
        name: 'Fighting Spirit (戰意)',
        description: '雷嘯刀和破風槍的獨特武學資源。通過格擋或隨時間自然恢復獲得，使用特定技能時消耗。',
      },
      {
        name: 'Breakthrough (突破)',
        description: '12秒內增加蓄力技能傷害30%，並移除蓄力時的耐力消耗。',
      },
      {
        name: 'Shield (護盾)',
        description: '吸收生命值傷害及相關氣傷害，不包括固定氣傷害。',
      },
      {
        name: 'Focus (專注)',
        description: '5秒內使用的下一個蓄力技能蓄力速度加快50%。',
      },
      {
        name: 'Drumbeat (鼓點)',
        description: '增加蓄力技能傷害15%，持續6秒。破風槍專屬。可觸發雷嘯刀武學技能的感知技能。',
      },
    ],

    notes: [
      '裝備調整優先級：最大生命值',
      '專為吸收傷害設計',
      '多種護盾能力增加生存能力',
      '機動性降低使玩法易於理解',
      '雖然傷害不是特長，但適當使用可造成可觀傷害',
      '與破風槍共享 Stonesplit - Might 路徑和戰意資源',
      '掠食者之盾賦予25%生命值護盾和+2戰意格',
      '擁有鼓點增益時觸發「移天」感知技能',
      '突破效果：+30%蓄力技能傷害，12秒內無耐力消耗',
      '堅韌賦予受擊時免疫除群體控制外的所有效果',
      '三階段蓄力攻擊，傷害隨階段增加',
      '第3階段蓄力解鎖變體連擊技能（消耗1格戰意）',
      '逐日烈風漩渦拉近敵人（對Boss無效）',
      '與破風槍共享雨語和月芒裝備套裝',
      '通過鼓點效果與破風槍產生協同效應',
    ],
  },
];

// Helper function to get weapon by ID
export const getWeaponById = (id: string): Weapon | undefined => {
  return weaponDatabase.find(weapon => weapon.id === id);
};

// Helper function to get weapons by type
export const getWeaponsByType = (type: string): Weapon[] => {
  return weaponDatabase.filter(weapon => weapon.type === type);
};

// Helper function to get all weapon types
export const getAllWeaponTypes = (): string[] => {
  const types = new Set(weaponDatabase.map(weapon => weapon.type));
  return Array.from(types);
};
