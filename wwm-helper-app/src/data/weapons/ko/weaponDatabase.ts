import { Weapon } from "../../../types/weapons";

export const weaponDatabase: Weapon[] = [
  {
    id: "heavenquaker-spear",
    name: "헤븐퀘이커 스피어",
    type: "Spear", // Kept English for logic
    path: "Bellstrike - Umbra", // Kept English for logic
    image: require("../../../../assets/martial_art_weapons/heavenquaker_spear.png"),
    description:
      "출혈 피해를 입혀 적의 HP를 깎는 데 특화된 무학 무기입니다. 헤븐퀘이커 스피어는 빠르게 출혈을 부여할 수 있어, 적의 무리를 상대로 강력한 범위(AoE) 피해를 줍니다.",
    playstyle: "지속 피해와 범위 공격 능력을 갖춘 출혈 중심 DPS",

    howToGet: {
      method: "Skill Theft",
      location: "청하(Qinghe) 지역의 헤븐퀘이커 스피어 성소",
      level: 8,
      details:
        '평화의 종탑(Peace Bell Tower)에 있는 Qiu Yuehai에게서 "Skill Theft: Unearned Lesson" 퀘스트를 완료하십시오. 성소에 입장하려면 용의 열쇠(Dragon Key)가 필요합니다.',
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"], // Kept English for logic
      weaknesses: ["Support", "Survivability", "Control"], // Kept English for logic
    },

    skills: [
      {
        name: "Sober Sorrow (깨어난 비애)",
        type: "Martial Art", // Kept English
        description:
          "장창을 전력으로 회전시켜 근처의 적에게 6회 연속 휩쓸기 공격을 가하여 막대한 피해를 줍니다. 스킬 종료 후, 콤보 히트 수에 따라 12초 동안 버프를 획득합니다: 물방울(5히트 미만), 봄의 쇄도(5히트 이상), 강물의 흐름(10히트 이상).",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Sweep All (일망타진)",
        type: "Special", // Kept English
        description:
          "창을 휘둘러 근처의 적에게 피해를 줍니다. 현재 버프에 따라 강화됩니다: 물방울(중간 피해), 봄의 쇄도(피해/범위 증가, 방어력 감소), 강물의 흐름(피해/범위 더욱 증가, 방어력 감소, 출혈 부여).",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "Spear - Light Attack (창 - 경공격)",
        type: "Light Attack", // Kept English
        description: "장창을 휘둘러 최대 4회의 경공격을 수행합니다.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Drifting Thrust (표류 찌르기)",
        type: "Charged", // Kept English
        description:
          "지구력(Endurance)을 소모하여 차지한 후, 장창으로 찌르기 난무를 펼쳐 전방의 적에게 다단 히트를 가합니다. 스킬 사용 중에는 불굴(CC기를 제외한 모든 공격에 면역) 상태를 얻습니다.",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "Spear - Heavy Attack (창 - 중공격)",
        type: "Heavy Attack", // Kept English
        description: "장창을 휘둘러 최대 3회의 중공격을 수행합니다.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Spear - Conversion (창 - 전환)",
        type: "Dual-Weapon", // Kept English
        description: "창으로 전환하며 휩쓸기 공격을 수행합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Horizon (검의 지평)",
        type: "Attack/Martial Arts/Pursuit",
        description:
          "전략검(Strategic Sword)의 무학 스킬, 특수 스킬 또는 차지 스킬을 시전한 후, 완벽한 타이밍에 입력하면 교차하는 검(Crisscrossing Sword)을 시전하여 후속 공격을 가합니다. 대상에게 출혈 중첩이 5개 있는 경우, 모든 출혈 중첩을 제거하고 한 번에 높은 출혈 피해를 줍니다.",
      },
      {
        name: "Wolfchaser's Art (늑대 추적자의 기술)",
        type: "Martial Arts/Buff",
        description:
          "Sober Sorrow 버프를 얻기 위해 필요한 콤보 수를 5/10에서 4/8로 줄입니다. Sober Sorrow가 출혈 상태인 보스를 적중시킬 때마다, 출혈 중첩 수에 따라 20-100% 확률로 콤보 카운트가 1 증가합니다.",
      },
      {
        name: "Adaptive Steel (적응하는 강철)",
        type: "Attack/Support/Buff",
        description: "창: 공격이 대상의 물리 방어력을 12.5% 무시합니다.",
      },
      {
        name: "Insightful Strike (통찰의 일격)",
        type: "Attack/Damage Boost/DMG Reduction",
        description:
          "친화력(Affinity) 피해를 입히면 집중(Focus)이 생성됩니다. 집중이 가득 차면 10초 동안 집중 상태에 들어갑니다(친화력 피해 10% 증가, 피격 시 5% 확률로 받는 피해 40% 감소).",
      },
    ],

    gearSets: [
      {
        name: "Hawkwing Set (매의 날개 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "친화력 확률 +0.1%",
          fourSet:
            "피해가 친화력을 발동시키면 매의 날개(Hawkwing)를 획득합니다: 5초 동안 물리 공격력이 2% 증가하며, 최대 5회 중첩됩니다.",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Eaglerise Set (독수리의 비상 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 방어력 +1",
          fourSet:
            "지속 피해(DoT)를 입히거나 치유를 하면 Eaglerise를 획득합니다: 10초 동안 받는 피해가 1.2% 감소합니다(최대 5회 중첩). 최대 중첩 시, 독수리의 수호(Eagle Guard) 효과를 얻어 다음 피해를 90% 감소시킵니다(보스 피해의 경우 절반). 30초 재사용 대기시간.",
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
        name: "지속 피해 강화",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "대상에게 차지 스킬을 적중시키면 받는 지속 피해가 증가합니다.",
      },
      {
        name: "물리 공격력 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "힘(Power)으로 최대 물리 공격력을 증가시킬 수 있습니다.",
      },
      {
        name: "지속 피해 강화 II",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "카테고리 피해 계산 시, 친화력 피해를 추가로 증가시킵니다.",
      },
      {
        name: "Bellstrike 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Bellstrike(속성) 공격력을 증가시킵니다. 또한 최대 Bellstrike 공격력에 비례하여 Bellstrike 관통력을 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Bellstrike 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Bleed (출혈)",
        description:
          "시간에 따라 지속적인 HP 피해를 입히며, 최대 5단계까지 중첩됩니다.",
      },
      {
        name: "Droplet (물방울)",
        description: "가하는 HP 피해가 10% 증가합니다.",
      },
      {
        name: "Spring Surge (봄의 쇄도)",
        description: "가하는 HP 피해가 15% 증가합니다.",
      },
      {
        name: "River Flow (강물의 흐름)",
        description: "가하는 HP 피해가 20% 증가합니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 친화력 확률",
      "출혈 시너지를 위해 전략검(Strategic Sword)과 매우 잘 어울립니다",
      "성소에 입장하려면 용의 열쇠(Dragon Key)가 필요합니다",
    ],
  },

  {
    id: "strategic-sword",
    name: "전략검 (Strategic Sword)",
    type: "Sword",
    path: "Bellstrike - Umbra",
    image: require("../../../../assets/martial_art_weapons/strategic_sword.png"),
    description:
      "검과 창을 사용할 때 선택할 수 있는 두 번째 무학입니다. 단순히 순수한 피해를 입히는 것보다, 이 무학은 출혈 피해를 입혀 적의 HP를 고갈시키는 데 중점을 둡니다. 동시에 단순한 공격으로 지속적인 피해를 줄 수 있습니다. 매우 유연한 무학으로, 큰 적을 수동적으로 공격하면서 나머지 적들을 처리하거나, 개별 대상을 하나씩 처치하는 데 집중할 수 있습니다. 또한 높은 기동성을 자랑하지만, 페이스를 유지하려면 많은 지구력(Endurance) 관리가 필요합니다.",
    playstyle:
      "지속 피해, 높은 기동성, 유연한 대상 관리를 갖춘 출혈 중심 DPS - 높은 지구력 관리 필요",

    howToGet: {
      method: "Skill Theft",
      location: "청하(Qinghe) 지역 남쪽의 전략검 성소",
      details:
        "용의 열쇠가 필요합니다. 뒷산 순간이동 장치(Back Mountain Teleporter)로 빠르게 이동하십시오. Loong Herm Dragon Pillar를 통해 성소로 입장합니다. 민병대 경비를 뚫고 이동하여 상자 2개를 약탈하고, 동쪽으로 향해 경사로를 따라 2층으로 올라가 파란색 원을 사용하여 기술 강탈을 수행하십시오.",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Survivability", "Control"],
    },

    skills: [
      {
        name: "Inner Track Slash (내면의 베기)",
        type: "Martial Art",
        description:
          "적에게 돌진하여 빠른 베기를 수행해 가벼운 피해를 입히고 출혈을 적용합니다. 후속 동작 중에 다시 누르면 전방의 적들에게 4회 연속 베기를 가하여 출혈을 적용합니다.",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Inner Balance Strike III (내면의 균형 타격 III)",
        type: "Special",
        description:
          "지구력을 소모하여 뒤로 회피해 거리를 벌린 후, 원래 위치에 있는 적들을 여러 번 타격합니다. 대상에게 출혈 중첩이 5개 있는 경우, 즉시 큰 피해를 입히고 출혈 중첩을 제거합니다. 이 효과는 동일한 대상에게 사용당 한 번만 발동할 수 있습니다. 각 타격은 출혈을 적용합니다.",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "Sword - Light Attack (검 - 경공격)",
        type: "Light Attack",
        description: "장검으로 최대 4회의 경공격을 수행합니다.",
        recovery: "0.6s",
        key: "Left Click",
      },
      {
        name: "Second Track Slash (두 번째 베기)",
        type: "Charged",
        description:
          "지구력을 소모하여 차지한 후 전방으로 빠르게 돌진하여 경로상의 적들에게 막대한 피해를 입힙니다. 돌진하는 동안 투명 상태가 되며 피해에 면역이 되고, 적중 시마다 출혈을 적용합니다.",
        recovery: "1.0s",
        key: "Hold R",
      },
      {
        name: "Sword - Heavy Attack (검 - 중공격)",
        type: "Heavy Attack",
        description: "장검으로 최대 3회의 중공격을 수행합니다.",
        recovery: "0.9s",
        key: "R",
      },
      {
        name: "Sword - Conversion (검 - 전환)",
        type: "Dual-Weapon",
        description: "검으로 전환하여 베기를 수행합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Horizon (검의 지평)",
        type: "Attack/Martial Arts/Pursuit",
        description:
          "전략검의 무학 스킬, 특수 스킬 또는 차지 스킬을 시전한 후, 종료 단계에서 완벽한 타이밍에 스킬 버튼을 누르면 교차하는 검(Crisscrossing Sword)을 시전하여 후속 공격을 가합니다. 대상에게 출혈 중첩이 5개 있는 경우, 모든 출혈 중첩을 제거하고 한 번에 높은 출혈 피해를 줍니다.",
      },
      {
        name: "Wolfchaser's Art (늑대 추적자의 기술)",
        type: "Martial Arts/Buff",
        description:
          "헤븐퀘이커 스피어의 무학 스킬인 Sober Sorrow 버프를 얻기 위해 필요한 콤보 수를 5/10에서 4/8로 줄입니다. 당신의 출혈 효과가 적용된 보스에게 Sober Sorrow가 적중할 때마다, 출혈 중첩 수에 따라 20%/40%/60%/80%/100%의 확률로 콤보 카운트가 1 증가합니다.",
      },
      {
        name: "Adaptive Steel (적응하는 강철)",
        type: "Attack/Support/Buff",
        description:
          "사용 중인 칼날 무기에 따라 무학 스킬을 획득합니다: 검: 친화력 피해를 입힐 때 10% 확률로 대상에게 출혈 1중첩 적용. 창: 공격이 대상의 물리 방어력을 12.5% 무시. 쌍검: 완벽한 회피 후, 8초 이내의 다음 무학 스킬 피해가 25% 증가. 맥도(Mo Blade): 차지 스킬 및 패링 반격 스킬의 치명타 피해 20% 증가. 검의 무학 스킬은 10초의 재사용 대기시간이 있으며, 쌍검의 무학 스킬은 25초의 대기시간이 있습니다.",
      },
      {
        name: "Insightful Strike (통찰의 일격)",
        type: "Attack/Damage Boost/DMG Reduction",
        description:
          "친화력(Affinity) 피해를 입히면 집중(Focus)이 생성됩니다. 집중이 가득 차면 10초 동안 집중 상태에 들어갑니다. 집중: 친화력 피해가 10% 증가합니다. 피격 시 5% 확률로 받는 피해가 40% 감소합니다.",
      },
    ],

    gearSets: [
      {
        name: "Hawkwing Set (매의 날개 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "친화력 확률 +0.1%",
          fourSet:
            "피해가 친화력을 발동시키면 매의 날개(Hawkwing)를 획득합니다: 5초 동안 물리 공격력이 2% 증가하며, 최대 5회 중첩됩니다.",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Eaglerise Set (독수리의 비상 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 방어력 +1",
          fourSet:
            "지속 피해를 입히거나 치유를 하면 Eaglerise 1중첩을 획득합니다: 10초 동안 받는 피해가 1.2% 감소하며, 최대 5회 중첩됩니다. 최대 중첩 시, 독수리의 수호(Eagle Guard) 효과를 받아 10초 이내에 받는 다음 피해를 90% 감소시킵니다(보스 피해인 경우 절반). 이 효과는 30초마다 한 번만 발동할 수 있습니다.",
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
        name: "출혈 메커니즘 강화",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "특정 스킬로 최대 출혈 중첩 상태인 적을 타격하면 한 번에 높은 출혈 피해를 입힐 수 있습니다.",
      },
      {
        name: "친화력 확률 업그레이드",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "힘(Power)으로 친화력 확률을 증가시킬 수 있습니다.",
      },
      {
        name: "출혈 친화력 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "출혈 피해 계산 시, 친화력 확률을 추가로 증가시킵니다.",
      },
      {
        name: "Bellstrike 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Bellstrike(속성) 공격력을 증가시킵니다. 또한 최대 Bellstrike 공격력에 비례하여 Bellstrike 관통력을 증가시킵니다.",
      },
      {
        name: "속성 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Bellstrike 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Bleed (출혈)",
        description:
          "시간에 따라 지속적인 HP 피해를 입히며, 최대 5단계까지 중첩됩니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 친화력 확률",
      "헤븐퀘이커 스피어와 매우 잘 어울림 - 둘 다 Bellstrike 경로 공유",
      "시간 경과에 따라 적의 HP를 고갈시키는 출혈 피해에 집중",
      "매우 유연함 - 다른 적들을 처리하면서 큰 적을 수동적으로 공격 가능",
      "개별 대상을 하나씩 제거하는 데 집중 가능",
      "재배치 및 카이팅을 위한 높은 기동성",
      "페이스를 유지하려면 많은 양의 지구력 필요",
      "Second Track Slash는 돌진 중 투명 및 피해 면역 부여",
      "Inner Balance Strike III는 대상의 출혈 중첩이 5일 때 높은 피해를 줌",
      "출혈은 최대 5단계까지 중첩되어 피해 극대화",
      "Wolfchaser's Art와 Sword Horizon을 통해 헤븐퀘이커 스피어와 시너지 효과",
      "성소에 입장하려면 용의 열쇠 필요",
      "헤븐퀘이커 스피어와 매의 날개 및 독수리의 비상 장비 세트 공유",
    ],
  },

  {
    id: "panacea-fan",
    name: "파나시아 팬 (Panacea Fan)",
    type: "Fan",
    path: "Skillbind - Deluge",
    image: require("../../../../assets/martial_art_weapons/panacea_fan.png"),
    description:
      "부채의 지원형 대체 무기이며, 소울쉐이드 엄브렐러와 함께 유닛을 치유할 수 있는 유일한 무기입니다. 이 무기는 치유를 제공하고 아군을 부활시키는 등 지원에 전념하므로 멀티플레이어에 매우 적합하지만, 피해량은 심각하게 부족합니다. 전투 중에는 뒤로 물러나 치유만 제공하는 무기로 간주됩니다.",
    playstyle:
      "순간 치유 및 지속 치유, 단일 대상 및 그룹 회복, 부활 능력, 팀 피해 버프를 갖춘 지원형 힐러",

    howToGet: {
      method: "Quest Reward, Skill Theft, or Join Sect",
      location: "청하(Qinghe) 지역의 은침(Silver Needle) 성소",
      details:
        '청하의 "Oddities - Mystery of Five Tones" 조우 퀘스트 보상, 또는 은침 성소에서 기술 강탈(용의 열쇠 필요), 또는 은침 문파 가입으로 획득 가능. 성소의 경우: Loong Dragon Pillar에서 용의 열쇠로 입장하고, 은신을 사용하여 민병대를 지나 문파 장문인에게 도달하여 기술 강탈을 수행하십시오.',
    },

    stats: {
      strengths: ["Support", "Survivability", "Difficulty"],
      weaknesses: ["Mobility", "DPS", "Control"],
    },

    skills: [
      {
        name: "Cloudburst Healing (폭우의 치유)",
        type: "Martial Art",
        description:
          "사용 시 물방울(Dewdrops) 20포인트를 생성합니다. 목표 위치에 물의 분신을 소환하여 근처의 아군을 초당 1회 치유하고 소량의 HP를 회복시킵니다. 분신은 7초 동안 지속됩니다. 사용 후 물방울이 가득 차면 감각 스킬(Sense Skill)을 발동할 수 있습니다.",
        recovery: "20.0s",
        key: "Q",
      },
      {
        name: "Endless Cloud (끝없는 구름)",
        type: "Martial Art",
        description:
          "물방울의 모든 중첩을 소모하여 범위 내 모든 아군에게 큰 순간 치유를 제공합니다. 소울쉐이드 엄브렐러를 장착하고 있고 특수 스킬 Echoing Grow가 재사용 대기 중이 아니라면 자동으로 발동됩니다. (감각 스킬 - 물방울이 가득 찼을 때 발동)",
        recovery: "1.0s",
        key: "Q (when Dewdrops full)",
      },
      {
        name: "Light Dust After Morning Rain (아침 비 후의 가벼운 먼지)",
        type: "Special",
        description:
          "부채를 휘둘러 물줄기를 방출하고 물방울 50을 소모하여 자신과 파티 내 HP가 가장 낮은 아군에게 6초간 치유 효과를 부여하고 중간 정도의 HP를 회복시킵니다. 파티 패널에서 대상이 선택된 경우 효과는 해당 대상에게 고정됩니다. 결투(Duel) 이외의 게임 플레이에서는 자신에게 적용되는 치유 효과가 30% 증가합니다. 근처에 치명상을 입은(Fatally Wounded) 아군이 있고 감각 스킬이 재사용 대기 중이 아니라면 감각 스킬로 전환됩니다.",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Resurrection (부활)",
        type: "Special",
        description:
          "파티 내에 치명상을 입은 플레이어가 있을 때 이 스킬을 사용하여 물방울을 소모해 다시 싸울 수 있게 합니다. 선택한 팀원이 치명상을 입은 경우 해당 팀원을 부활시킵니다. 선택되지 않은 팀원이 치명상을 입은 경우 가장 가까운 치명상 팀원을 부활시킵니다. 파티 목록을 통해 치명상 팀원을 빠르게 부활시킬 수도 있습니다. 소모한 물방울이 많을수록 부활 후 회복되는 HP가 증가합니다. 대상을 부활시킨 후 5초 동안 풍부한 이슬(Abundant Dew) 효과를 얻습니다. (감각 스킬 - 아군이 치명상을 입었을 때 발동)",
        recovery: "0.2s",
        key: "~ (when ally Fatally Wounded)",
      },
      {
        name: "Fourfold Inquiry (네 번의 질문)",
        type: "Light Attack",
        description: "부채를 휘둘러 최대 4회의 원거리 경공격을 수행합니다.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Emerald Dewtouch (에메랄드 이슬 손길)",
        type: "Healing",
        description:
          "자신 또는 아군의 HP를 소량 회복합니다. 각 구간마다 자신의 물방울을 3, 5, 12 회복합니다. HP 비율이 가장 낮은 대상을 우선시합니다. 파티 패널에서 대상이 선택된 경우 회복은 해당 대상에게 고정됩니다.",
        key: "R",
      },
      {
        name: "Fan - Conversion (부채 - 전환)",
        type: "Dual-Weapon",
        description:
          "부채로 전환하여 휘둘러 자신과 근처 아군 1명의 HP를 지속적으로 회복합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Royal Remedy (왕실의 치료)",
        type: "Support/Martial Arts/Recover",
        description:
          "파나시아 팬의 무학 스킬인 Cloudburst Healing으로 생성된 물의 분신의 치유 효과를 10% 증가시킵니다. 범위 내에 있으면 지속 치유를 받을 때마다 물방울 1개를 획득합니다.",
      },
      {
        name: "Restoring Blossom (회복의 꽃)",
        type: "Support/Buff/Stacking",
        description:
          "치명타 치유를 하면 3초 동안 육성(Nurturing) 1중첩을 적용하여 받는 치유량을 2% 증가시키며, 최대 3회 중첩됩니다.",
      },
      {
        name: "Esoteric Revival (비전 부활)",
        type: "Support/Buff/Recover",
        description:
          "파나시아 팬의 감각 스킬인 Resurrection(부활)의 치유량을 부활된 대상에 대해 50% 증가시킵니다.",
      },
      {
        name: "Mending Loom (수선의 베틀)",
        type: "Support/Buff/Recover",
        description:
          "소울쉐이드 엄브렐러의 특수 스킬 Echoing Grow를 시전하면 물방울 5개를 회복하고, 소모한 물방울 100개당 최대 HP의 10%를 추가로 회복합니다. (소울쉐이드 엄브렐러를 Skillbind - Deluge 무기고의 일부로 사용할 때)",
      },
    ],

    gearSets: [
      {
        name: "Ivorybloom Set (아이보리블룸 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "치명타 확률 +0.1%",
          fourSet:
            "최대 HP일 때, 치명타 치유 및 피해를 입힐 확률이 5% 추가되며, 치명타 치유 및 피해의 효과가 15% 증가합니다.",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Whirlsnow Set (월스노우 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 방어력 +1",
          fourSet:
            "한 번의 피해로 최대 HP의 40% 이상을 잃거나 HP가 20% 미만으로 떨어지면, 5초 이내에 받는 다음 치유가 최대 HP의 25%를 추가로 회복합니다. 이 효과는 60초마다 한 번 발동합니다.",
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
        name: "수속성 치유 부스트",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "자신이 생성한 물의 분신 범위 내에 있을 때 초당 물방울 2개를 추가로 회복합니다.",
      },
      {
        name: "최대 HP 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "방어력에 따라 최대 HP를 증가시킬 수 있습니다. 최대 보너스는 25 DEF를 필요로 합니다.",
      },
      {
        name: "중공격 치유 부스트",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "중공격의 치유량을 5% 증가시키고, 최소 물리 공격력에 따라 추가로 증가시켜 250 최소 물리 공격력에서 최대 5%까지 증가합니다.",
      },
      {
        name: "Skillbind 속성 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Skillbind(속성) 공격력을 증가시킵니다. 또한 최소 Skillbind 공격력에 따라 Skillbind 피해 보너스를 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Skillbind 공격력에 비례하여 추가 치유를 제공합니다. 모든 스킬은 속성 공격력에 기반하여 피해를 주며, Skillbind 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Dewdrop (물방울)",
        description:
          "파나시아 팬과 소울쉐이드 엄브렐러가 사용하는 특수 무학 자원으로, 최대 100포인트입니다.",
      },
      {
        name: "Inner Demon - Healing Reduction (내면의 악마 - 치유 감소)",
        description:
          "캠페인 및 미스터리 보스에 대한 첫 클리어 도전을 완료하기 전에는 전투가 내면의 악마에 영향을 받아 치유 효과가 크게 감소합니다.",
      },
      {
        name: "Sense Skill (감각 스킬)",
        description:
          "특정 특수 상황에서 해당 스킬이 다른 형태로 변형될 수 있습니다.",
      },
      {
        name: "Mystic Art - DMG Up (비술 - 피해 증가)",
        description:
          "소울쉐이드 엄브렐러와 파나시아 팬을 모두 장착하면 비술(Mystic Arts)의 피해가 20% 증가합니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 치명타 확률",
      "주요 힐러 무기 - 소울쉐이드 엄브렐러 외에 치유할 수 있는 유일한 무기",
      "멀티플레이어에서 치명상을 입은 아군 부활 가능",
      "멀티플레이어 지원에 강력하게 편중됨",
      "피해량 심각하게 부족",
      "전투 뒤쪽에서 치유를 제공하는 데 가장 적합",
      "순간 치유(Endless Cloud)와 지속 치유(Cloudburst Healing) 모두 갖춤",
      "단일 대상 및 그룹 회복 커버",
      "팀 전체 피해 버프 제공",
      "소울쉐이드 엄브렐러와 Skillbind - Deluge 경로 공유",
      "물방울 자원 시스템 사용(최대 100포인트)",
      "물의 분신 치유는 Royal Remedy 내공으로 강화 가능",
    ],
  },

  {
    id: "inkwell-fan",
    name: "잉크웰 팬 (Inkwell Fan)",
    type: "Fan",
    path: "Skillbind - Jade",
    image: require("../../../../assets/martial_art_weapons/inkwell_fan.png"),
    description:
      "부채의 공격형 대체 무기로, 파나시아 팬과는 완전히 다릅니다. 치유를 제공하는 대신, 이 무기는 사용자가 표적이 되지 않는 안전한 거리에서 개별 대상을 목표로 하는 데 중점을 둡니다. 상당한 기동성과 군중 제어(CC)를 제공합니다.",
    playstyle: "지속 피해, 제어, 공중 공격 콤보를 갖춘 원거리 DPS",

    howToGet: {
      method: "Skill Theft",
      location: "청하(Qinghe) 지역 북부의 잉크웰 팬 성소",
      details:
        "용의 열쇠가 필요합니다. 성소를 통과하여 상자 6개를 수집하고 마지막에 있는 마스터에게 기술 강탈을 수행하십시오.",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Difficulty", "Survivability", "Support"],
    },

    skills: [
      {
        name: "Jadewind Shield (옥풍의 방패)",
        type: "Martial Art",
        description:
          "부채로 근처 대상을 밀쳐내고, 보스가 아닌 유닛과 적의 투사체를 8초 동안 막는 바람 장막을 생성하며 뒤로 점프하여 거리를 유지합니다. 이 스킬을 사용하면 들어오는 공격을 회피하고 강화 탄도(Enhanced Ballistics)를 획득하며, 최대 2회 중첩됩니다.",
        recovery: "15.0s",
        key: "Q",
      },
      {
        name: "Peak's Springless Silence (봉우리의 샘 없는 침묵)",
        type: "Special",
        description:
          "전방으로 돌진하여 대상을 공중으로 띄웁니다. 짧은 속박(Root)을 적용합니다. 인간형 적을 타격하면 띄우기(Launch) 상태로 만듭니다. 비플레이어 적을 타격하면 뼈의 잔재(Lingering Bone) 표식을 적용합니다. 이미 띄우기 상태이거나 자신의 뼈의 잔재 표식이 있는 적을 타격하면 바람 타기(Riding the Wind) 효과를 얻습니다. 원래 위치에 물의 분신을 생성하며, 5초 이내에 다시 시전하면 분신 위치로 순간 이동할 수 있습니다.",
        recovery: "12.0s",
        key: "~",
      },
      {
        name: "Fan - Light Attack (부채 - 경공격)",
        type: "Light Attack",
        description: "부채로 최대 4회의 원거리 경공격을 수행합니다.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Forsaken Fame (버려진 명성)",
        type: "Charged",
        description:
          "잠시 차지한 후, 전방으로 휘둘러 회오리바람을 방출하여 중간 정도의 피해를 줍니다. 인간형 적을 타격하면 띄우기 상태로 만듭니다. 비플레이어 적을 타격하면 뼈의 잔재 표식을 적용합니다.",
        key: "Hold Left Click",
      },
      {
        name: "Fan - Heavy Attack (부채 - 중공격)",
        type: "Heavy Attack",
        description:
          "최대 3구간의 중공격을 수행합니다. 대상이 띄우기 상태이거나 자신의 뼈의 잔재 표식에 걸린 경우, 감각 스킬을 발동할 수 있습니다.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Moon Shatter Spring (달 부수는 샘)",
        type: "Heavy Attack",
        description:
          "띄우기 상태이거나 자신의 뼈의 잔재 표식이 있는 적에게 공중 중공격을 수행하여, 공중으로 도약해 부채를 휘두르는 3연타 콤보를 날립니다. 바람 타기 효과가 있으면 강화된 5연타 콤보로 높은 피해를 입히고, 결투(Duel) 이외의 게임 플레이에서 불굴(Tenacity)을 얻습니다. 사용 후 6초의 재사용 대기시간이 있습니다.",
        key: "Press R (while targeting Airborne enemy)",
      },
      {
        name: "Fan - Conversion (부채 - 전환)",
        type: "Dual-Weapon",
        description: "부채로 전환하여 베기를 수행합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Blossom Barrage (꽃의 탄막)",
        type: "Attack/Martial Arts/Damage Boost",
        description:
          "버널 엄브렐러의 무학 스킬 Spring Sorrow는 최대 2중첩까지 유지할 수 있습니다. 대상을 타격하면 콤보 효과를 적용합니다: 8초 동안 시전자의 탄도 스킬(Ballistic Skills)로부터 받는 피해가 10% 증가합니다. (버널 엄브렐러를 Silkbind - Jade 무기고의 일부로 사용할 때 권장)",
      },
      {
        name: "Flying Gourds (비행 호리병)",
        type: "Martial Arts/Support",
        description:
          "잉크웰 팬의 Peak's Springless Silence에 2회 충전 횟수를 부여하지만 재사용 대기시간이 3초 증가합니다.",
      },
      {
        name: "Thunderous Bloom (천둥 같은 개화)",
        type: "Damage Boost/Buff",
        description:
          "3초 이내에 15m 이상 이동하면 봄의 천둥(Spring Thunder)을 획득합니다: 12초 이내의 다음 3회 중공격 또는 공중 중공격이 15% 피해 보너스를 얻습니다. 이 효과는 15초마다 한 번 발동할 수 있습니다.",
      },
      {
        name: "Star Reacher (별을 쫓는 자)",
        type: "Attack/Pursuit/Buff",
        description:
          "적을 공중으로 띄운 후 8초 동안 물리 공격력 10% 보너스를 얻습니다.",
      },
    ],

    gearSets: [
      {
        name: "Veil of the Willow Set (버드나무의 장막 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "정밀도(Precision Rate) +0.1%",
          fourSet:
            "경공격/공중 중공격 후, 피해가 12% 증가하며 10초간 지속됩니다. 중공격/공중 중공격/경공격/차지 공격 후에도 피해가 12% 증가합니다.",
        },
        howToObtain: ["Campaign - Heavenfall", "Sword Trial", "Group Dungeons"],
      },
      {
        name: "Beyond the Chill Set (추위를 넘어선 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP +40",
          fourSet:
            "전투 진입 후 10초 동안 피해를 입지 않으면 Beyond the Chill을 획득합니다: 다음 받는 피해와 그 후 2초 이내의 모든 받는 피해를 40% 감소시킵니다. Beyond the Chill은 전투 종료 시 제거됩니다.",
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
        name: "저 기력(Qi) 후속타 강화",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "기력이 낮은 대상을 상대로 Moon Shatter Spring의 치명타 확률을 증가시킵니다.",
      },
      {
        name: "물리 공격력 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "민첩성(Agility)으로 최소 물리 공격력을 증가시킬 수 있습니다.",
      },
      {
        name: "공중 후속타 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "Moon Shatter Spring의 치명타 피해를 증가시킵니다.",
      },
      {
        name: "Silkbind 속성 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Silkbind(속성) 공격력을 증가시킵니다. 또한 최소 Silkbind 공격력에 따라 Silkbind 피해 보너스를 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Silkbind 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Launch (띄우기)",
        description:
          "특수 스킬을 사용하여 대상을 공중으로 띄워 높은 피해에 더 취약하게 만듭니다.",
      },
      {
        name: "Riding the Wind (바람 타기)",
        description:
          "잉크웰 팬의 고유 효과. 이 시간 동안 사용되는 다음 후속 스킬이 강화됩니다. 이 효과는 2초 동안 지속됩니다.",
      },
      {
        name: "Sense Skill (감각 스킬)",
        description:
          "특정 특수 상황에서 해당 스킬이 다른 형태로 변형될 수 있습니다.",
      },
      {
        name: "Enhanced Ballistics (강화 탄도)",
        description: "투사체 스킬 피해가 20% 증가합니다.",
      },
      {
        name: "Lingering Bone (뼈의 잔재)",
        description:
          "비플레이어 적에게 적용되는 표식으로, 공중 콤보 공격을 가능하게 합니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 치명타 확률",
      "근접 무기로 위험을 감수하고 싶지 않은 사람들에게 적합한 옵션",
      "군중 제어를 갖춘 지속적인 원거리 DPS에 탁월",
      "성소에 입장하려면 용의 열쇠 필요",
    ],
  },

  {
    id: "mortal-rope-dart",
    name: "필멸의 승표 (Mortal Rope Dart)",
    type: "Rope Dart",
    path: "Bamboocut - Wind",
    image: require("../../../../assets/martial_art_weapons/mortal_rope_dart.png"),
    description:
      "승표(Rope Dart)는 원거리 공격과 근접 타격의 혼합을 제공합니다. 이 독특한 하이브리드는 플레이어에게 전투 접근 방식에 더 많은 다양성을 부여합니다. 플레이어는 채찍과 같은 휩쓸기 공격으로 원거리에서 타격하여 적의 균형을 무너뜨리고 후속 콤보를 이어갈 수 있습니다.",
    playstyle:
      "타이밍과 위치 선정이 중요한 유동적인 전투를 갖춘 하이브리드 원거리/근접 무기, 군중 관리에 탁월",

    howToGet: {
      method: "Skill Theft",
      location: "개봉(Kaifeng) 지역의 무술관(Martial Hall)",
      details:
        "구사문(Nine Mortal Ways) 문파 가입이 필요합니다. 변장 시스템이 포함된 복잡한 퀘스트 라인 완료: 장로와 대화, Wuyan과 대화, 옥주머니(Jade Sachet) 획득, 변장 잠금 해제, Muddle로 변장, 부엌에서 핵심 제자의 토큰(Core Disciple's Token) 획득, Elder Tian과 대화, 기술 강탈을 사용하여 무학 습득.",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Support", "Survivability", "Difficulty"],
    },

    skills: [
      {
        name: "Bladebound Thread (칼날 묶인 실)",
        type: "Martial Art",
        description:
          "승표를 전방으로 던집니다. 보스에게 적중하면 자신이 대상 쪽으로 당겨지며, 그렇지 않으면 대상과 승표를 자신 쪽으로 당겨옵니다. 2.5초 이내에 다시 누르면 대상을 넘어뜨리는 콤보 발차기를 날립니다. 적중당한 대상은 복수의 토큰(Vendetta Token)을 받습니다. 쥐가 복수의 토큰을 가진 대상을 공격하면 50% 증가한 피해를 입히고 감사의 토큰(Token of Gratitude)을 회복합니다.",
        recovery: "8.0s",
        key: "Q",
      },
      {
        name: "Rodent Rampage (설치류의 광란)",
        type: "Special",
        description:
          "감사의 토큰을 소모할 때마다 쥐를 소환하여 협동 공격을 합니다. 경공격을 시전하면 쥐가 땅에서 튀어나와 공격합니다. 이 효과는 10초간 지속되며 무기를 바꿔도 효과가 유지됩니다.",
        recovery: "0.5s",
        key: "~",
      },
      {
        name: "Rope Dart - Light Attack (승표 - 경공격)",
        type: "Light Attack",
        description: "승표를 휘둘러 최대 4회의 연속 공격을 수행합니다.",
        recovery: "0.3s",
        key: "Left Click",
      },
      {
        name: "Coiled Dragon (똬리 튼 용)",
        type: "Light Attack",
        description:
          "차지 자세(Charging Stance)에서 사용 시, 승표를 강력하게 던져 적중한 적을 넘어뜨립니다.",
        recovery: "0.5s",
        key: "Left Click while holding R",
      },
      {
        name: "Rodent's Resilience (쥐의 회복력)",
        type: "Charged",
        description:
          "차지하여 지구력을 소모하고 전방으로 검기를 방출합니다. 적중당한 대상은 오랫동안 제어됩니다. 검기 피해는 적중할 때마다 20%씩 감소하여 최소 50%가 됩니다. 차지 단계가 높을수록 피해와 사거리가 증가합니다.",
        recovery: "1.0s",
        key: "Hold R",
      },
      {
        name: "Rodent's Resilience (Pull) (쥐의 회복력 - 당기기)",
        type: "Charged",
        description:
          "차지 자세 중에 사용하여 승표를 던져 먼 거리의 적을 자신 쪽으로 끌어옵니다.",
        recovery: "0.3s",
        key: "Press R",
      },
      {
        name: "Rope Dart - Conversion (승표 - 전환)",
        type: "Dual-Weapon",
        description: "승표로 전환하여 공격합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Echoes of Oblivion (망각의 메아리)",
        type: "Pursuit/Martial Arts/Debuff",
        description:
          "Infernal Twinblades 경공격은 죄(Sin)를 부여합니다. Flamelash 상태의 경공격은 업보(Karma)를 부여합니다. 이러한 디버프가 있는 대상에 대한 Infernal Twinblades 경공격은 물리 방어력 또는 Bamboocut 저항의 일부를 무시합니다. (Infernal Twinblades를 Bamboocut - Wind 무기고의 일부로 사용할 때)",
      },
      {
        name: "Vendetta (복수)",
        type: "Martial Arts/Buff/Recover",
        description:
          "Guided Blade: 복수의 토큰 지속 시간을 연장하고 감사의 토큰을 반환합니다.",
      },
      {
        name: "Riptide Reflex (격류의 반사)",
        type: "Control/Buff",
        description:
          "제어 스킬로 적을 타격하면 현재 무학 스킬의 재사용 대기시간이 감소합니다. 10초마다 한 번 발동할 수 있습니다.",
      },
      {
        name: "Breaking Point (한계점)",
        type: "Pursuit/Buff/Stacking",
        description:
          "지친(Exhausted) 적에게 치명타를 입히면 3초 동안 붕괴(Disintegration) 1중첩을 적용하며, 최대 3회 중첩됩니다. 각 중첩은 추가 물리 관통을 부여하고 치명타 피해 보너스를 증가시킵니다.",
      },
    ],

    gearSets: [
      {
        name: "Swallowcall Set (제비부름 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최소 물리 공격력 증가",
          fourSet:
            "기력이 40% 미만인 대상에 대해 경공격이 15% 더 많은 피해를 입히고, 지친 대상에 대해서는 5% 더 많은 피해를 입힙니다.",
        },
        howToObtain: [
          "Campaign - Blissful Retreat",
          "Campaign - Jinning Pool",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Calmwaters Set (고요한 물 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 방어력 증가",
          fourSet:
            "적의 공격을 완벽하게 회피하면 50% 확률로 최대 HP의 3%와 지구력 10을 회복합니다.",
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
        name: "치명타 확률 증가",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "민첩(Agility) 스탯으로 치명타 확률을 증가시킬 수 있습니다.",
      },
      {
        name: "쥐 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "쥐의 물리 피해를 증가시킵니다.",
      },
      {
        name: "Bamboocut 증가",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Bamboocut 공격력을 증가시킵니다. 또한 최소 Bamboocut 공격력에 따라 Bamboocut 피해를 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Bamboocut 피해는 추가로 증가합니다.",
      },
      {
        name: "뼈 부식 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "무학 스킬 Guided Blade와 변형 콤보 Coiled Dragon은 적에게 5초 동안 뼈 부식(Bone Corrosion)을 적용합니다.",
      },
    ],

    effects: [
      {
        name: "Token of Gratitude (감사의 토큰)",
        description:
          "승표 무학 Mortal Rope Dart에서 사용되는 전투 자원입니다. 일부 스킬은 활성화를 위해 감사의 토큰 소모가 필요합니다.",
      },
      {
        name: "Vendetta Token (복수의 토큰)",
        description: "무학 Mortal Rope Dart의 특수 표식입니다.",
      },
      {
        name: "Charging Stance (차지 자세)",
        description:
          "특수 승표 자세: 이 자세에 있을 때 특정 스킬이 변경됩니다.",
      },
      {
        name: "Endurance (지구력)",
        description: "피격 시 군중 제어(CC)를 제외한 모든 것에 면역이 됩니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 치명타 확률",
      "구사문(Nine Mortal Ways) 문파 가입 필요",
      "변장 시스템이 포함된 복잡한 퀘스트 라인",
      "군중을 관리하고 즉석에서 전투 전술을 변경하는 도구를 찾는 플레이어에게 권장",
      "전투가 유동적이고 역동적이며, 단순한 힘보다는 타이밍과 위치 선정이 보상받음",
    ],
  },

  {
    id: "nameless-spear",
    name: "이름 없는 창 (Nameless Spear)",
    type: "Spear",
    path: "Bellstrike - Splendor",
    image: require("../../../../assets/martial_art_weapons/nameless_spear.png"),
    description:
      "Where Winds Meet에서 가장 먼저 잠금 해제되는 무기로, 이름 없는 검(Nameless Sword)을 보완합니다. 이 다재다능한 창은 게임의 메커니즘을 배우는 동안 강력한 광역(AoE) 피해와 지구력 회복을 제공합니다. 군중을 제어하고 광역 피해를 입히는 스킬과 함께 초보자에게 이상적인 직관적인 공격 패턴을 특징으로 합니다.",
    playstyle: "지구력 회복과 군중 제어를 갖춘 초보자 친화적인 광역 전투",

    howToGet: {
      method: "Story Progression",
      details:
        "게임 시작 시 이름 없는 검과 함께 자동으로 획득합니다. 특별한 요구 사항 없음.",
    },

    stats: {
      strengths: ["AoE Damage", "Endurance Recovery", "Beginner-Friendly"],
      weaknesses: ["Single Target DPS", "Advanced Mechanics"],
    },

    skills: [
      {
        name: "Qiankun's Lock (건곤의 자물쇠)",
        type: "Martial Art",
        description:
          "창으로 전방을 찔러 경로상의 적에게 피해를 주고 이동 불가(Immobilize) 상태로 만듭니다. 사용 후 10초 동안 지구력을 15 회복합니다.",
        recovery: "10.0s",
        key: "Q",
      },
      {
        name: "Legion Crusher (군단 분쇄기)",
        type: "Special",
        description:
          "창으로 전방의 땅을 내려쳐 좁은 지역의 적에게 피해를 줍니다. 이 스킬을 사용하면 3초 동안 천하무적(Unrivaled)을 획득합니다.",
        recovery: "8.0s",
        key: "~",
      },
      {
        name: "Storm Dance (폭풍의 춤)",
        type: "Charged",
        description:
          "차지하여 주변으로 창을 회전시켜 근처의 적에게 여러 번 피해를 줍니다.",
        key: "Hold R",
      },
      {
        name: "Spear - Light Attack (창 - 경공격)",
        type: "Light Attack",
        description: "장창을 휘둘러 최대 4회의 경공격을 수행합니다.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Spear - Heavy Attack (창 - 중공격)",
        type: "Heavy Attack",
        description: "장창을 휘둘러 최대 3회의 중공격을 수행합니다.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Spear - Conversion (창 - 전환)",
        type: "Dual-Weapon",
        description: "창으로 전환하여 휩쓸기 공격을 수행합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Morph (검 변형)",
        type: "Attack/Damage Boost",
        description:
          "특정 스킬 사용 후 짧은 시간 동안 물리 공격력을 증가시킵니다.",
      },
      {
        name: "Mountain's Might (산의 위력)",
        type: "Defense/Buff",
        description: "활성화 시 받는 피해를 줄이고 물리 방어력을 증가시킵니다.",
      },
      {
        name: "Wildfire Spark (들불의 불꽃)",
        type: "Attack/DoT",
        description:
          "공격에 화염 지속 피해를 추가하여 적에게 지속적인 피해를 줍니다.",
      },
      {
        name: "Battle Anthem (전투의 찬가)",
        type: "Support/Buff",
        description: "근처의 아군에게 버프를 제공하여 전투 효율을 높입니다.",
      },
    ],

    gearSets: [
      {
        name: "Jadeware Set (옥기 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 공격력 증가",
          fourSet: "스킬 피해 보너스 및 지구력 회복 속도 증가",
        },
        howToObtain: ["Early Campaign Quests", "Starter Dungeons"],
      },
      {
        name: "Formbend Set (폼벤드 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP 증가",
          fourSet: "스킬 재사용 대기시간 감소 및 피해 감소 제공",
        },
        howToObtain: ["Early Campaign Quests", "Starter Dungeons"],
      },
    ],

    talents: [
      {
        name: "친화력 확률 업그레이드",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "친화력 확률을 증가시켜 보너스 피해를 입힐 확률을 높입니다.",
      },
      {
        name: "물리 공격력 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "힘(Power)으로 최대 물리 공격력을 증가시킬 수 있습니다.",
      },
      {
        name: "지구력 회복 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "Qiankun's Lock의 지구력 회복 속도를 향상시킵니다.",
      },
      {
        name: "Bellstrike 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description: "Bellstrike(속성) 공격력과 관통력을 증가시킵니다.",
      },
      {
        name: "최대 지구력 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description: "장기전을 위해 최대 지구력 풀을 증가시킵니다.",
      },
    ],

    effects: [
      {
        name: "Immobilize (이동 불가)",
        description: "짧은 시간 동안 대상의 이동을 막습니다.",
      },
      {
        name: "Unrivaled (천하무적)",
        description: "제어 효과에 대한 면역을 부여하고 피해량을 증가시킵니다.",
      },
    ],

    notes: [
      "새로운 플레이어를 위한 완벽한 스타터 무기",
      "첫 번째 무기 쌍으로 이름 없는 검을 보완",
      "광역 피해 및 군중 제어에 집중",
      "Qiankun's Lock은 귀중한 지구력 회복 제공",
      "단순한 메커니즘으로 전투 기본을 배우기에 이상적",
    ],
  },

  {
    id: "nameless-sword",
    name: "이름 없는 검 (Nameless Sword)",
    type: "Sword",
    path: "Bellstrike - Splendor",
    image: require("../../../../assets/martial_art_weapons/nameless_sword.png"),
    description:
      "Where Winds Meet에서 가장 먼저 잠금 해제되는 무기입니다. 광역 피해를 입히기보다 개별 대상에 집중하여 빠르게 쓸어버리는 것을 선호하는 플레이어에게 이상적입니다. 대상을 여러 번 타격할 수 있는 DPS 전용 무기로, 치명타를 지속적으로 발동시키는 데 좋습니다. 엄청난 적 무리에 대항할 때 매우 필요한 뛰어난 기동성을 제공합니다.",
    playstyle: "치명타 중심 및 순간 피해 잠재력을 갖춘 고기동성 단일 대상 DPS",

    howToGet: {
      method: "Story Progression",
      details:
        "게임 시작 시 이름 없는 창과 함께 자동으로 획득합니다. 특별한 요구 사항 없음.",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Control", "Survivability"],
    },

    skills: [
      {
        name: "Fearless Lunge (거침없는 돌진)",
        type: "Martial Art",
        description:
          "비검을 던져 적중한 적에게 가벼운 피해를 입힌 후 전방으로 돌진하여 검을 따라갑니다. 후속 동작 중에 다시 누르면 최대 2회의 심판(Judgment)을 가하며, 각각 증가된 피해를 입힙니다. 심판의 두 번째 타격 후 3초간 지속되는 기(Qi) 보호막을 획득합니다.",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Shadow Step (그림자 걷기)",
        type: "Special",
        description:
          "지구력을 소모하여 뒤로 회피하고 검기(Sword Qi)를 방출합니다(검기 피해는 적중할 때마다 20%씩 감소하여 최소 50%가 됩니다). 3초 이내에 다시 누르면 검 돌진(Sword Dash)을 사용합니다.",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "Sword - Light Attack (검 - 경공격)",
        type: "Light Attack",
        description: "장검으로 최대 4회의 경공격을 수행합니다.",
        recovery: "0.6s",
        key: "Left Click",
      },
      {
        name: "Homeless Charge (정처 없는 돌격)",
        type: "Charged",
        description:
          "지구력을 소모하여 차지하고 전방으로 검기를 방출합니다(검기 피해는 적중할 때마다 20%씩 감소하여 최소 50%가 됩니다). 차지 레벨은 시간에 따라 증가하여 검기의 피해와 범위를 강화합니다.",
        key: "Hold R",
      },
      {
        name: "Sword - Heavy Attack (검 - 중공격)",
        type: "Heavy Attack",
        description: "장검으로 최대 3회의 중공격을 수행합니다.",
        recovery: "0.9s",
        key: "R",
      },
      {
        name: "Sword - Conversion (검 - 전환)",
        type: "Dual-Weapon",
        description: "검으로 전환하여 베기를 수행합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Morph (검 변형)",
        type: "Attack/Martial Arts/Damage Buff",
        description:
          "기 보호막이 존재하는 동안 이름 없는 검의 차지 스킬 Homeless Charge를 차지하면, 2단계 차지 상태에서 여러 개의 추가 검 에너지 공격을 방출합니다. 추가 지구력을 소모하여 검 에너지의 피해를 증가시킬 수 있으며, 지구력당 피해가 1%씩, 최대 20%까지 증가합니다.",
      },
      {
        name: "Mountain's Might (산의 위력)",
        type: "Support/Martial Arts/Cost Reduction",
        description:
          "이름 없는 창의 무학 스킬 Qiankun's Lock은 Endless Gale 효과를 부여하여 5초 동안 지구력 소모 감소를 20%로 증가시킵니다. 이름 없는 창을 Bellstrike - Splendor 무기고의 일부로 사용할 때만 권장됩니다.",
      },
      {
        name: "Wildfire Spark (들불의 불꽃)",
        type: "Support/Recover",
        description: "소모된 지구력의 3.5%를 반환합니다.",
      },
      {
        name: "Battle Anthem (전투의 찬가)",
        type: "Attack/Damage Boost",
        description: "모든 보스에 대한 차지 스킬의 피해를 10% 증가시킵니다.",
      },
    ],

    gearSets: [
      {
        name: "Jadeware Set (옥기 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 물리 공격력 +1",
          fourSet:
            "무학 스킬 시전 시 Jadeware 효과 발동: 친화력 피해 10% 증가 및 제어 상태이거나 기력이 40% 미만인 대상에게 친화력 피해 20% 추가 증가. 12초 지속. 이 효과는 30초마다 한 번 발동할 수 있습니다.",
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
        name: "Formbend Set (폼벤드 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 방어력 +1",
          fourSet:
            "기 보호막 지속 시간이 2초 연장됩니다. 기력이 85% 이상이거나 기 피해 면역 보호막이 있는 경우, 받는 모든 HP 피해를 20% 감소시킵니다.",
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
        name: "기(Qi) 투쟁 강화",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "가하는 기 피해가 10% 증가합니다.",
      },
      {
        name: "물리 피해 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "운동량(Momentum)에 따라 최대 물리 공격력을 증가시킬 수 있습니다. (운동량: 특정 비율에 따라 캐릭터의 친화력 확률 및 최대 물리 공격력으로 변환됨).",
      },
      {
        name: "검기 친화력 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "기력이 20% 미만인 대상(지친 대상 포함)에 대한 검 에너지 공격의 친화력 확률을 최대 물리 공격력에 따라 증가시켜, 500 최대 물리 공격력에서 최대 3.5% 증가시킵니다.",
      },
      {
        name: "Bellstrike 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Bellstrike 공격력(속성 공격)을 19 - 38 증가시킵니다. 최대 Bellstrike 공격력에 비례하여 Bellstrike 관통력을 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Bellstrike 공격은 50%의 보너스 피해를 줍니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 친화력 확률",
      "새로운 플레이어를 위한 완벽한 스타터 무기",
      "첫 번째 무기 쌍으로 이름 없는 창을 보완",
      "두 무기 모두 동일한 개발 경로(Bellstrike - Splendor)를 공유",
      "높은 기동성 및 단일 대상 제어; 적 카이팅에 탁월",
      "강력한 지구력과 차지 스킬을 결합하여 순간 피해 방출",
    ],
  },

  {
    id: "vernal-umbrella",
    name: "버널 엄브렐러 (Vernal Umbrella)",
    type: "Umbrella",
    path: "Skillbind - Jade",
    image: require("../../../../assets/martial_art_weapons/vemal_umbrella.png"),
    description:
      "소울쉐이드 엄브렐러의 공격형 대체 무기로, 기능이 완전히 다릅니다. 치유를 제공하는 대신, 이 무기는 사용자가 표적이 되지 않는 안전한 거리에서 개별 대상을 목표로 하는 데 중점을 둡니다. 상당한 기동성과 군중 제어를 제공하여 근접 무기로 위험을 감수하고 싶지 않은 사람들에게 적합한 옵션입니다.",
    playstyle: "제어 및 공중 폭발 콤보를 갖춘 원거리 지속 DPS",

    howToGet: {
      method: "Quest Reward or Skill Theft",
      location: "개봉(Kaifeng) 지역의 타임 타워(Time Tower)",
      details:
        "청하의 \"Oddities - Mystery of Five Tones\" 조우 퀘스트 보상, 또는 타임 타워에서 기술 강탈. 기술 강탈의 경우: 타워 기단에서 Wang Ping'an과 대화, 올라가서 Jiang Ting'er 찾기, 기념품 단서 찾기(얼룩 고양이, 체스 선수, 잡담하는 여자들, 창고, 2층 보물창고) 완료, 창고에서 찔레장미 비녀(Bramble Rose Hairpin) 회수, Jiang Ting'er에게 돌아가 마스터에게 기술 강탈 수행.",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Difficulty", "Survivability", "Support"],
    },

    skills: [
      {
        name: "Spring Sorrow (봄의 슬픔)",
        type: "Martial Art",
        description:
          "잠시 차지한 후 전방으로 날아가는 꽃잎을 발사합니다. 적중 시 보스가 아닌 적을 3초 동안 이동 불가 상태로 만듭니다.",
        recovery: "15.0s",
        key: "Q",
      },
      {
        name: "Unfading Flower (지지 않는 꽃)",
        type: "Special",
        description:
          "개화(Blossom)가 최소 50 있을 때 사용할 수 있습니다. 우산을 공중으로 던지고 숨겨진 검을 뽑습니다. 그 후 다른 무기로 전환하거나 숨겨진 검의 기본 스킬을 사용할 수 있습니다. 활성화된 동안 우산은 공중에서 당신을 따라다니며 5m 이내의 단일 대상에게 자동으로 투사체를 발사합니다. 대상이 공중에 있는 경우 우산은 추가 개화를 소모하여 강화된 투사체를 발사하고 대상의 체공 시간을 연장합니다. 초당 개화 10을 소모합니다. 개화가 부족하면 우산은 자동으로 회수됩니다.",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Umbrella - Light Attack (우산 - 경공격)",
        type: "Light Attack",
        description:
          "우산을 휘둘러 최대 3회의 경공격을 가하며, 근거리에서 중거리 범위의 피해를 입힙니다.",
        recovery: "0.1s",
        key: "Left Click",
      },
      {
        name: "Spring Away (봄의 도주)",
        type: "Light Attack",
        description:
          "차지 후 우산을 펼쳐 공중으로 상승하고 빠르게 회전하여 자신을 공중 상태로 만들고 투사체를 발사하여 중간 정도의 피해를 줍니다. 이 투사체로 대상을 맞추면 개화를 빠르게 축적할 수 있습니다.",
        key: "Hold Left Click",
      },
      {
        name: "Apricot Heaven (살구 천국)",
        type: "Charged",
        description:
          "막대한 피해를 주는 1단계 차지 스킬입니다. 우산을 펼쳐 공중으로 날아올라 근처의 적에게 한 번의 광역 피해를 줍니다. 공중에서 차지하는 동안 차지 시간에 따라 두 가지 변형이 있습니다: 일반 하강 광역 공격과 강화된 광역 공격.",
        key: "Hold R",
      },
      {
        name: "Colorful Phoenix (화려한 봉황)",
        type: "Heavy Attack",
        description:
          "첫 번째 또는 두 번째 중공격의 회복 동작 중에 경공격 버튼을 탭하면 콤보 스킬이 발동됩니다 - 우산을 펼쳐 전방으로 돌진하며 다단 히트 피해를 줍니다.",
        recovery: "0.2s",
        key: "R while in the air",
      },
      {
        name: "Umbrella - Heavy Attack (우산 - 중공격)",
        type: "Heavy Attack",
        description:
          "우산을 휘둘러 최대 4회의 중공격을 가하며, 근거리에서 중거리 범위의 피해를 입힙니다.",
        key: "R",
      },
      {
        name: "Umbrella - Conversion (우산 - 전환)",
        type: "Dual-Weapon",
        description: "무기를 우산으로 전환하고 휘둘러 피해를 줍니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Blossom Barrage (꽃의 탄막)",
        type: "Attack/Martial Arts/Damage Boost",
        description:
          "버널 엄브렐러의 무학 스킬 Spring Sorrow는 최대 2중첩까지 유지할 수 있습니다. 대상을 타격하면 콤보 효과를 적용합니다: 8초 동안 시전자의 탄도 스킬로부터 받는 피해가 10% 증가합니다. 영향을 받는 탄도 스킬에는 무학 스킬 Spring Sorrow와 특수 스킬 Unfading Flower가 포함됩니다. 버널 엄브렐러를 Skillbind - Jade 무기고의 일부로 사용할 때 권장됩니다.",
      },
      {
        name: "Flying Gourds (비행 호리병)",
        type: "Martial Arts/Support",
        description:
          "잉크웰 팬의 Peak's Springless Silence에 2회 충전 횟수를 부여하지만 재사용 대기시간이 3초 증가합니다.",
      },
      {
        name: "Thunderous Bloom (천둥 같은 개화)",
        type: "Damage Boost/Buff",
        description:
          "3초 이내에 15m 이상 이동하면 봄의 천둥(Spring Thunder)을 획득합니다: 12초 이내의 다음 3회 중공격 또는 공중 중공격이 15% 피해 보너스를 얻습니다. 이 효과는 15초마다 한 번 발동할 수 있습니다.",
      },
      {
        name: "Star Reacher (별을 쫓는 자)",
        type: "Attack/Pursuit/Buff",
        description:
          "적을 공중으로 띄운 후 8초 동안 물리 공격력 10% 보너스를 얻습니다.",
      },
    ],

    gearSets: [
      {
        name: "Veil of the Willow Set (버드나무의 장막 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "정밀도(Precision Rate) +0.1%",
          fourSet:
            "경공격/공중 중공격 후, 피해가 12% 증가하며 10초간 지속됩니다. 반대의 경우도 마찬가지입니다. 특히, 중공격/공중 중공격/경공격/차지 공격 후 피해가 12% 증가합니다.",
        },
        howToObtain: ["Campaign - Heavenfall", "Sword Trial", "Group Dungeons"],
      },
      {
        name: "Beyond the Chill Set (추위를 넘어선 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP +40",
          fourSet:
            "전투 진입 후 10초 동안 피해를 입지 않으면 Beyond the Chill을 획득합니다: 다음 받는 피해와 그 후 2초 이내의 모든 받는 피해를 40% 감소시킵니다. Beyond the Chill은 전투 종료 시 제거됩니다.",
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
        name: "탄도 스킬 강화",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "모든 버널 엄브렐러 탄도 스킬은 이동 불가 또는 공중 상태인 적에게 피해를 줄 때 대상의 물리 저항 일부를 무시합니다.",
      },
      {
        name: "치명타 확률 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "민첩성(Agility)으로 치명타 확률을 증가시킬 수 있습니다.",
      },
      {
        name: "탄도 계산 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "버널 엄브렐러 탄도 스킬의 치명타 피해를 증가시킵니다.",
      },
      {
        name: "Silkbind 속성 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Silkbind(속성) 공격력을 증가시킵니다. 또한 최소 Silkbind 공격력에 따라 Silkbind 피해 보너스를 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Silkbind 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Airborne (공중)",
        description:
          "특수 스킬을 사용하여 대상을 공중으로 띄워 높은 피해에 더 취약하게 만듭니다.",
      },
      {
        name: "Blossom (개화)",
        description:
          "버널 엄브렐러의 고유 무학 자원입니다. 최대 100포인트. 이 무학을 장착하고 적을 타격하여 얻을 수 있습니다. 개화는 스킬 사용 중 지속적으로 소모됩니다.",
      },
      {
        name: "Immobilize (이동 불가)",
        description: "대상은 무력화되어 이동하거나 스킬을 사용할 수 없습니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 치명타 확률",
      "소울쉐이드 엄브렐러의 공격형 대체품",
      "잉크웰 팬과 Silkbind - Jade 경로 공유",
      "지속 DPS 능력을 갖춘 원거리 플레이 스타일",
      "안전 거리 전투 - 사용자가 쉽게 표적이 되지 않음",
      "상당한 기동성과 군중 제어 옵션",
      "근접 무기로 위험을 감수하고 싶지 않은 플레이어에게 적합",
      "기술 강탈 방법을 위한 단서 찾기가 포함된 복잡한 퀘스트 라인",
      "고유 개화 자원 시스템 - 최대 100포인트",
      "우산이 자동으로 투사체를 발사하는 동안 숨겨진 검을 뽑을 수 있음",
    ],
  },

  {
    id: "soulshade-umbrella",
    name: "소울쉐이드 엄브렐러 (Soulshade Umbrella)",
    type: "Umbrella",
    path: "Skillbind - Deluge",
    image: require("../../../../assets/martial_art_weapons/soulshade_umbrella.png"),
    description:
      "우산의 지원형 대체 무기이며, 파나시아 팬과 함께 유닛을 치유할 수 있는 유일한 무기입니다. 이 무기는 치유를 제공하여 지원하는 데 전념하므로 멀티플레이어에 매우 적합하지만, 피해량은 심각하게 부족합니다. 전투 중에는 뒤로 물러나 치유만 제공하는 무기로 간주됩니다.",
    playstyle:
      "순간 치유 및 지속 치유, 단일 대상 및 그룹 회복, 부활 능력, 팀 피해 버프를 갖춘 지원형 힐러",

    howToGet: {
      method: "Skill Theft",
      location: "개봉(Kaifeng) 지역 동부의 소울쉐이드 엄브렐러 역참",
      details:
        "개봉 지역을 잠금 해제하려면 챕터 1: Heaven Has No Pier를 완료해야 합니다. 은신으로 역참 이동: 왼쪽 집으로 들어가 경비병 암살, 제자 처치, 상자 약탈, 관 사다리를 통해 은신처로 하강, 매달린 관 구역 정리, 목표 구역으로 등반, 마스터에게 기술 강탈 수행.",
    },

    stats: {
      strengths: ["Support", "Survivability", "Difficulty"],
      weaknesses: ["Mobility", "DPS", "Control"],
    },

    skills: [
      {
        name: "Floating Grace (부유하는 은혜)",
        type: "Martial Art",
        description:
          "우산을 보내 자신과 근처 아군에게 8초 동안 15% 증가된 피해를 부여하고 한 번 치유합니다.",
        recovery: "60.0s",
        key: "Q",
      },
      {
        name: "Echoes of a Thousand Plants (천초의 메아리)",
        type: "Special",
        description:
          "우산을 공중으로 던지고 손잡이에서 숨겨진 검을 뽑습니다. 다른 무기로 전환하거나 숨겨진 검의 기본 스킬을 사용할 수 있습니다. 치유량을 15% 증가시키고 시간이 지남에 따라 물방울을 생성합니다(최대 60). 우산은 공중에 떠서 당신을 따라다니며, 근처의 HP 비율이 가장 낮은 아군(자신 포함)을 자동으로 치유합니다. 자신을 치유할 때 치유 효과가 50% 증가합니다. 숨겨진 검을 휘두르는 동안 특수 스킬을 사용하면 우산을 일찍 회수할 수 있습니다.",
        recovery: "60.0s",
        key: "~",
      },
      {
        name: "Umbrella - Light Attack (우산 - 경공격)",
        type: "Light Attack",
        description:
          "우산을 휘둘러 최대 3회의 경공격을 가하며, 근거리에서 중거리 범위의 피해를 입힙니다.",
        recovery: "0.1s",
        key: "Left Click",
      },
      {
        name: "Umbrella - Heavy Attack (우산 - 중공격)",
        type: "Heavy Attack",
        description: "우산을 전방으로 보내 회전 공격을 수행합니다.",
        recovery: "1.6s",
        key: "R",
      },
      {
        name: "Pale Petal (창백한 꽃잎)",
        type: "Charged",
        description:
          "우산을 전방으로 보내 회전 공격을 수행합니다. 대상이 이미 지친(Exhausted) 상태라면 공격은 지친 상태의 지속 시간을 연장합니다. 스킬을 길게 누르면 피해와 효과 지속 시간이 모두 증가합니다.",
        key: "Hold R",
      },
      {
        name: "Umbrella - Conversion (우산 - 전환)",
        type: "Dual-Weapon",
        description:
          "무기를 우산으로 전환하고 휘둘러 피해를 줍니다. 치유량을 5% 증가시키고 일정 시간 동안 물방울을 생성합니다(최대 30).",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Royal Remedy (왕실의 치료)",
        type: "Support/Martial Arts/Recover",
        description:
          "파나시아 팬의 무학 스킬인 Cloudburst Healing으로 생성된 물의 분신의 치유 효과를 10% 증가시킵니다. 범위 내에 있으면 지속 치유를 받을 때마다 물방울 1개를 획득합니다.",
      },
      {
        name: "Restoring Blossom (회복의 꽃)",
        type: "Support/Buff/Stacking",
        description:
          "치명타 치유를 하면 3초 동안 육성(Nurturing) 1중첩을 적용하여 받는 치유량을 2% 증가시키며, 최대 3회 중첩됩니다.",
      },
      {
        name: "Esoteric Revival (비전 부활)",
        type: "Support/Buff/Recover",
        description:
          "파나시아 팬의 감각 스킬인 Resurrection(부활)의 치유량을 부활된 대상에 대해 50% 증가시킵니다.",
      },
      {
        name: "Mending Loom (수선의 베틀)",
        type: "Support/Buff/Recover",
        description:
          "소울쉐이드 엄브렐러의 특수 스킬 Echoing Grow를 시전하면 물방울 5개를 회복하고, 소모한 물방울 100개당 최대 HP의 10%를 추가로 회복합니다. (소울쉐이드 엄브렐러를 Skillbind - Deluge 무기고의 일부로 사용할 때)",
      },
    ],

    gearSets: [
      {
        name: "Ivorybloom Set (아이보리블룸 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "치명타 확률 +0.1%",
          fourSet:
            "최대 HP일 때, 치명타 치유 및 피해를 입힐 확률이 5% 추가되며, 치명타 치유 및 피해의 효과가 15% 증가합니다.",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Whirlsnow Set (월스노우 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "물리 방어력 +1",
          fourSet:
            "한 번의 피해로 최대 HP의 40% 이상을 잃거나 HP가 20% 미만으로 떨어지면, 5초 이내에 받는 다음 치유가 최대 HP의 25%를 추가로 회복합니다. 이 효과는 60초마다 한 번 발동합니다.",
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
        name: "Buff Enhancement (버프 강화)",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "무학 스킬을 통해 자신과 아군이 지친 적에게 보너스 피해를 줄 수 있습니다. 소울쉐이드 엄브렐러와 파나시아 팬을 모두 장착하면 비술(Mystic Arts)의 피해가 증가합니다.",
      },
      {
        name: "물리 공격력 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "민첩성(Agility)으로 최소 물리 공격력을 증가시킬 수 있습니다.",
      },
      {
        name: "치명타 치유 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "특수 스킬의 치명타 치유 효과를 증가시킵니다.",
      },
      {
        name: "Skillbind 속성 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Skillbind(속성) 공격력을 증가시킵니다. 또한 최소 Skillbind 공격력에 따라 Skillbind 관통력을 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Skillbind 공격력에 비례하여 추가 치유를 제공합니다. 모든 스킬은 속성 공격력에 기반하여 피해를 주며, Skillbind 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Dewdrop (물방울)",
        description:
          "파나시아 팬과 소울쉐이드 엄브렐러가 사용하는 특수 무학 자원으로, 최대 100포인트입니다.",
      },
      {
        name: "Inner Demon - Healing Reduction (내면의 악마 - 치유 감소)",
        description:
          "캠페인 및 미스터리 보스에 대한 첫 클리어 도전을 완료하기 전에는 전투가 내면의 악마에 영향을 받아 치유 효과가 크게 감소합니다.",
      },
      {
        name: "Sense Skill (감각 스킬)",
        description:
          "특정 특수 상황에서 해당 스킬이 다른 형태로 변형될 수 있습니다.",
      },
      {
        name: "Mystic Art - DMG Up (비술 - 피해 증가)",
        description:
          "소울쉐이드 엄브렐러와 파나시아 팬을 모두 장착하면 비술(Mystic Arts)의 피해가 20% 증가합니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최소 물리 공격력 > 최대 물리 공격력 > 치명타 확률",
      "지원형 힐러 무기 - 파나시아 팬 외에 치유할 수 있는 유일한 무기",
      "멀티플레이어 지원에 강력하게 편중됨",
      "피해량 심각하게 부족",
      "전투 뒤쪽에서 치유를 제공하는 데 가장 적합",
      "순간 치유와 지속 치유 모두 갖춤",
      "단일 대상 및 그룹 회복 커버",
      "부활 능력으로 패배한 아군을 전선에 복귀시킬 수 있음",
      "팀 전체 피해 버프 제공(8초 동안 피해 15% 증가)",
      "파나시아 팬과 Skillbind - Deluge 경로 공유",
      "물방울 자원 시스템 사용(최대 100포인트)",
      "우산이 HP가 가장 낮은 아군을 자동 치유하는 동안 숨겨진 검을 뽑을 수 있음",
      "치유량 15% 증가 및 시간 경과에 따라 물방울 생성",
      "파나시아 팬과 시너지 - 함께 장착 시 비술 피해 20% 증가",
      "개봉 지역을 잠금 해제하려면 챕터 1 완료 필요",
    ],
  },

  {
    id: "stormbreaker-spear",
    name: "스톰브레이커 스피어 (Stormbreaker Spear)",
    type: "Spear",
    path: "Stonesplit - Might",
    image: require("../../../../assets/martial_art_weapons/stormbreaker_spear.png"),
    description:
      "이 무기는 들어오는 피해를 받아내는 것을 선호하는 플레이어를 위해 특별히 설계되었습니다. 스톰브레이커 스피어는 생존력을 높여주는 여러 보호막과 피해 감소 자원을 사용자에게 제공합니다. 그리고 기동성이 감소하여 게임 플레이를 이해하기 쉽습니다. 피해를 입히는 것이 전문은 아니지만, 적절하게 사용하면 큰 피해를 줄 수 있습니다.",
    playstyle:
      "보호막, 피해 감소, 방해 저항, 도발 능력을 갖춘 탱커 - 광범위한 AoE 차지 스킬로 팀의 피해 흡수 역할 수행",

    howToGet: {
      method: "Story Progression",
      details:
        '초반 퀘스트 중 하나를 완료하고 Wang 장군을 방문하면 메일로 스톰브레이커 스피어를 받게 됩니다. 수신함을 확인하여 "Raging Tides General\'s Gift"를 수령하십시오(메인 메뉴 > 우측 상단 편지).',
    },

    stats: {
      strengths: ["Survivability", "Control", "DPS"],
      weaknesses: ["Mobility", "Support", "Difficulty"],
    },

    skills: [
      {
        name: "Storm Roar (폭풍의 포효)",
        type: "Martial Art",
        description:
          "창을 흔들어 음파를 방출하여 근처의 적을 도발(Taunt)하고 8초 동안 감전(Shocked) 상태로 만들며, 16초 동안 20%의 피해 감소를 얻습니다(멀티플레이어 캠페인 보스 타격 시 40%). 스킬 사용 중 불굴(Fortitude)을 획득합니다.",
        recovery: "20.0s",
        key: "Q",
      },
      {
        name: "Thunder Shock (뇌격)",
        type: "Special",
        description:
          "전의(Fighting Spirit) 2바를 소모하여 창을 고정하고 전방으로 회전 발차기를 날린 후, 공중제비 찍기를 하여 대상을 넘어뜨리고 8초 동안 취약(Vulnerability)을 적용합니다. 스킬 사용 중 불굴을 획득합니다.",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Spear - Light Attack (창 - 경공격)",
        type: "Light Attack",
        description: "장창을 휘둘러 최대 4회의 경공격을 수행합니다.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Fury Spear (분노의 창)",
        type: "Charged",
        description:
          "차지 후, 찌르기 난무를 펼쳐 높은 피해를 줍니다. 마지막 타격에서 북소리(Drumbeat)를 획득합니다. 스킬 사용 중 불굴을 획득합니다.",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "Spear - Heavy Attack (창 - 중공격)",
        type: "Heavy Attack",
        description: "장창을 휘둘러 최대 3회의 중공격을 수행합니다.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Spear - Conversion (창 - 전환)",
        type: "Dual-Weapon",
        description: "창으로 전환하여 휩쓸기 공격을 수행합니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Exquisite Scenery (절경)",
        type: "Defense/Martial Arts/Counter",
        description:
          "썬더크라이 블레이드(Thundercry Blade)로 방어에 성공하면 특수 반격이 활성화됩니다. 감각 스킬 또는 중공격을 누르면 차지 없이 1단계 차지 중공격을 시전합니다. 이 효과는 10초마다 한 번 발동할 수 있습니다. 변형 콤보로 대상을 타격하면 전의 1바를 회복합니다(시전 당 1바 제한).",
      },
      {
        name: "Trapped Beast (갇힌 짐승)",
        type: "Defense/Buff/Recover",
        description:
          "HP가 30% 미만일 때 피해를 입으면 궁지에 몰린 짐승(Cornered Beast)이 발동하여 최대 HP의 30%까지 흡수하는 보호막을 생성합니다. 이 효과는 4초 동안 지속되며 300초마다 한 번 발동할 수 있습니다.",
      },
      {
        name: "Art of Resistance (저항의 기술)",
        type: "Defense/Buff",
        description:
          "자신의 HP 보호막 지속 시간과 그 원천 스킬의 보너스 효과를 4초 연장합니다.",
      },
      {
        name: "Rock Solid (반석)",
        type: "Defense/Martial Arts/DMG Reduction",
        description:
          "보스 유닛을 도발한 후 스톰브레이커 스피어의 Storm Roar 피해 감소량을 20% 증가시키고, 보스가 아닌 유닛을 도발한 후에는 5% 증가시켜 총 20%까지 증가시킵니다. 피해 감소가 활성화된 동안 가하는 모든 피해가 10% 감소합니다. 스톰브레이커 스피어를 Stonesplit - Might 무기고의 일부로 사용할 때 권장됩니다.",
      },
    ],

    gearSets: [
      {
        name: "Rainwhisper Set (레인위스퍼 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP +40",
          fourSet:
            "모든 치명타 피해 및 치유를 10% 증가시키고, HP 보호막이 있을 경우 15% 추가로 증가시킵니다.",
        },
        howToObtain: [
          "Campaign - Unbound Cavern",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Moonflare Set (문플레어 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP +40",
          fourSet:
            "방어 중 공격 시 30% 확률로 최대 HP의 10%까지 흡수하는 보호막을 생성하며, 20초간 지속됩니다. 이미 보호막이 존재하는 경우 추가로 2% HP를 회복합니다. 이 효과는 60초마다 한 번 발동할 수 있습니다.",
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
        name: "최대 전의(Fighting Spirit) 증가",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "최대 전의를 1바 증가시킵니다.",
      },
      {
        name: "정밀도 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "신체(Body)에 따라 정밀도를 증가시킵니다(14 Body에서 상한).",
      },
      {
        name: "피격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "차지 스킬 및 변형 콤보 적중 직후 받는 물리 피해를 감소시킵니다.",
      },
      {
        name: "Stonesplit 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Stonesplit(속성) 공격력을 증가시킵니다. 또한 최대 Stonesplit 공격력에 비례하여 Stonesplit 관통력을 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Stonesplit 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Fighting Spirit (전의)",
        description:
          "썬더크라이 블레이드와 스톰브레이커 스피어의 고유 무학 자원입니다. 방어하거나 시간이 지남에 따라 자연적으로 회복되며, 특정 스킬 사용 시 소모됩니다.",
      },
      {
        name: "Drumbeat (북소리)",
        description:
          "6초 동안 차지 스킬 피해를 15% 증가시킵니다. 스톰브레이커 스피어 전용입니다. 썬더크라이 블레이드 무학 스킬의 감각 스킬을 발동할 수 있습니다.",
      },
      {
        name: "Taunt (도발)",
        description: "적들은 도발된 대상을 우선적으로 공격합니다.",
      },
      {
        name: "Shocked (감전)",
        description: "가하는 피해를 20% 감소시킵니다.",
      },
      {
        name: "Vulnerable (취약)",
        description:
          "받는 HP 및 기 피해가 8% 증가합니다. 피해 원천이 썬더크라이 블레이드 또는 스톰브레이커 스피어를 사용하는 경우 추가로 8% 증가합니다.",
      },
      {
        name: "Fortitude (불굴)",
        description: "피격 시 군중 제어(CC)를 제외한 모든 것에 면역이 됩니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최대 HP",
      "들어오는 피해를 받아내도록 설계됨",
      "다양한 보호막 및 피해 감소 자원",
      "강력한 생존력 - 팀의 피해 흡수 역할 수행 가능",
      "적의 어그로를 제어하는 도발 능력",
      "방해 저항(불굴) 장착",
      "차지 스킬로 적을 모아 광범위한 AoE 피해를 줄 수 있음",
      "감소된 기동성으로 게임 플레이 이해가 쉬움",
      "피해량이 전문은 아니지만 적절히 사용하면 상당한 피해 가능",
      "썬더크라이 블레이드와 Stonesplit - Might 경로 및 전의 자원 공유",
      "Storm Roar는 20% 피해 감소 부여 (멀티플레이어 캠페인 보스 상대로 40%)",
      "전용 북소리 효과로 차지 스킬 피해 15% 증가",
      "게임 초반 Wang 장군의 메일에서 획득",
    ],
  },

  {
    id: "thundercry-blade",
    name: "썬더크라이 블레이드 (Thundercry Blade)",
    type: "Mo Blade",
    path: "Stonesplit - Might",
    image: require("../../../../assets/martial_art_weapons/thundercry_blade.png"),
    description:
      "이 무기는 들어오는 피해를 받아내는 것을 선호하는 플레이어를 위해 특별히 설계되었습니다. 썬더크라이 블레이드는 생존력을 높여주는 여러 보호막을 사용자에게 제공합니다. 그리고 기동성이 감소하여 게임 플레이를 이해하기 쉽습니다. 피해를 입히는 것이 전문은 아니지만, 적절하게 사용하면 큰 피해를 줄 수 있습니다.",
    playstyle:
      "보호막, 피해 감소, 방해 저항을 갖춘 탱커 - 광범위한 차지 스킬로 팀의 피해 흡수 역할을 수행하며 AoE 피해를 입힘",

    howToGet: {
      method: "Quest Reward, Skill Theft, or Join Sect",
      location: "개봉(Kaifeng) 지역의 천정 무술관(Well of Heaven Martial Camp)",
      details:
        '청하의 "Oddities - Mystery of Five Tones" 조우 퀘스트 보상, 또는 개봉 지역 천정 무술관에서 기술 강탈, 또는 천정 문파(Well of Heaven Sect) 가입으로 획득 가능.',
    },

    stats: {
      strengths: ["Survivability", "Control", "DPS"],
      weaknesses: ["Mobility", "Support", "Difficulty"],
    },

    skills: [
      {
        name: "Predator's Shield (포식자의 방패)",
        type: "Martial Art",
        description:
          "8초 동안 최대 HP의 25%에 해당하는 보호막을 부여하고 전의를 2바 증가시킵니다. 북소리(Drumbeat)를 가지고 있다면 제거되어 감각 스킬을 발동합니다.",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Shifting Heaven (움직이는 하늘)",
        type: "Martial Art",
        description:
          "8초 동안 지속되는 최대 HP의 25%에 해당하는 보호막을 부여합니다. 또한 전의 2바와 돌파(Breakthrough)를 획득합니다. (감각 스킬 - 북소리가 있을 때 발동)",
        recovery: "12.0s",
        key: "Q (with Drumbeat)",
      },
      {
        name: "Sunrush Gale (태양 돌진 질풍)",
        type: "Special",
        description:
          "전의 2바를 소모하여 맥도(Mo Blade)를 땅에 꽂아 소용돌이를 생성해 근처의 적을 끌어당깁니다(보스에게는 효과 없음). 그 후 맥도를 회전시켜 강력한 휩쓸기 공격을 가하고 집중(Focus)을 획득합니다. 스킬 사용 중 불굴을 획득합니다.",
        recovery: "7.0s",
        key: "~",
      },
      {
        name: "Mo Blade - Light Attack (맥도 - 경공격)",
        type: "Light Attack",
        description:
          "맥도를 휘둘러 최대 3회의 경공격을 수행하며 가벼운 피해를 줍니다.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Galecloud Cleave (질풍구름 베기)",
        type: "Charged",
        description:
          "가벼운 차지 스킬입니다. 차지 후 맥도를 회전시켜 이중 휩쓸기 타격을 가해 넓은 지역에 중간 정도의 피해를 줍니다. 차지 중에 이동할 수 있습니다. 차지는 3단계가 있으며 단계마다 피해가 증가합니다. 3단계에서 손을 떼면 전의 1바를 소모하여(가능한 경우) 피해를 20% 증가시키고 경공격 변형 콤보 스킬을 잠금 해제합니다. 스킬 사용 중 불굴을 획득합니다.",
        recovery: "0.2s",
        key: "Hold Left Click",
      },
      {
        name: "Light Attack Varied Combo (경공격 변형 콤보)",
        type: "Light Attack",
        description:
          "전의 1바를 소모하여 맥도를 반대 방향으로 휘둘러 넓은 지역에 중간 정도의 피해를 주는 휩쓸기 공격을 수행합니다. 스킬 사용 중 불굴을 획득합니다. (Galecloud Cleave 3단계 후 잠금 해제)",
        recovery: "1.0s",
        key: "Left Click (after Galecloud Cleave)",
      },
      {
        name: "Mo Blade - Heavy Attack (맥도 - 중공격)",
        type: "Heavy Attack",
        description:
          "맥도로 최대 3회의 중공격을 수행하며, 각각 낮은 피해를 줍니다.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Avalanche (눈사태)",
        type: "Charged",
        description:
          "차지 가능한 중공격입니다. 위로 베어 올린 다음 아래로 내려쳐 좁은 지역에 높은 피해를 줍니다. 차지 중에 이동할 수 있습니다. 스킬에는 3단계의 위력이 있으며 각각 피해가 증가합니다. 3단계에서 전의 1바를 소모하여(가능한 경우) 피해를 20% 증가시키고 중공격 콤보를 잠금 해제합니다. 스킬 사용 중 불굴을 획득합니다.",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "Varied Combo (변형 콤보)",
        type: "Heavy Attack",
        description:
          "전의 1바를 소모하여 공중으로 도약해 뒤집으며 땅을 강타해 좁은 지역에 높은 피해를 주고 대상을 넘어뜨립니다. 스킬 사용 중 불굴을 획득합니다. (Avalanche 3단계 후 잠금 해제)",
        recovery: "1.0s",
        key: "R (after Avalanche)",
      },
      {
        name: "Mo Blade - Conversion (맥도 - 전환)",
        type: "Dual-Weapon",
        description: "무기를 맥도로 전환하고 휘둘러 가벼운 피해를 줍니다.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Exquisite Scenery (절경)",
        type: "Defense/Martial Arts/Counter",
        description:
          "썬더크라이 블레이드로 방어에 성공하면 특수 반격이 활성화됩니다. 감각 스킬 또는 중공격을 누르면 차지 없이 1단계 차지 중공격을 시전합니다. 이 효과는 10초마다 한 번 발동할 수 있습니다. 변형 콤보로 대상을 타격하면 전의 1바를 회복합니다(시전 당 1바 제한).",
      },
      {
        name: "Trapped Beast (갇힌 짐승)",
        type: "Defense/Buff/Recover",
        description:
          "HP가 30% 미만일 때 피해를 입으면 궁지에 몰린 짐승(Cornered Beast)이 발동하여 최대 HP의 30%까지 흡수하는 보호막을 생성합니다. 이 효과는 4초 동안 지속되며 300초마다 한 번 발동할 수 있습니다.",
      },
      {
        name: "Art of Resistance (저항의 기술)",
        type: "Defense/Buff",
        description:
          "자신의 HP 보호막 지속 시간과 그 원천 스킬의 보너스 효과를 4초 연장합니다.",
      },
      {
        name: "Rock Solid (반석)",
        type: "Defense/Martial Arts/DMG Reduction",
        description:
          "보스 유닛을 도발한 후 스톰브레이커 스피어의 Storm Roar 피해 감소량을 20% 증가시키고, 보스가 아닌 유닛을 도발한 후에는 5% 증가시켜 총 20%까지 증가시킵니다. 피해 감소가 활성화된 동안 가하는 모든 피해가 10% 감소합니다. 스톰브레이커 스피어를 Stonesplit - Might 무기고의 일부로 사용할 때 권장됩니다.",
      },
    ],

    gearSets: [
      {
        name: "Rainwhisper Set (레인위스퍼 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP +40",
          fourSet:
            "모든 치명타 피해 및 치유를 10% 증가시키고, HP 보호막이 있을 경우 15% 추가로 증가시킵니다.",
        },
        howToObtain: [
          "Campaign - Unbound Cavern",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Moonflare Set (문플레어 세트)",
        pieces: 4,
        bonuses: {
          twoSet: "최대 HP +40",
          fourSet:
            "방어 중 공격 시 30% 확률로 최대 HP의 10%까지 흡수하는 보호막을 생성하며, 20초간 지속됩니다. 이미 보호막이 존재하는 경우 추가로 2% HP를 회복합니다. 이 효과는 60초마다 한 번 발동할 수 있습니다.",
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
        name: "차지 계산 강화",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "차지 스킬과 변형 콤보는 절대 마모(Abrasion)되지 않으며 더 많은 치명타 피해를 줍니다.",
      },
      {
        name: "최대 HP 증가",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "신체(Body)로 최대 HP를 증가시킬 수 있습니다.",
      },
      {
        name: "차지 치명타 강화",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "차지 스킬 및 관련 변형 콤보의 치명타 확률을 증가시킵니다.",
      },
      {
        name: "Stonesplit 증가",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Stonesplit(속성) 공격력을 증가시킵니다. 또한 최대 Stonesplit 공격력에 비례하여 Stonesplit 관통력을 증가시킵니다.",
      },
      {
        name: "속성 공격 피해 강화",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "모든 스킬은 속성 공격력에 기반하여 피해를 주며, Stonesplit 피해는 추가로 증가합니다.",
      },
    ],

    effects: [
      {
        name: "Fighting Spirit (전의)",
        description:
          "썬더크라이 블레이드와 스톰브레이커 스피어의 고유 무학 자원입니다. 방어하거나 시간이 지남에 따라 자연적으로 회복되며, 특정 스킬 사용 시 소모됩니다.",
      },
      {
        name: "Breakthrough (돌파)",
        description:
          "12초 동안 차지 스킬의 피해를 30% 증가시키고 차지 중 지구력 소모를 제거합니다.",
      },
      {
        name: "Shield (보호막)",
        description:
          "고정 기 피해를 제외한 HP 피해 및 관련 기 피해를 흡수합니다.",
      },
      {
        name: "Focus (집중)",
        description:
          "5초 이내에 사용되는 다음 차지 스킬은 50% 더 빠르게 충전됩니다.",
      },
      {
        name: "Drumbeat (북소리)",
        description:
          "6초 동안 차지 스킬 피해를 15% 증가시킵니다. 스톰브레이커 스피어 전용입니다. 썬더크라이 블레이드 무학 스킬의 감각 스킬을 발동할 수 있습니다.",
      },
    ],

    notes: [
      "장비 튜닝 우선순위: 최대 HP",
      "들어오는 피해를 받아내도록 설계됨",
      "다양한 보호막 능력으로 생존력 증가",
      "감소된 기동성으로 게임 플레이 이해가 쉬움",
      "피해량이 전문은 아니지만 적절히 사용하면 상당한 피해 가능",
      "스톰브레이커 스피어와 Stonesplit - Might 경로 및 전의 자원 공유",
      "Predator's Shield는 25% HP 보호막과 +2 전의 바를 부여",
      "북소리 버프가 있으면 Shifting Heaven 감각 스킬 발동",
      "돌파 효과: 차지 스킬 피해 +30%, 12초간 지구력 소모 없음",
      "불굴은 피격 시 군중 제어를 제외한 모든 것에 면역 부여",
      "단계별 피해가 증가하는 3단계 차지 공격",
      "3단계 차지는 변형 콤보 스킬 잠금 해제(전의 1바 소모)",
      "Sunrush Gale 소용돌이는 적을 끌어당김(보스에게는 효과 없음)",
      "스톰브레이커 스피어와 Rainwhisper 및 Moonflare 장비 세트 공유",
      "북소리 효과를 통해 스톰브레이커 스피어와 시너지 효과",
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
