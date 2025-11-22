import { Weapon } from "../../../types/weapons";

export const weaponDatabase: Weapon[] = [
  {
    id: "heavenquaker-spear",
    name: "Heavenquaker Spear",
    type: "Spear",
    path: "Bellstrike - Umbra",
    image: require("../../../../assets/martial_art_weapons/heavenquaker_spear.png"),
    description:
      "A Martial Arts Weapon that focuses on inflicting Bleeding Damage to drain enemies' HP. The Heavenquaker Spear allows you to inflict Bleed very quickly, providing significant AoE Damage against hordes of enemies.",
    playstyle:
      "Bleed-focused DPS with sustained damage over time and AoE capabilities",

    howToGet: {
      method: "Skill Theft",
      location: "Heavenquaker Spear Sanctum in Qinghe Region",
      level: 8,
      details:
        'Complete "Skill Theft: Unearned Lesson" quest from Qiu Yuehai at Peace Bell Tower. Requires Dragon Key to access the Sanctum.',
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Survivability", "Control"],
    },

    skills: [
      {
        name: "Sober Sorrow",
        type: "Martial Art",
        description:
          "Spin the long spear with full strength, performing six consecutive sweeping attacks against nearby enemies and dealing massive damage. After the skill ends, gain buffs for 12 seconds based on combo hits: Droplet (<5 hits), Spring Surge (5+ hits), or River Flow (10+ hits).",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Sweep All",
        type: "Special",
        description:
          "Swing the spear to deal damage to nearby enemies. Enhanced based on current buff: Droplet (moderate damage), Spring Surge (increased damage/range, reduces defense), River Flow (further increased damage/range, reduces defense, applies Bleed).",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "Spear - Light Attack",
        type: "Light Attack",
        description: "Swing a long spear to perform up to four light attacks.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Drifting Thrust",
        type: "Charged",
        description:
          "Consume Endurance to charge, then unleash a flurry of thrust with a long spear, dealing multiple hits to enemies ahead. Grants Fortitude (immune to all but CC when hit) during the skill.",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "Spear - Heavy Attack",
        type: "Heavy Attack",
        description: "Swing a long spear to perform up to three heavy attacks.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Spear - Conversion",
        type: "Dual-Weapon",
        description: "Switch to spear and perform a sweeping attack.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Horizon",
        type: "Attack/Martial Arts/Pursuit",
        description:
          "After casting Strategic Sword's Martial Arts Skill, Special Skill, or Charged Skill, press at perfect timing to cast Crisscrossing Sword and unleash follow-up attacks. If target has 5 stacks of bleed, remove all bleed stacks and deal high Bleed damage once.",
      },
      {
        name: "Wolfchaser's Art",
        type: "Martial Arts/Buff",
        description:
          "Reduces required combo number to gain Sober Sorrow buff from 5/10 to 4/8. Each time Sober Sorrow hits a boss with Bleed effect, 20-100% chance to increase combo count by 1 based on Bleed stacks.",
      },
      {
        name: "Adaptive Steel",
        type: "Attack/Support/Buff",
        description:
          "Spear: Attacks ignore 12.5% of target's Physical Defense.",
      },
      {
        name: "Insightful Strike",
        type: "Attack/Damage Boost/DMG Reduction",
        description:
          "Dealing Affinity DMG generates Focus. When Focus is full, enter Concentration state for 10s (increases Affinity DMG by 10%, 5% chance to reduce damage taken by 40% upon hit).",
      },
    ],

    gearSets: [
      {
        name: "Hawkwing Set",
        pieces: 4,
        bonuses: {
          twoSet: "Affinity Rate +0.1%",
          fourSet:
            "When any damage triggers Affinity, gain Hawkwing: increases Physical Attack by 2% for 5s, stacking up to 5 times.",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Eaglerise Set",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "Dealing DoT or healing grants Eaglerise: Reduces damage taken by 1.2% for 10s (max 5 stacks). At max stacks, Eagle Guard reduces next damage by 90% (halved for boss damage). 30s cooldown.",
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
        name: "Damage Over Time Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Hitting a target with Charged Skill increases their damage-over-time taken.",
      },
      {
        name: "Physical Attack Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Power can increase Max Physical Attack.",
      },
      {
        name: "Damage Over Time Enhancement II",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "When calculating category damage, further increases Affinity DMG.",
      },
      {
        name: "Bellstrike Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Bellstrike (Attribute) Attack. Also increases Bellstrike Penetration based on Max Bellstrike Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All skills deal damage based on Attribute Attack, while Bellstrike damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Bleed",
        description:
          "Deals continuous HP damage over time, stacking up to 5 layers.",
      },
      {
        name: "Droplet",
        description: "Increase HP damage dealt by 10%.",
      },
      {
        name: "Spring Surge",
        description: "Increase HP damage dealt by 15%.",
      },
      {
        name: "River Flow",
        description: "Increase HP damage dealt by 20%.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Affinity Rate",
      "Works excellently with Strategic Sword for bleed synergy",
      "Requires Dragon Key to access Sanctum",
    ],
  },

  {
    id: "strategic-sword",
    name: "Strategic Sword",
    type: "Sword",
    path: "Bellstrike - Umbra",
    image: require("../../../../assets/martial_art_weapons/strategic_sword.png"),
    description:
      "The second type of Martial Art you can opt for when using a Sword and a Spear. Rather than just inflicting pure damage, this Martial Art focuses on inflicting Bleeding Damage to drain your enemies' HP. At the same time, you continue to damage them with simple attacks. This Martial Art is very flexible as it allows you to attack passively bigger enemies while you deal with the rest of them, or just fully focus on killing individual targets one by one. Also boasts a lot of mobility but requires large amounts of Endurance to keep the pace up.",
    playstyle:
      "Bleed-focused DPS with sustained damage over time, high mobility, and flexible target management - requires high Endurance management",

    howToGet: {
      method: "Skill Theft",
      location: "Strategic Sword Sanctum south of Qinghe Region",
      details:
        "Requires Dragon Key. Fast-travel to Back Mountain Teleporter. Enter sanctum via Loong Herm Dragon Pillar. Navigate through militiamen guards, loot 2 chests, head to eastern side, go up ramp to second floor, use blue circle for Skill Theft.",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Survivability", "Control"],
    },

    skills: [
      {
        name: "Inner Track Slash",
        type: "Martial Art",
        description:
          "Dash to an enemy and perform a quick slash, dealing light damage and applying Bleed. During the follow-through, press again to deliver four consecutive slashes to enemies in front, applying Bleed.",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Inner Balance Strike III",
        type: "Special",
        description:
          "Consume Endurance to evade backward, creating distance, then strike enemies in your original location multiple times. If a target has 5 stacks of Bleed, immediately deal high damage and remove the Bleed stacks. This effect can trigger only once per use on the same target. Each hit applies Bleed.",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "Sword - Light Attack",
        type: "Light Attack",
        description: "Perform up to four light attacks with a Longsword.",
        recovery: "0.6s",
        key: "Left Click",
      },
      {
        name: "Second Track Slash",
        type: "Charged",
        description:
          "Consume Endurance to charge up and dash forward rapidly, dealing massive damage to enemies along the path. While dashing, you become invisible and immune to damage, applying Bleed with each hit.",
        recovery: "1.0s",
        key: "Hold R",
      },
      {
        name: "Sword - Heavy Attack",
        type: "Heavy Attack",
        description: "Perform up to three heavy attacks with a Longsword.",
        recovery: "0.9s",
        key: "R",
      },
      {
        name: "Sword - Conversion",
        type: "Dual-Weapon",
        description: "Switch to a Sword and slash.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Horizon",
        type: "Attack/Martial Arts/Pursuit",
        description:
          "After casting the Strategic Sword's Martial Arts Skill, Special Skill, or Charged Skill, press the skill button at the perfect timing during the ending phase to cast Crisscrossing Sword and unleash follow-up attacks. If the target has 5 stacks of bleed, remove all bleed stacks and deal high Bleed damage once.",
      },
      {
        name: "Wolfchaser's Art",
        type: "Martial Arts/Buff",
        description:
          "Reduces the required combo number to gain Heavenquaker Spear's Martial Art Skill, Sober Sorrow, buff from 5/10 to 4/8. Each time Sober Sorrow hits a boss with Bleed effect from you, there is a 20%/40%/60%/80%/100% chance to increase the combo count by 1 based on the number of Bleed stacks.",
      },
      {
        name: "Adaptive Steel",
        type: "Attack/Support/Buff",
        description:
          "Gain a Martial Skill based on the blade weapon you are using: Sword: 10% chance to apply a stack of Bleed to the target when dealing Affinity DMG. Spear: Attacks ignore 12.5% of target's Physical Defense. Dual Blades: After a perfect dodge, increase the next Martial Art Skill's damage within 8 seconds by 25%. Mo Blade: Increases the Critical DMG of Charged Skill and Parry Counter Skills by 20%. The Martial Skill of Sword has a 10-second Cooldown, while Dual Blades' Martial Skill has a cooldown of 25 seconds.",
      },
      {
        name: "Insightful Strike",
        type: "Attack/Damage Boost/DMG Reduction",
        description:
          "Dealing Affinity DMG generates Focus. When Focus is full, enter the Concentration state for 10 seconds. Concentration: Increases Affinity DMG by 10%. Upon hit, there's a 5% chance to reduce damage taken by 40%.",
      },
    ],

    gearSets: [
      {
        name: "Hawkwing Set",
        pieces: 4,
        bonuses: {
          twoSet: "Affinity Rate +0.1%",
          fourSet:
            "When any of your damage triggers Affinity, gain Hawkwing: increases Physical Attack by 2% for 5 seconds, stacking up to 5 times.",
        },
        howToObtain: [
          "Campaign - Still Shore",
          "Campaign - Gleaming Abyss",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Eaglerise Set",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "Dealing damage over time or healing grants 1 stack of Eaglerise: Reduces damage taken by 1.2% for 10 seconds, stacking up to 5 times. At max stacks, receives an Eagle Guard effect that reduces the next upcoming damage within 10 seconds by 90% (halved when this damage comes from a boss). This effect can only trigger once every 30 seconds.",
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
        name: "Bleed Mechanism Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Hitting an enemy affected by max Bleed stacks with certain skills can inflict high Bleed damage once.",
      },
      {
        name: "Affinity Rate Upgrade",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Power can increase Affinity Rate.",
      },
      {
        name: "Bleed Affinity Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "When calculating Bleed damage, it further increases Affinity Rate.",
      },
      {
        name: "Bellstrike Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Bellstrike (Attribute) Attack. Also increases Bellstrike Penetration based on Max Bellstrike Attack.",
      },
      {
        name: "Attribute Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All skills deal damage based on Attribute Attack, while Bellstrike damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Bleed",
        description:
          "Deals continuous HP damage over time, stacking up to 5 layers.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Affinity Rate",
      "Pairs excellently with Heavenquaker Spear - both share Bellstrike path",
      "Focuses on Bleeding Damage to drain enemy HP over time",
      "Very flexible - can passively attack bigger enemies while dealing with others",
      "Can focus on eliminating individual targets one by one",
      "High mobility for repositioning and kiting",
      "Requires large amounts of Endurance to maintain pace",
      "Second Track Slash grants invisibility and damage immunity while dashing",
      "Inner Balance Strike III deals high damage when target has 5 Bleed stacks",
      "Bleed stacks up to 5 layers for maximum damage",
      "Synergizes with Heavenquaker Spear through Wolfchaser's Art and Sword Horizon",
      "Requires Dragon Key to access Sanctum",
      "Shares Hawkwing and Eaglerise gear sets with Heavenquaker Spear",
    ],
  },

  {
    id: "panacea-fan",
    name: "Panacea Fan",
    type: "Fan",
    path: "Skillbind - Deluge",
    image: require("../../../../assets/martial_art_weapons/panacea_fan.png"),
    description:
      "The support-oriented alternative to the fan, and the only weapon, alongside the Soulshade Umbrella, that can heal units. This weapon is all about supporting by providing heals and even being able to revive allies, which makes it strongly oriented to multiplayer, but it severely lacks DMG, as it's thought to be a weapon you use while sitting back on battles, only providing heals.",
    playstyle:
      "Support healer with burst and sustained healing, single-target and group recovery, revival abilities, and team damage buffs",

    howToGet: {
      method: "Quest Reward, Skill Theft, or Join Sect",
      location: "Silver Needle Sanctum in Qinghe Region",
      details:
        "Possible reward from Oddities - Mystery of Five Tones Encounter Quest in Qinghe, OR Skill Theft at Silver Needle Sanctum (requires Dragon Key), OR join Silver Needle Sect. For Sanctum: Enter with Dragon Key at Loong Dragon Pillar, navigate past militiamen using stealth, reach Sect Master and perform Skill Theft.",
    },

    stats: {
      strengths: ["Support", "Survivability", "Difficulty"],
      weaknesses: ["Mobility", "DPS", "Control"],
    },

    skills: [
      {
        name: "Cloudburst Healing",
        type: "Martial Art",
        description:
          "Generates 20 points of Dewdrops when used. Summons a water clone at the target location that heals nearby allies once per second, restoring a small amount of HP. The spirit lasts for 7 seconds. If Dewdrops are full after using, the Sense Skill can be triggered.",
        recovery: "20.0s",
        key: "Q",
      },
      {
        name: "Endless Cloud",
        type: "Martial Art",
        description:
          "Consume all stacks of Dewdrops to provide a large burst of healing to all allies within range. If Soulshade Umbrella is equipped and the Special Skill Echoing Grow is not on cooldown, it will be automatically triggered. (Sense Skill - triggers when Dewdrops are full)",
        recovery: "1.0s",
        key: "Q (when Dewdrops full)",
      },
      {
        name: "Light Dust After Morning Rain",
        type: "Special",
        description:
          "Swings the fan, releasing a stream of water, consuming 50 Dewdrops, applying a 6-second healing effect to yourself and the ally with the lowest HP in the party, restoring a moderate amount of HP. If a target is selected in the party panel, the effect is fixed on that target. In non-Duel gameplay, the healing effect applied to yourself is increased by 30%. If there are Fatally Wounded allies nearby and the Sense Skill is not on cooldown, it switches to the Sense Skill.",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Resurrection",
        type: "Special",
        description:
          "When there's a Fatally Wounded player in the party, use this skill, consuming Dewdrops, to allow them to fight again. If the selected teammate is Fatally Wounded, revive that teammate. If a non-selected teammate is Fatally Wounded, revives the nearest Fatally Wounded teammate. Can also quickly revive Fatally Wounded teammates via the party list. The more Dewdrops consumed, the more HP recovered after revival. After reviving a target, gain the Abundant Dew effect for 5 seconds. (Sense Skill - triggers when ally is Fatally Wounded)",
        recovery: "0.2s",
        key: "~ (when ally Fatally Wounded)",
      },
      {
        name: "Fourfold Inquiry",
        type: "Light Attack",
        description: "Wield a fan to perform up to four Ranged Light Attacks.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Emerald Dewtouch",
        type: "Healing",
        description:
          "Restores a small amount of HP for yourself or an ally. Each segment restores 3, 5, and 12 Dewdrops for yourself. Prioritizes the target with the lowest HP percentage. If a target is selected in the party panel, restoration is fixed on that target.",
        key: "R",
      },
      {
        name: "Fan - Conversion",
        type: "Dual-Weapon",
        description:
          "Switch to a fan and swing it, restoring HP for yourself and one nearby ally over time.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Royal Remedy",
        type: "Support/Martial Arts/Recover",
        description:
          "Increases the healing effect of the water clone created by Panacea Fan's Martial Art Skill, Cloudburst Healing, by 10%. If you are within its range, gain 1 Dewdrop each time when receive healing over time.",
      },
      {
        name: "Restoring Blossom",
        type: "Support/Buff/Stacking",
        description:
          "Dealing Critical Healing applies one stack of Nurturing for 3 seconds, increasing healing received by 2%, stacking up to 3 times.",
      },
      {
        name: "Esoteric Revival",
        type: "Support/Buff/Recover",
        description:
          "Increases the healing of Panacea Fan's Perception Skill, Resurrection, by 50% on the revived target.",
      },
      {
        name: "Mending Loom",
        type: "Support/Buff/Recover",
        description:
          "Casting Soulshade Umbrella's Special Skill, Echoing Grow, restores 5 Dewdrops and additionally heals 10% of your Max HP for every 100 Dewdrops consumed. (when using Soulshade Umbrella as part of the Skillbind - Deluge Arsenal)",
      },
    ],

    gearSets: [
      {
        name: "Ivorybloom Set",
        pieces: 4,
        bonuses: {
          twoSet: "Critical Rate +0.1%",
          fourSet:
            "At Max HP, there's a bonus 5% chance to deal Critical Healing and Damage, and increases the effects of Critical Healing and Damage by 15%.",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Whirlsnow Set",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "When you lose more than 40% of Max HP in a single instance of damage or when your HP falls below 20%, the next healing you receive within 5 seconds restores an additional 25% of your Max HP. This effect triggers once every 60 seconds.",
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
        name: "Aquan Healing Boost",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Restores 2 bonus Dewdrops per second when you are within the range of a water clone you created.",
      },
      {
        name: "Max HP Increases",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "Max HP can be increased based on Defense. Maximum bonus requires 25 DEF.",
      },
      {
        name: "Heavy Attack Healing Boost",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Increases Heavy Attack's healing by 5% and further increases it based on Min Physical Attack, up to 5% increase at 250 Min Physical Attack.",
      },
      {
        name: "Skillbind Attribute Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Skillbind (Attribute) Attack. Also increases Skillbind DMG Bonus based on Min Skillbind Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Deals bonus healing based on Skillbind Attack. All skills deal damage based on Attribute Attack, while Skillbind damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Dewdrop",
        description:
          "A special martial arts resource used by Panacea Fan and Soulshade Umbrella, with a maximum of 100 Points.",
      },
      {
        name: "Inner Demon - Healing Reduction",
        description:
          "Before completing the first clear challenges against Campaign and Mysterious Bosses, battles with them are affected by inner demons, greatly reducing Healing Effects.",
      },
      {
        name: "Sense Skill",
        description:
          "In certain special cases, the corresponding skills may transform into other forms.",
      },
      {
        name: "Mystic Art - DMG Up",
        description:
          "When equipped with both Soulshade Umbrella and Panacea Fan, the damage of Mystic Arts is increased by 20%.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Critical Rate",
      "Primary healer weapon - only weapon besides Soulshade Umbrella that can heal",
      "Can revive Fatally Wounded allies in multiplayer",
      "Strongly oriented to multiplayer support",
      "Severely lacks damage output",
      "Best used while sitting back in battles, providing heals",
      "Features both burst (Endless Cloud) and sustained healing (Cloudburst Healing)",
      "Covers single-target and group recovery",
      "Provides team-wide damage buffs",
      "Shares Skillbind - Deluge path with Soulshade Umbrella",
      "Uses Dewdrop resource system (max 100 points)",
      "Water clone healing can be enhanced with Royal Remedy internal art",
    ],
  },

  {
    id: "inkwell-fan",
    name: "Inkwell Fan",
    type: "Fan",
    path: "Skillbind - Jade",
    image: require("../../../../assets/martial_art_weapons/inkwell_fan.png"),
    description:
      "The offensive alternative to the fan, entirely different from the Panacea Fan. Instead of providing heals, this weapon focuses on targeting individual targets from a safe distance where the user cannot be targeted. Provides considerable mobility and crowd control.",
    playstyle:
      "Ranged DPS with sustained damage, control, and airborne attack combos",

    howToGet: {
      method: "Skill Theft",
      location: "Inkwell Fan Sanctum in northern Qinghe Region",
      details:
        "Requires Dragon Key. Navigate through sanctum, collect 6 chests, and perform Skill Theft on the Master at the end.",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Difficulty", "Survivability", "Support"],
    },

    skills: [
      {
        name: "Jadewind Shield",
        type: "Martial Art",
        description:
          "Knock back nearby targets with the fan, creating a wind barrier that blocks all non-boss units and enemy projectiles for 8 seconds while jumping backward to keep distance. Using this skill makes you dodge incoming attacks and grants Enhanced Ballistics, stacking up to 2 times.",
        recovery: "15.0s",
        key: "Q",
      },
      {
        name: "Peak's Springless Silence",
        type: "Special",
        description:
          "Dashes forward and strikes the target upward. Applies brief Root. Hitting humanoid enemies puts them into Launch state. Hitting non-player enemies applies Lingering Bone mark. Hitting an enemy already under Launch or with your own Lingering Bone mark grants Riding the Wind effect. Creates a Water Clone at original location; casting again within 5s allows flashback to clone location.",
        recovery: "12.0s",
        key: "~",
      },
      {
        name: "Fan - Light Attack",
        type: "Light Attack",
        description: "Perform up to four ranged light attacks with a fan.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Forsaken Fame",
        type: "Charged",
        description:
          "After a brief charge, swings forward to release a whirlwind, dealing moderate damage. Hitting a humanoid enemy puts them into Launch state. Hitting a non-player enemy applies Lingering Bone mark.",
        key: "Hold Left Click",
      },
      {
        name: "Fan - Heavy Attack",
        type: "Heavy Attack",
        description:
          "Performs up to three segments of Heavy Attacks. When target is under Launch or afflicted with your own Lingering Bone mark, you can perceive to trigger a Sense Skill.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Moon Shatter Spring",
        type: "Heavy Attack",
        description:
          "Performs an Aerial Heavy Attack on an enemy under Launch or affected with your own Lingering Bone mark, leaping into the air and swinging the fan for a three-hit combo. With Riding the Wind effect, performs empowered five-hit combo dealing high damage, and grants Tenacity in non-Duel gameplay. 6-second cooldown after use.",
        key: "Press R (while targeting Airborne enemy)",
      },
      {
        name: "Fan - Conversion",
        type: "Dual-Weapon",
        description: "Switch to a fan and slash.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Blossom Barrage",
        type: "Attack/Martial Arts/Damage Boost",
        description:
          "Vernal Umbrella's Martial Arts Skill Spring Sorrow can hold up to 2 stacks. Hitting a target applies Combo effect: increases damage taken from caster's Ballistic Skills by 10% for 8 seconds. (Recommended when using Vernal Umbrella as part of Silkbind - Jade Arsenal)",
      },
      {
        name: "Flying Gourds",
        type: "Martial Arts/Support",
        description:
          "Grants 2 charges to Inkwell Fan's Peak's Springless Silence but increases its cooldown by 3 seconds.",
      },
      {
        name: "Thunderous Bloom",
        type: "Damage Boost/Buff",
        description:
          "When you move more than 15m within 3 seconds, gain Spring Thunder: the next 3 Heavy Attacks or Airborne Heavy Attacks within 12 seconds gain 15% DMG Bonus. This effect may trigger once per 15 seconds.",
      },
      {
        name: "Star Reacher",
        type: "Attack/Pursuit/Buff",
        description:
          "Gain 10% Physical Attack bonus for 8 seconds after knocking an enemy airborne.",
      },
    ],

    gearSets: [
      {
        name: "Veil of the Willow Set",
        pieces: 4,
        bonuses: {
          twoSet: "Precision Rate +0.1%",
          fourSet:
            "After a Light Attack/Airborne Heavy Attack, damage is increased by 12%, lasting 10 seconds. After a Heavy Attack/Airborne Heavy Attack/Light Attack/Charged Attack, damage is increased by 12%.",
        },
        howToObtain: ["Campaign - Heavenfall", "Sword Trial", "Group Dungeons"],
      },
      {
        name: "Beyond the Chill Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "After entering combat, if no damage is taken for 10 seconds, gain Beyond the Chill: Reduces the next damage taken and all damage taken within 2 seconds afterward by 40%. Beyond the Chill is removed upon leaving combat.",
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
        name: "Low Qi Follow-Up Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Increases the Critical Rate of Moon Shatter Spring against targets with low Qi.",
      },
      {
        name: "Physical Attack Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Agility can increase Min Physical Attack.",
      },
      {
        name: "Airborne Follow-up Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "Increases the Critical DMG of Moon Shatter Spring.",
      },
      {
        name: "Silkbind Attribute Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Silkbind (Attribute) Attack. Also increases Silkbind DMG Bonus based on Min Silkbind Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All skills deal damage based on Attribute Attack, while Silkbind damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Launch",
        description:
          "Send the target airborne using Special Skill, making them more vulnerable to high damage.",
      },
      {
        name: "Riding the Wind",
        description:
          "Unique effect of the Inkwell Fan. The next Follow-up Skill used during this time is empowered. This effect lasts 2 seconds.",
      },
      {
        name: "Sense Skill",
        description:
          "In certain special cases, the corresponding skills may transform into other forms.",
      },
      {
        name: "Enhanced Ballistics",
        description: "Increases Projectile skill damage by 20%.",
      },
      {
        name: "Lingering Bone",
        description:
          "Mark applied to non-player enemies, enabling aerial combo attacks.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Critical Rate",
      "Suitable option for those who prefer not to take risks with melee weapons",
      "Excellent for sustained ranged DPS with crowd control",
      "Requires Dragon Key to access Sanctum",
    ],
  },

  {
    id: "mortal-rope-dart",
    name: "Mortal Rope Dart",
    type: "Rope Dart",
    path: "Bamboocut - Wind",
    image: require("../../../../assets/martial_art_weapons/mortal_rope_dart.png"),
    description:
      "Rope Darts offer a blend of ranged and melee strikes. This unique hybrid grants players more versatility when approaching combat encounters. Players can strike at range via sweeping whip-like attacks, catching enemies off balance and chaining follow-up combos.",
    playstyle:
      "Hybrid ranged/melee with fluid combat rewarding timing and positioning, excellent for crowd management",

    howToGet: {
      method: "Skill Theft",
      location: "Martial Hall in Kaifeng Region",
      details:
        "Requires joining Nine Mortal Ways sect. Complete complex questline involving disguise system: speak with elder, talk to Wuyan, obtain Jade Sachet, unlock disguise, impersonate Muddle, get Core Disciple's Token from kitchen, speak with Elder Tian, use Art Theft to learn martial art.",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Support", "Survivability", "Difficulty"],
    },

    skills: [
      {
        name: "Bladebound Thread",
        type: "Martial Art",
        description:
          "Throw the rope dart forward. If it hits a boss, you will be pulled toward the target; otherwise, you will pull the target and rope dart back to you. Press again within 2.5s to unleash a combo kick that knocks the target down. Targets hit receive a Vendetta Token. When the rat attacks a target with Vendetta Token, it deals 50% increased damage and restores Token of Gratitude.",
        recovery: "8.0s",
        key: "Q",
      },
      {
        name: "Rodent Rampage",
        type: "Special",
        description:
          "Every Token of Grace spent will summon a rat to make a coordinated attack. When you cast a Light Attack, the rat will pop out of the ground and attack. This effect lasts 10s and remains in effect even when switching weapons.",
        recovery: "0.5s",
        key: "~",
      },
      {
        name: "Rope Dart - Light Attack",
        type: "Light Attack",
        description: "Swing the Rope Dart in up to four Consecutive Attacks.",
        recovery: "0.3s",
        key: "Left Click",
      },
      {
        name: "Coiled Dragon",
        type: "Light Attack",
        description:
          "When used in Charging Stance, throw the rope dart with great force to knock down the enemy hit.",
        recovery: "0.5s",
        key: "Left Click while holding R",
      },
      {
        name: "Rodent's Resilience",
        type: "Charged",
        description:
          "Charge to consume Endurance and unleash sword energy forward. Targets hit are controlled for an extended duration. Sword energy damage decreases by 20% with each hit, to a minimum of 50%. Higher charge levels increase damage and range.",
        recovery: "1.0s",
        key: "Hold R",
      },
      {
        name: "Rodent's Resilience (Pull)",
        type: "Charged",
        description:
          "Use when in Charging Stance to toss the Rope Dart to pull a distant enemy toward you.",
        recovery: "0.3s",
        key: "Press R",
      },
      {
        name: "Rope Dart - Conversion",
        type: "Dual-Weapon",
        description: "Switch to the Rope Dart and attack.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Echoes of Oblivion",
        type: "Pursuit/Martial Arts/Debuff",
        description:
          "Infernal Twinblades Light Attack inflicts Sin. Flamelash state Light Attack inflicts Karma. Infernal Twinblades Light Attacks against targets with these debuffs ignore part of their Physical Defense or Bamboocut Resistance. (When using Infernal Twinblades as part of Bamboocut - Wind Arsenal)",
      },
      {
        name: "Vendetta",
        type: "Martial Arts/Buff/Recover",
        description:
          "Guided Blade: Extends the duration of Vendetta Token and refunds Tokens of Gratitude.",
      },
      {
        name: "Riptide Reflex",
        type: "Control/Buff",
        description:
          "Hitting an enemy with a control skill reduces the cooldown of your current Martial Arts skill. Can trigger once every 10s.",
      },
      {
        name: "Breaking Point",
        type: "Pursuit/Buff/Stacking",
        description:
          "Hitting Exhausted enemies with a Critical Hit applies a stack of Disintegration for 3 seconds, stacking up to 3 times. Each stack grants extra Physical Penetration and increases Critical DMG Bonus.",
      },
    ],

    gearSets: [
      {
        name: "Swallowcall Set",
        pieces: 4,
        bonuses: {
          twoSet: "Min Physical Attack Increase",
          fourSet:
            "Light Attacks deal 15% more damage against targets with less than 40% Qi and 5% more damage against Exhausted targets.",
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
            "A Perfect Dodge of an enemy attack has a 50% chance of restoring 3% of your Max HP and 10 Endurance.",
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
        name: "Critical Rate Increase",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "The Agility Stat can increase Critical Rate.",
      },
      {
        name: "Mouse Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Increases the Physical Damage of Rats.",
      },
      {
        name: "Bamboocut Increase",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Increases Bamboocut Attack. Also increases Bamboocut Damage based on the Minimum Bamboocut Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All Skills deal damage based on Attribute Attack, while Bamboocut damage gains a further increase.",
      },
      {
        name: "Bone Corrosion Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Martial Arts Skill Guided Blade and Varied Combo Coiled Dragon apply Bone Corrosion to the enemy for 5 seconds.",
      },
    ],

    effects: [
      {
        name: "Token of Gratitude",
        description:
          "Combat Resource used in the Rope Dart Martial Art Mortal Rope Dart. Some Skills require consuming the Token of Gratitude to activate.",
      },
      {
        name: "Vendetta Token",
        description: "Special Mark of Martial Art Mortal Rope Dart.",
      },
      {
        name: "Charging Stance",
        description:
          "Special Rope Dart Stance: Certain Skills are changed when you are in the stance.",
      },
      {
        name: "Endurance",
        description: "Immune to all but Crowd Control when hit.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Critical Rate",
      "Requires joining Nine Mortal Ways sect",
      "Complex questline with disguise system",
      "Preferred for seeking tools to manage crowds and shift combat tactics on the fly",
      "Combat is fluid and dynamic, rewarding timing and positioning over brute force",
    ],
  },

  {
    id: "nameless-spear",
    name: "Nameless Spear",
    type: "Spear",
    path: "Bellstrike - Splendor",
    image: require("../../../../assets/martial_art_weapons/nameless_spear.png"),
    description:
      "The first weapon you'll unlock in Where Winds Meet, complementing the Nameless Sword. This versatile spear offers strong AoE damage and Endurance recovery while you learn the game's mechanics. It features straightforward attack patterns ideal for beginners, with skills that control crowds and deal area damage.",
    playstyle:
      "Beginner-friendly AoE combat with Endurance recovery and crowd control",

    howToGet: {
      method: "Story Progression",
      details:
        "Automatically obtained at the start of the game alongside Nameless Sword. No special requirements.",
    },

    stats: {
      strengths: ["AoE Damage", "Endurance Recovery", "Beginner-Friendly"],
      weaknesses: ["Single Target DPS", "Advanced Mechanics"],
    },

    skills: [
      {
        name: "Qiankun's Lock",
        type: "Martial Art",
        description:
          "Thrust forward with the spear, dealing damage to enemies in its path and Immobilizing them. After use, recover 15 Endurance for 10 seconds.",
        recovery: "10.0s",
        key: "Q",
      },
      {
        name: "Legion Crusher",
        type: "Special",
        description:
          "Strike the ground ahead with the spear, dealing damage to enemies in a small area. Using this skill grants Unrivaled for 3 seconds.",
        recovery: "8.0s",
        key: "~",
      },
      {
        name: "Storm Dance",
        type: "Charged",
        description:
          "Charge up and spin the spear around you, dealing damage to nearby enemies multiple times.",
        key: "Hold R",
      },
      {
        name: "Spear - Light Attack",
        type: "Light Attack",
        description: "Swing a long spear to perform up to four light attacks.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Spear - Heavy Attack",
        type: "Heavy Attack",
        description: "Swing a long spear to perform up to three heavy attacks.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Spear - Conversion",
        type: "Dual-Weapon",
        description: "Switch to spear and perform a sweeping attack.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Morph",
        type: "Attack/Damage Boost",
        description:
          "Increases Physical Attack for a short duration after using certain skills.",
      },
      {
        name: "Mountain's Might",
        type: "Defense/Buff",
        description:
          "Reduces incoming damage and increases Physical Defense when active.",
      },
      {
        name: "Wildfire Spark",
        type: "Attack/DoT",
        description:
          "Adds fire damage over time to attacks, dealing continuous damage to enemies.",
      },
      {
        name: "Battle Anthem",
        type: "Support/Buff",
        description:
          "Provides buffs to allies in the vicinity, increasing their combat effectiveness.",
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
        name: "Affinity Rate Upgrade",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Increases Affinity Rate, improving the chance to deal bonus damage.",
      },
      {
        name: "Physical Attack Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Power can increase Max Physical Attack.",
      },
      {
        name: "Endurance Recovery Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "Improves Endurance recovery rate from Qiankun's Lock.",
      },
      {
        name: "Bellstrike Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description: "Increases Bellstrike (Attribute) Attack and Penetration.",
      },
      {
        name: "Max Endurance Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description: "Increases maximum Endurance pool for extended combat.",
      },
    ],

    effects: [
      {
        name: "Immobilize",
        description: "Prevents the target from moving for a short duration.",
      },
      {
        name: "Unrivaled",
        description:
          "Grants immunity to control effects and increases damage output.",
      },
    ],

    notes: [
      "Perfect starter weapon for new players",
      "Complements Nameless Sword as the first weapon pair",
      "Focus on AoE damage and crowd control",
      "Qiankun's Lock provides valuable Endurance recovery",
      "Simple mechanics make it ideal for learning combat fundamentals",
    ],
  },

  {
    id: "nameless-sword",
    name: "Nameless Sword",
    type: "Sword",
    path: "Bellstrike - Splendor",
    image: require("../../../../assets/martial_art_weapons/nameless_sword.png"),
    description:
      "The first weapon you'll unlock in Where Winds Meet. Ideal for players who prefer focusing on individual targets to sweep them quickly rather than inflicting AoE Damage. A DPS-dedicated weapon that allows hitting targets several times, working well to proc Critical Hits constantly. Provides excellent mobility, extremely necessary against enormous hordes of enemies.",
    playstyle:
      "High mobility single-target DPS with critical hit focus and burst damage potential",

    howToGet: {
      method: "Story Progression",
      details:
        "Automatically obtained at the start of the game alongside Nameless Spear. No special requirements.",
    },

    stats: {
      strengths: ["DPS", "Difficulty", "Mobility"],
      weaknesses: ["Support", "Control", "Survivability"],
    },

    skills: [
      {
        name: "Fearless Lunge",
        type: "Martial Art",
        description:
          "Throw the flying sword to deal light damage to the enemy hit, then dash forward to follow the sword. During the follow-through, press again to unleash up to two strikes of Judgment, each dealing increased damage. After the second strike of Judgement, gain a Qi Shield that lasts 3 seconds.",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Shadow Step",
        type: "Special",
        description:
          "Consume Endurance to dodge backward and unleash Sword Qi (Sword Qi Damage decreases by 20% with each hit, to a minimum of 50%). Within 3 seconds, press again to use Sword Dash.",
        recovery: "1.0s",
        key: "~",
      },
      {
        name: "Sword - Light Attack",
        type: "Light Attack",
        description: "Perform up to four light attacks with a Longsword.",
        recovery: "0.6s",
        key: "Left Click",
      },
      {
        name: "Homeless Charge",
        type: "Charged",
        description:
          "Consume Endurance to charge up and unleash Sword Qi forward (Sword Qi Damage decreases by 20% with each hit, to a minimum of 50%). Charge level increases over time, boosting the damage and range of the Sword Qi.",
        key: "Hold R",
      },
      {
        name: "Sword - Heavy Attack",
        type: "Heavy Attack",
        description: "Perform up to three heavy attacks with a Longsword.",
        recovery: "0.9s",
        key: "R",
      },
      {
        name: "Sword - Conversion",
        type: "Dual-Weapon",
        description: "Switch to a Sword and slash.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Sword Morph",
        type: "Attack/Martial Arts/Damage Buff",
        description:
          "When Nameless Sword's Charged Skill, Homeless Charge, is charged while the Qi Shield is present, it unleashes multiple additional sword energy attacks at the 2nd charging state. You can consume bonus Endurance to increase the sword energy's damage; each Endurance increases damage by 1%, up to 20%.",
      },
      {
        name: "Mountain's Might",
        type: "Support/Martial Arts/Cost Reduction",
        description:
          "Nameless Spear's Martial Art Skill, Qiankun's Lock, grants Endless Gale effect, increasing the Endurance cost reduction to 20% for 5 seconds. Recommended only when using the Nameless Spear as part of the Bellstrike - Splendor Arsenal.",
      },
      {
        name: "Wildfire Spark",
        type: "Support/Recover",
        description: "Refunds 3.5% of the Endurance consumed.",
      },
      {
        name: "Battle Anthem",
        type: "Attack/Damage Boost",
        description:
          "Increases Charged Skill's Damage against all bosses by 10%.",
      },
    ],

    gearSets: [
      {
        name: "Jadeware Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max Physical Attack +1",
          fourSet:
            "Casting Martial Art Skill activates Jadeware effect: Increases Affinity DMG by 10% and deals 20% more Affinity DMG to targets under control or have lower than 40% Qi. Lasts 12 seconds. This effect can be triggered once every 30 seconds.",
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
            "Your Qi Shield duration is extended by 2 seconds. If you have more than 85% Qi or a Qi damage immunity shield, reduce all HP damage taken by 20%.",
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
        name: "The Qi Struggle Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "Increases Qi Damage dealt by 10%.",
      },
      {
        name: "Physical Damage Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "Max Physical Attack can be increased based on Momentum. (Momentum: Converts into Character's Affinity Rate and Max Physical Attack based on a certain Ratio).",
      },
      {
        name: "Sword Qi Affinity Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Increases the Affinity Rate of sword energy attacks against targets with Qi below 20% (including Exhausted targets) based on Max Physical Attack, up to a 3.5% increase at 500 Max Physical Attack.",
      },
      {
        name: "Bellstrike Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Bellstrike Attack (Attribute Attack) by 19 - 38. Increases Bellstrike Penetration based on Max Bellstrike Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All Skills deal damage based on Attribute Attack, while Bellstrike Attack deals 50% bonus damage.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Affinity Rate",
      "Perfect starter weapon for new players",
      "Complements Nameless Spear as the first weapon pair",
      "Both weapons share the same development path (Bellstrike - Splendor)",
      "High mobility and single-target control; excels at kiting enemies",
      "Combine strong endurance with charged skills to unleash burst damage",
    ],
  },

  {
    id: "vernal-umbrella",
    name: "Vernal Umbrella",
    type: "Umbrella",
    path: "Skillbind - Jade",
    image: require("../../../../assets/martial_art_weapons/vemal_umbrella.png"),
    description:
      "The offensive alternative to the Soulshade Umbrella, entirely different in function. Instead of providing heals, this weapon focuses on targeting individual targets from a safe distance where the user cannot be targeted. Provides considerable mobility and crowd control, making it a suitable option for those who prefer not to take risks with melee weapons.",
    playstyle: "Ranged sustained DPS with control and airborne burst combos",

    howToGet: {
      method: "Quest Reward or Skill Theft",
      location: "Time Tower in Kaifeng Region",
      details:
        "Possible reward from Oddities - Mystery of Five Tones Encounter Quest in Qinghe, OR Skill Theft at Time Tower. For Skill Theft: Speak with Wang Ping'an at tower base, climb to find Jiang Ting'er, complete clue hunt for keepsake (tabby cat, chess players, gossiping women, warehouse, second-floor treasury), retrieve Bramble Rose Hairpin from warehouse, return to Jiang Ting'er, perform Skill Theft on Master.",
    },

    stats: {
      strengths: ["DPS", "Control", "Mobility"],
      weaknesses: ["Difficulty", "Survivability", "Support"],
    },

    skills: [
      {
        name: "Spring Sorrow",
        type: "Martial Art",
        description:
          "Briefly charges, then fires a flying petal forward. On hit, Immobilizes non-boss enemies for 3 seconds.",
        recovery: "15.0s",
        key: "Q",
      },
      {
        name: "Unfading Flower",
        type: "Special",
        description:
          "Can be used when at least 50 Blossom are available. Toss the umbrella into the air and draw a hidden sword. You can then switch to another weapon or use the hidden sword's basic skills. While active, the umbrella follows you in midair and automatically fires projectiles at single targets within 5m. If the target is airborne, the umbrella consumes additional Blossom to fire enhanced projectiles and extend the target's airborne duration. Consumes 10 Blossom per second. If Blossom is insufficient, the umbrella is automatically recalled.",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Umbrella - Light Attack",
        type: "Light Attack",
        description:
          "Swings your Umbrella to land up to three Light Attacks, dealing close to medium range damage.",
        recovery: "0.1s",
        key: "Left Click",
      },
      {
        name: "Spring Away",
        type: "Light Attack",
        description:
          "After charging, open the umbrella to rise into the air and spin rapidly, making yourself airborne and firing projectiles to deal moderate damage. Hitting targets with these projectiles can rapidly accumulate Blossom.",
        key: "Hold Left Click",
      },
      {
        name: "Apricot Heaven",
        type: "Charged",
        description:
          "A one-stage charged skill that deals massive damage. Open the umbrella to fly into the air, dealing area damage once to nearby enemies. While charging in mid-air, there are two variants based on the charge duration: a normal downward area attack and an enhanced area attack.",
        key: "Hold R",
      },
      {
        name: "Colorful Phoenix",
        type: "Heavy Attack",
        description:
          "During the recovery of the first or second heavy attack, tap the light attack button to trigger a combo skill - open the umbrella and dash forward, dealing multiple hits of damage.",
        recovery: "0.2s",
        key: "R while in the air",
      },
      {
        name: "Umbrella - Heavy Attack",
        type: "Heavy Attack",
        description:
          "Swings your Umbrella to land up to four Heavy Attacks, dealing close to medium range damage.",
        key: "R",
      },
      {
        name: "Umbrella - Conversion",
        type: "Dual-Weapon",
        description: "Switch weapon to umbrella and swing it, dealing damage.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Blossom Barrage",
        type: "Attack/Martial Arts/Damage Boost",
        description:
          "Vernal Umbrella's Martial Arts Skill Spring Sorrow can hold up to 2 stacks. Hitting a target applies the Combo effect: increases damage taken from the caster's Ballistic Skills by 10% for 8 seconds. Affected Ballistic Skills include: Martial Art Skill, Spring Sorrow, and Special Skill Unfading Flower. Recommended when using Vernal Umbrella as part of the Skillbind - Jade Arsenal.",
      },
      {
        name: "Flying Gourds",
        type: "Martial Arts/Support",
        description:
          "Grants 2 charges to Inkwell Fan's Peak's Springless Silence but increases its cooldown by 3 seconds.",
      },
      {
        name: "Thunderous Bloom",
        type: "Damage Boost/Buff",
        description:
          "When you move more than 15m within 3 seconds, gain Spring Thunder: the next 3 Heavy Attacks or Airborne Heavy Attacks within 12 seconds gain 15% DMG Bonus. This effect may trigger once per 15 seconds.",
      },
      {
        name: "Star Reacher",
        type: "Attack/Pursuit/Buff",
        description:
          "Gain 10% Physical Attack bonus for 8 seconds after knocking an enemy airborne.",
      },
    ],

    gearSets: [
      {
        name: "Veil of the Willow Set",
        pieces: 4,
        bonuses: {
          twoSet: "Precision Rate +0.1%",
          fourSet:
            "After a Light Attack/Airborne Heavy Attack, damage is increased by 12%, lasting 10 seconds. The reverse is also true. Particularly, after a Heavy Attack/Airborne Heavy Attack/Light Attack/Charged Attack, damage is increased by 12%.",
        },
        howToObtain: ["Campaign - Heavenfall", "Sword Trial", "Group Dungeons"],
      },
      {
        name: "Beyond the Chill Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "After entering combat, if no damage is taken for 10 seconds, gain Beyond the Chill: Reduces the next damage taken and all damage taken within 2 seconds afterward by 40%. Beyond the Chill is removed upon leaving combat.",
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
        name: "Trajectory Skill Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "All Vernal Umbrella ballistic skills ignore a portion of target's Physical Resistance when damaging an immobilized or airborne enemy.",
      },
      {
        name: "Critical Rate Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Agility can increase Critical Rate.",
      },
      {
        name: "Trajectory Calculation Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Increases the Critical DMG of Vernal Umbrella's Ballistic Skills.",
      },
      {
        name: "Silkbind Attribute Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Silkbind (Attribute) Attack. Also increases Silkbind DMG Bonus based on Min Silkbind Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All skills deal damage based on Attribute Attack, while Silkbind damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Airborne",
        description:
          "Send the target airborne using Special Skill, making them more vulnerable to high damage.",
      },
      {
        name: "Blossom",
        description:
          "A unique martial art resource of Vernal Umbrella. Max 100 points. Can be earned from hitting enemies with this martial art equipped. Blossom is consumed continuously while using skills.",
      },
      {
        name: "Immobilize",
        description: "Target is disabled; unable to move or use any skills.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Critical Rate",
      "Offensive alternative to Soulshade Umbrella",
      "Shares Skillbind - Jade path with Inkwell Fan",
      "Ranged playstyle with sustained DPS capabilities",
      "Safe distance combat - user cannot be easily targeted",
      "Considerable mobility and crowd control options",
      "Suitable for players who prefer not to take risks with melee weapons",
      "Complex questline involving clue hunt for Skill Theft method",
      "Unique Blossom resource system - max 100 points",
      "Can draw hidden sword while umbrella auto-fires projectiles",
    ],
  },

  {
    id: "soulshade-umbrella",
    name: "Soulshade Umbrella",
    type: "Umbrella",
    path: "Skillbind - Deluge",
    image: require("../../../../assets/martial_art_weapons/soulshade_umbrella.png"),
    description:
      "The support-oriented alternative to the umbrella, and the only weapon, alongside the Panacea Fan, that can heal units. This weapon is all about supporting by providing heals, which makes it strongly oriented to multiplayer, but it severely lacks DMG, as it's thought to be a weapon you use while sitting back on battles, only providing heals.",
    playstyle:
      "Support healer with burst and sustained healing, single-target and group recovery, revival abilities, and team damage buffs",

    howToGet: {
      method: "Skill Theft",
      location: "Soulshade Umbrella Post Station in eastern Kaifeng Region",
      details:
        "Requires completing Chapter 1: Heaven Has No Pier to unlock Kaifeng region. Navigate Post Station with stealth: enter house on left, assassinate guards, clear disciples, loot chests, descend through coffin ladder to hideout, clear hanging coffins area, climb to objective area, perform Skill Theft on Master.",
    },

    stats: {
      strengths: ["Support", "Survivability", "Difficulty"],
      weaknesses: ["Mobility", "DPS", "Control"],
    },

    skills: [
      {
        name: "Floating Grace",
        type: "Martial Art",
        description:
          "Send out the umbrella to grant yourself and nearby allies 15% increased damage for 8 seconds and heal once.",
        recovery: "60.0s",
        key: "Q",
      },
      {
        name: "Echoes of a Thousand Plants",
        type: "Special",
        description:
          "Toss the umbrella into the air and pull out a hidden sword from the handle. You may switch to another weapon or use the hidden sword's basic skills. Increases healing by 15% and generates Dewdrops over time (up to 60). The umbrella hovers and follows you, automatically healing the ally with the lowest HP percentage nearby (including yourself). Increase the healing effect by 50% when healing yourself. Use a Special Skill while wielding a hidden sword to recall the umbrella early.",
        recovery: "60.0s",
        key: "~",
      },
      {
        name: "Umbrella - Light Attack",
        type: "Light Attack",
        description:
          "Swings your Umbrella to land up to three Light Attacks, dealing close to medium range damage.",
        recovery: "0.1s",
        key: "Left Click",
      },
      {
        name: "Umbrella - Heavy Attack",
        type: "Heavy Attack",
        description: "Send the umbrella forward to perform a spinning attack.",
        recovery: "1.6s",
        key: "R",
      },
      {
        name: "Pale Petal",
        type: "Charged",
        description:
          "Send the umbrella forward to perform a spinning attack. If the target is already Exhausted, the attack extends the duration of the Exhausted status. Holding the skill increases both its damage and the duration of the effect.",
        key: "Hold R",
      },
      {
        name: "Umbrella - Conversion",
        type: "Dual-Weapon",
        description:
          "Switch your weapon to umbrella and swing it, dealing damage. Increased healing by 5% and generates Dewdrops over a period of time (up to 30).",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Royal Remedy",
        type: "Support/Martial Arts/Recover",
        description:
          "Increases the healing effect of the water clone created by Panacea Fan's Martial Art Skill, Cloudburst Healing, by 10%. If you are within its range, gain 1 Dewdrop each time when receive healing over time.",
      },
      {
        name: "Restoring Blossom",
        type: "Support/Buff/Stacking",
        description:
          "Dealing Critical Healing applies one stack of Nurturing for 3 seconds, increasing healing received by 2%, stacking up to 3 times.",
      },
      {
        name: "Esoteric Revival",
        type: "Support/Buff/Recover",
        description:
          "Increases the healing of Panacea Fan's Perception Skill, Resurrection, by 50% on the revived target.",
      },
      {
        name: "Mending Loom",
        type: "Support/Buff/Recover",
        description:
          "Casting Soulshade Umbrella's Special Skill, Echoing Grow, restores 5 Dewdrops and additionally heals 10% of your Max HP for every 100 Dewdrops consumed. (when using Soulshade Umbrella as part of the Skillbind - Deluge Arsenal)",
      },
    ],

    gearSets: [
      {
        name: "Ivorybloom Set",
        pieces: 4,
        bonuses: {
          twoSet: "Critical Rate +0.1%",
          fourSet:
            "At Max HP, there's a bonus 5% chance to deal Critical Healing and Damage, and increases the effects of Critical Healing and Damage by 15%.",
        },
        howToObtain: [
          "Campaign - Ever-Normal Granary",
          "Sword Trial",
          "Group Dungeons",
        ],
      },
      {
        name: "Whirlsnow Set",
        pieces: 4,
        bonuses: {
          twoSet: "Physical Defense +1",
          fourSet:
            "When you lose more than 40% of Max HP in a single instance of damage or when your HP falls below 20%, the next healing you receive within 5 seconds restores an additional 25% of your Max HP. This effect triggers once every 60 seconds.",
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
        name: "Buff Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Martial Art Skill allows you and allies to deal bonus damage against Exhausted enemies. When equipped with both Soulshade Umbrella and Panacea Fan, it increases the damage of Mystic Arts.",
      },
      {
        name: "Physical Attack Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Agility can increase Min Physical Attack.",
      },
      {
        name: "Critical Heal Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description: "Increases the Critical Healing effect of Special Skills.",
      },
      {
        name: "Skillbind Attribute Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Skillbind (Attribute) Attack. Also increases Skillbind Penetration based on Min Skillbind Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Deals bonus healing based on Skillbind Attack. All skills deal damage based on Attribute Attack, while Skillbind damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Dewdrop",
        description:
          "A special martial arts resource used by Panacea Fan and Soulshade Umbrella, with a maximum of 100 Points.",
      },
      {
        name: "Inner Demon - Healing Reduction",
        description:
          "Before completing the first clear challenges against Campaign and Mysterious Bosses, battles with them are affected by inner demons, greatly reducing Healing Effects.",
      },
      {
        name: "Sense Skill",
        description:
          "In certain special cases, the corresponding skills may transform into other forms.",
      },
      {
        name: "Mystic Art - DMG Up",
        description:
          "When equipped with both Soulshade Umbrella and Panacea Fan, the damage of Mystic Arts is increased by 20%.",
      },
    ],

    notes: [
      "Gear Tuning Priorities: Min Physical Attack > Max Physical Attack > Critical Rate",
      "Support healer weapon - only weapon besides Panacea Fan that can heal",
      "Strongly oriented to multiplayer support",
      "Severely lacks damage output",
      "Best used while sitting back in battles, providing heals",
      "Features both burst and sustained healing",
      "Covers single-target and group recovery",
      "Revival abilities allow defeated allies to rejoin the fight",
      "Provides team-wide damage buffs (15% increased damage for 8s)",
      "Shares Skillbind - Deluge path with Panacea Fan",
      "Uses Dewdrop resource system (max 100 points)",
      "Can draw hidden sword while umbrella auto-heals lowest HP ally",
      "Increases healing by 15% and generates Dewdrops over time",
      "Synergizes with Panacea Fan - together they increase Mystic Arts damage by 20%",
      "Requires completing Chapter 1 to unlock Kaifeng region",
    ],
  },

  {
    id: "stormbreaker-spear",
    name: "Stormbreaker Spear",
    type: "Spear",
    path: "Stonesplit - Might",
    image: require("../../../../assets/martial_art_weapons/stormbreaker_spear.png"),
    description:
      "This weapon is specifically designed for those who prefer to absorb incoming damage. The Stormbreaker Spear provides the user with several Shields and DMG Reduction resources that increase their survivability. And the mobility is reduced, making its gameplay easy to comprehend. While inflicting damage isn't its specialty, this weapon can do a lot of damage if properly used.",
    playstyle:
      "Tank with shields, damage reduction, interruption resistance, and taunt abilities - serves as team damage sponge with wide-range AoE charged skills",

    howToGet: {
      method: "Story Progression",
      details:
        'After one of the first quests and visiting General Wang, you will receive the Stormbreaker Spear in the mail. Check your inbox to claim "Raging Tides General\'s Gift" (Main Menu > Letter in upper-right corner).',
    },

    stats: {
      strengths: ["Survivability", "Control", "DPS"],
      weaknesses: ["Mobility", "Support", "Difficulty"],
    },

    skills: [
      {
        name: "Storm Roar",
        type: "Martial Art",
        description:
          "Shake the spear to release sonic waves, Taunting nearby enemies and Shocking them for 8 seconds while gaining 20% damage reduction for 16 seconds (40% when hitting a Multiplayer Campaign boss). Grants Fortitude during the skill.",
        recovery: "20.0s",
        key: "Q",
      },
      {
        name: "Thunder Shock",
        type: "Special",
        description:
          "Consume 2 bars of Fighting Spirit to brace the spear and launch a spinning kick forward, followed by a flipping slam, knocking the target down and applying Vulnerability for 8 seconds. Grants Fortitude during the skill.",
        recovery: "0.2s",
        key: "~",
      },
      {
        name: "Spear - Light Attack",
        type: "Light Attack",
        description: "Swing a long spear to perform up to four light attacks.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Fury Spear",
        type: "Charged",
        description:
          "After charging, unleash a flurry of thrusts, dealing high damage. Gain Drumbeat on the final strike. Grants Fortitude during the skill.",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "Spear - Heavy Attack",
        type: "Heavy Attack",
        description: "Swing a long spear to perform up to three heavy attacks.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Spear - Conversion",
        type: "Dual-Weapon",
        description: "Switch to spear and perform a sweeping attack.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Exquisite Scenery",
        type: "Defense/Martial Arts/Counter",
        description:
          "Successfully defending with Thundercry Blade activates its special counterattack. Press Perception Skill or Heavy Attack to unleash a first-stage Charged Heavy Attack without charging. This effect can only trigger once every 10 seconds. Hitting a target with a Varied Combo restores 1 bar of Battle Will (no more than 1 bar restored per cast).",
      },
      {
        name: "Trapped Beast",
        type: "Defense/Buff/Recover",
        description:
          "Taking damage while HP is below 30% triggers Cornered Beast, generating a shield that absorbs up to 30% of Max HP. This effect lasts 4 seconds and can trigger once every 300 seconds.",
      },
      {
        name: "Art of Resistance",
        type: "Defense/Buff",
        description:
          "Increases the duration of your own HP shield and the bonus effects of its source skill by 4 seconds.",
      },
      {
        name: "Rock Solid",
        type: "Defense/Martial Arts/DMG Reduction",
        description:
          "Increases the DMG Reduction of Stormbreaker Spear's Storm Roar by 20% after taunting a boss unit, and by 5% after taunting a non-boss unit, up to 20% in total. While the DMG Reduction is active, reduces all damage dealt by 10%. Recommended when using Stormbreaker Spear as part of the Stonesplit - Might Arsenal.",
      },
    ],

    gearSets: [
      {
        name: "Rainwhisper Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "Increases all Critical DMG and healing by 10%, and further increases them by 15% when you have an HP Shield.",
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
            "When attacking while defending, there is a 30% chance to create a shield that absorbs up to 10% of Max HP, lasting 20 seconds. If a shield already exists, restores 2% HP in addition. This effect can only trigger once every 60 seconds.",
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
        name: "Max Fighting Spirit Increase",
        unlockMethod: "Unlocked after learning Martial Arts",
        description: "Increases Max Fighting Spirit by 1 bar.",
      },
      {
        name: "Precision Rate Increase",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description:
          "Increases Precision Rate based on Body, capped at 14 Body.",
      },
      {
        name: "Hit Damage Taken Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Reduces Physical Damage taken briefly after hitting Charged Skills and their Varied Combos.",
      },
      {
        name: "Stonesplit Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Stonesplit (Attribute) Attack. Also increases Stonesplit Penetration based on Max Stonesplit Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All skills deal damage based on Attribute Attack, while Stonesplit damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Fighting Spirit",
        description:
          "A unique martial art resource for Thundercry Blade and Stormbreaker Spear. It is gained by blocking or through natural regeneration over time, and is consumed when using certain skills.",
      },
      {
        name: "Drumbeat",
        description:
          "Increase Charged Skill damage by 15% for 6 seconds. Exclusive to Stormbreaker Spear. Can trigger the Perception Skill of Thundercry Blade's Martial Art Skill.",
      },
      {
        name: "Taunt",
        description: "Enemies will prioritize attacking taunted targets.",
      },
      {
        name: "Shocked",
        description: "Reduce damage dealt by 20%.",
      },
      {
        name: "Vulnerable",
        description:
          "HP and Qi damage taken increased by 8%. If the damage source is using Thundercry Blade or Stormbreaker Spear, it is additionally increased by 8%.",
      },
      {
        name: "Fortitude",
        description: "Immune to all but Crowd Control when hit.",
      },
    ],

    notes: [
      "Gear Tuning Priority: Max HP",
      "Designed for absorbing incoming damage",
      "Multiple shields and DMG reduction resources",
      "Strong survivability - can serve as team damage sponge",
      "Taunt abilities to control enemy aggro",
      "Equipped with interruption resistance (Fortitude)",
      "Can group enemies for wide-range AoE damage with charged skills",
      "Reduced mobility makes gameplay easy to comprehend",
      "While damage isn't its specialty, can deal significant damage when properly used",
      "Shares Stonesplit - Might path and Fighting Spirit resource with Thundercry Blade",
      "Storm Roar grants 20% damage reduction (40% vs Multiplayer Campaign boss)",
      "Exclusive Drumbeat effect increases Charged Skill damage by 15%",
      "Obtained early in game from General Wang's mail",
    ],
  },

  {
    id: "thundercry-blade",
    name: "Thundercry Blade",
    type: "Mo Blade",
    path: "Stonesplit - Might",
    image: require("../../../../assets/martial_art_weapons/thundercry_blade.png"),
    description:
      "This weapon is specifically designed for those who prefer to absorb incoming damage. The Thundercry Blade provides the user with several Shields that increase their survivability. And the mobility is reduced, making its gameplay easy to comprehend. While inflicting damage isn't its specialty, this weapon can do a lot of damage if properly used.",
    playstyle:
      "Tank with shields, damage reduction, interruption resistance - serves as team damage sponge with wide-range charged skills for AoE damage",

    howToGet: {
      method: "Quest Reward, Skill Theft, or Join Sect",
      location: "Well of Heaven Martial Camp in Kaifeng Region",
      details:
        "Possible reward from Oddities - Mystery of Five Tones Encounter Quest in Qinghe, OR Skill Theft at Well of Heaven Martial Camp in Kaifeng Region, OR join Well of Heaven Sect.",
    },

    stats: {
      strengths: ["Survivability", "Control", "DPS"],
      weaknesses: ["Mobility", "Support", "Difficulty"],
    },

    skills: [
      {
        name: "Predator's Shield",
        type: "Martial Art",
        description:
          "Grants a shield equal to 25% of your max HP for 8 seconds and increases Fighting Spirit by 2 bars. If you have Drumbeat, it will be removed to trigger your Perception Skill.",
        recovery: "12.0s",
        key: "Q",
      },
      {
        name: "Shifting Heaven",
        type: "Martial Art",
        description:
          "Grants a shield equal to 25% of your max HP, lasting 8 seconds. Also gain 2 bars of Fighting Spirit and Breakthrough. (Perception Skill - activates upon Drumbeat)",
        recovery: "12.0s",
        key: "Q (with Drumbeat)",
      },
      {
        name: "Sunrush Gale",
        type: "Special",
        description:
          "Consumes 2 bars of Fighting Spirit to drive the Mo Blade into the ground, generating a vortex that pulls in nearby enemies (ineffective against bosses). Then spins the Mo Blade to unleash a powerful sweeping attack and gains Focus. Grants Fortitude during the skill.",
        recovery: "7.0s",
        key: "~",
      },
      {
        name: "Mo Blade - Light Attack",
        type: "Light Attack",
        description:
          "Swing the Mo Blade to perform up to three light attacks, dealing light damage.",
        recovery: "0.2s",
        key: "Left Click",
      },
      {
        name: "Galecloud Cleave",
        type: "Charged",
        description:
          "A light charged skill. After charging, spin the Mo Blade to unleash a double sweeping strike, dealing moderate damage in a wide area. You can move while charging. The charge has three stages, with damage increasing at each stage. Releasing at Stage 3 consumes 1 bar of Fighting Spirit (if available) to boost damage by 20% and unlock the light attack varied combo skill. Grants Fortitude during the skill.",
        recovery: "0.2s",
        key: "Hold Left Click",
      },
      {
        name: "Light Attack Varied Combo",
        type: "Light Attack",
        description:
          "Consume 1 bar of Fighting Spirit to swing the Mo Blade in reverse, launching a sweeping attack that deals moderate damage in a large area. Grants Fortitude during the skill. (Unlocked after Galecloud Cleave Stage 3)",
        recovery: "1.0s",
        key: "Left Click (after Galecloud Cleave)",
      },
      {
        name: "Mo Blade - Heavy Attack",
        type: "Heavy Attack",
        description:
          "Perform up to three heavy attacks with the Mo Blade, each dealing low damage.",
        recovery: "0.2s",
        key: "R",
      },
      {
        name: "Avalanche",
        type: "Charged",
        description:
          "Chargeable heavy attack. Slash upward, then slam down to deal high damage in a small area. You can move while charging. The skill has three power stages; damage increases with each. At Stage 3, consume 1 bar of Fighting Spirit (if available) to boost damage by 20% and unlock a Heavy Attack Combo. Grants Fortitude during the skill.",
        recovery: "0.2s",
        key: "Hold R",
      },
      {
        name: "Varied Combo",
        type: "Heavy Attack",
        description:
          "Consume 1 bar of Fighting Spirit to leap into the air and flip, slamming into the ground to deal high damage in a small area, knocking the target down. Grants Fortitude during the skill. (Unlocked after Avalanche Stage 3)",
        recovery: "1.0s",
        key: "R (after Avalanche)",
      },
      {
        name: "Mo Blade - Conversion",
        type: "Dual-Weapon",
        description:
          "Switch weapon to Mo Blade and swing it, dealing light damage.",
        recovery: "3.0s",
        key: "TAB",
      },
    ],

    internalArts: [
      {
        name: "Exquisite Scenery",
        type: "Defense/Martial Arts/Counter",
        description:
          "Successfully defending with Thundercry Blade activates its special counterattack. Press Perception Skill or Heavy Attack to unleash a first-stage Charged Heavy Attack without charging. This effect can only trigger once every 10 seconds. Hitting a target with a Varied Combo restores 1 bar of Battle Will (no more than 1 bar restored per cast).",
      },
      {
        name: "Trapped Beast",
        type: "Defense/Buff/Recover",
        description:
          "Taking damage while HP is below 30% triggers Cornered Beast, generating a shield that absorbs up to 30% of Max HP. This effect lasts 4 seconds and can trigger once every 300 seconds.",
      },
      {
        name: "Art of Resistance",
        type: "Defense/Buff",
        description:
          "Increases the duration of your own HP shield and the bonus effects of its source skill by 4 seconds.",
      },
      {
        name: "Rock Solid",
        type: "Defense/Martial Arts/DMG Reduction",
        description:
          "Increases the DMG Reduction of Stormbreaker Spear's Storm Roar by 20% after taunting a boss unit, and by 5% after taunting a non-boss unit, up to 20% in total. While the DMG Reduction is active, reduces all damage dealt by 10%. Recommended when using Stormbreaker Spear as part of the Stonesplit - Might Arsenal.",
      },
    ],

    gearSets: [
      {
        name: "Rainwhisper Set",
        pieces: 4,
        bonuses: {
          twoSet: "Max HP +40",
          fourSet:
            "Increases all Critical DMG and healing by 10%, and further increases them by 15% when you have an HP Shield.",
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
            "When attacking while defending, there is a 30% chance to create a shield that absorbs up to 10% of Max HP, lasting 20 seconds. If a shield already exists, restores 2% HP in addition. This effect can only trigger once every 60 seconds.",
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
        name: "Charge Calculation Enhancement",
        unlockMethod: "Unlocked after learning Martial Arts",
        description:
          "Charged Skill and Varied combo never become Abrasion and deal more Critical DMG.",
      },
      {
        name: "Max HP Increases",
        unlockMethod: "Complete Breakthrough to Tier 1",
        description: "Body can increase Max HP.",
      },
      {
        name: "Charge Critical Hit Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 2",
        description:
          "Increases the Critical Rate of Charged Skill and related Varied Combo.",
      },
      {
        name: "Stonesplit Increase",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "Increases Stonesplit (Attribute) Attack. Also increases Stonesplit Penetration based on Max Stonesplit Attack.",
      },
      {
        name: "Attribute Attack Damage Enhancement",
        unlockMethod: "Complete Breakthrough to Tier 3",
        description:
          "All skills deal damage based on Attribute Attack, while Stonesplit Damage gains a further increase.",
      },
    ],

    effects: [
      {
        name: "Fighting Spirit",
        description:
          "A unique martial art resource for Thundercry Blade and Stormbreaker Spear. It is gained by blocking or through natural regeneration over time, and is consumed when using certain skills.",
      },
      {
        name: "Breakthrough",
        description:
          "Increases the damage of charged skills by 30% and removes the Endurance cost while charging for 12s.",
      },
      {
        name: "Shield",
        description:
          "Absorbs HP damage and associated Qi damage, excluding fixed Qi damage.",
      },
      {
        name: "Focus",
        description:
          "The next charged skill used within 5 seconds charges 50% faster.",
      },
      {
        name: "Drumbeat",
        description:
          "Increase Charged Skill Damage by 15% for 6 seconds. Exclusive to Stormbreaker Spear. Can trigger the Perception Skill of the Thundercry Blade's Martial Art Skill.",
      },
    ],

    notes: [
      "Gear Tuning Priority: Max HP",
      "Designed for absorbing incoming damage",
      "Multiple shield abilities increase survivability",
      "Reduced mobility makes gameplay easy to comprehend",
      "While damage isn't its specialty, can deal significant damage when properly used",
      "Shares Stonesplit - Might path and Fighting Spirit resource with Stormbreaker Spear",
      "Predator's Shield grants 25% HP shield and +2 Fighting Spirit bars",
      "Shifting Heaven Perception Skill triggers when you have Drumbeat buff",
      "Breakthrough effect: +30% charged skill damage, no Endurance cost for 12s",
      "Fortitude grants immunity to all but Crowd Control when hit",
      "Three-stage charged attacks with damage scaling per stage",
      "Stage 3 charges unlock Varied Combo skills (consumes 1 Fighting Spirit bar)",
      "Sunrush Gale vortex pulls enemies (ineffective on bosses)",
      "Shares Rainwhisper and Moonflare gear sets with Stormbreaker Spear",
      "Synergizes with Stormbreaker Spear through Drumbeat effect",
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
