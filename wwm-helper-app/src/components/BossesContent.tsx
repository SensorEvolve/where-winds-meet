import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { colors, typography, spacing } from '../theme';

// Boss data with images
const campaignBosses = [
  {
    name: 'Black God of Wealth',
    image: require('../../assets/bosses-campaign/black_god_of_wealth.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Dao Lord',
    image: require('../../assets/bosses-campaign/dao_lord.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Heartseeker',
    image: require('../../assets/bosses-campaign/heartseeker.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Lucky Seventeen',
    image: require('../../assets/bosses-campaign/lucky_seventeen.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Murong Yuan',
    image: require('../../assets/bosses-campaign/murong_yuan.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Qianye',
    image: require('../../assets/bosses-campaign/qianye.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'The Void King',
    image: require('../../assets/bosses-campaign/the_void_king.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Tian Ying',
    image: require('../../assets/bosses-campaign/tian_king.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
  {
    name: 'Ye Wanshan',
    image: require('../../assets/bosses-campaign/ye_wanshan.png'),
    type: 'Campaign Challenge Boss',
    classification: 'Adversary of Power',
    encounterContext: 'Campaign storyline or location campaign',
    replayable: 'Yes (Campaign Challenge)',
    firstClearRewards: 'Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP',
    challengeRewards: 'Specific gear set items, cosmetic chests',
  },
];

// World boss data with images
const worldBosses = [
  {
    name: 'Coffin Keeper Lord',
    image: require('../../assets/bosses-world/coffin_keeper_lord.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Death/undead themed boss',
  },
  {
    name: 'Drunk Striker',
    image: require('../../assets/bosses-world/drunk_striker.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Drunken martial arts master',
  },
  {
    name: 'Earth Fiend Deity',
    image: require('../../assets/bosses-world/earth_fiend_diety.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Earth elemental deity',
  },
  {
    name: 'Ghost Master',
    image: require('../../assets/bosses-world/ghost_master.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Spectral/ghost enemy',
  },
  {
    name: 'Nameless General',
    image: require('../../assets/bosses-world/nameless_general.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Ancient warrior general',
  },
  {
    name: 'Shadow Puppeteer - Curtain Call',
    image: require('../../assets/bosses-world/puppeteer_curtaincall.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Puppet master with shadow abilities',
  },
  {
    name: 'Shadow Puppeteer - Sheng Wu',
    image: require('../../assets/bosses-world/puppeteer_sheng_wu.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Puppet master variant',
  },
  {
    name: 'Sleeping Daoist',
    image: require('../../assets/bosses-world/sleeping_daoist.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Daoist monk with sleeping techniques',
  },
  {
    name: 'Snake Doctor',
    image: require('../../assets/bosses-world/snake_doctor.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Poison and snake-based abilities',
  },
  {
    name: 'Twin Lions',
    image: require('../../assets/bosses-world/twin_lions.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    bossMechanic: 'Dual boss fight - two bosses fought simultaneously',
    theme: 'Twin lion guardians',
  },
  {
    name: 'Wolf Maiden',
    image: require('../../assets/bosses-world/wolf_maiden.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Wolf-themed warrior',
  },
  {
    name: 'Yi Dao',
    image: require('../../assets/bosses-world/yi_dao.png'),
    type: 'World Boss',
    classification: 'Adversary of Power',
    encounterType: 'Open-world fixed location',
    availability: 'Always present at spawn location',
    approach: 'Must approach to initiate battle',
    theme: 'Master swordsman',
  },
];

// Overview content (before Campaign Bosses section)
const overviewContent = `# Bosses

## Boss System Overview

Where Winds Meet features a variety of powerful boss encounters across both single-player campaign content and open-world exploration. Bosses provide challenging combat encounters with unique mechanics and valuable rewards.

**Boss Categories**:
- **Campaign Bosses** - Story-driven encounters with replay capability
- **World Bosses** - Open-world encounters at fixed locations
- **Moderate Talents** - Elite mini-bosses (not full bosses)

**Multiplayer Scaling**: When encountering bosses as an online group, they have expanded move sets and are much more difficult.

---

## Boss Types

### Campaign Bosses (Campaign Challenges)

**Icon**: Campaign Challenge icon

**Description**: Powerful Adversaries encountered during the Main Story or during Location Campaigns

**Key Features**:
- Encountered during story progression
- Appears at the conclusion of storylines or location exploration
- Can be challenged again as a **Campaign Challenge** after initial defeat
- Repeatable for farming rewards

**Replay System**:
- Unlocked after first completion
- Accessible through Campaign Challenge menu
- Costs resources to replay (40 Stamina per run)

---

### World Bosses

**Icon**: World Boss icon

**Description**: Opponents of great power found lurking in various parts of the open world

**Key Features**:
- Always found in the same fixed location
- Spawn in the open world
- Must approach to begin battle
- Persistent encounters available at any time

**Engagement**:
- No story requirement to fight
- Can be encountered while exploring
- May be too difficult for undergeared players

---

### Moderate Talents (Mini-Bosses)

**Classification**: Not full bosses, but elite enemies

**Description**: Stronger, more dangerous variants of regular enemies

**Locations**:
- Guard Outposts
- Patrol important areas
- Defend strategic locations

**Difficulty**: Challenging encounters but below boss-tier

**Note**: Not included in Adversaries of Power compendium category

---

## Boss Rewards System

### First-Time Clear Rewards

**When Obtained**: Upon defeating a boss for the first time

**Reward Types**:
- **Echo Jade** - Special crafting/upgrade material
- **Martial Arts Tomes** - Skill upgrade books
- **Zhou Coins** - Primary currency
- **Stored EXP** - Experience points for leveling

**Important**:
- Given directly after boss defeat
- Can only be claimed **once per account**
- Permanent acquisition

---

### Campaign Challenge Repeat Rewards

**When Obtained**: Defeating a boss you've already beaten in Campaign Challenge

**Reward Types**:
- **Gear Set Items** - Specific equipment pieces (varies by boss)
- **Cosmetic Chests** - Contains various apparel items (varies by boss)
- **Currency** - Zhou Coins and other currencies
- **EXP** - Character experience points

**Cost**: 40 Stamina per run

**Farming**: Repeatable for gear and cosmetics

---

## All Bosses

**Total Count**: 22 known bosses
- **10 Campaign Challenge Bosses**
- **12 World Bosses**

---

## Campaign Challenge Bosses
`;

// Zheng the Frostwing (10th campaign boss without image)
const zhengContent = `
---

### Zheng the Frostwing

**Type**: Campaign Challenge Boss

**Classification**: Adversary of Power

**Encounter Context**: Campaign storyline or location campaign

**Replayable**: Yes (Campaign Challenge)

**First Clear Rewards**: Echo Jade, Martial Arts Tomes, Zhou Coins, Stored EXP

**Challenge Rewards**: Specific gear set items, cosmetic chests

**Notes**: Name suggests ice/frost-based mechanics

**Image**: Not yet available

---
`;

// World bosses header
const worldBossesHeader = `
## World Bosses

World Bosses are powerful open-world encounters found at fixed locations throughout the game world.

---
`;

// Content after world bosses
const tipsAndInfoContent = `
## Boss Battle Tips

### General Strategy

1. **Learn Attack Patterns**: Each boss has unique movesets - observe and adapt
2. **Multiplayer Difficulty**: Bosses are significantly harder with groups
3. **Gear Appropriately**: Ensure proper level and equipment before attempting
4. **Use Consumables**: Don't hesitate to use buffs and healing items

---

### Campaign Challenge Farming

**Best Practices**:
- Farm specific bosses for desired gear sets
- 40 Stamina per run - manage stamina efficiently
- Target cosmetic chests for appearance customization
- Repeat clears for set completion

**Stamina Management**:
- Daily stamina regeneration
- Prioritize bosses with desired drops
- Plan farming sessions around stamina availability

---

### World Boss Encounters

**Preparation**:
- Scout location beforehand
- Check boss difficulty rating
- Bring appropriate counters to boss mechanics
- Consider bringing friends for difficult encounters

**Rewards**:
- Generally one-time rewards per boss
- Unique drops specific to each world boss
- Achievement completion

---

## Boss Compendium

**Adversaries of Power**: In-game compendium tracking system

**Tracks**:
- Campaign Challenge Bosses (10 total)
- World Bosses (12 total)
- Boss defeats and completion status

**Does NOT Track**:
- Moderate Talents (mini-bosses)
- Regular elite enemies

---

## Boss Rewards Detail

### Echo Jade

**Type**: Special crafting material

**Uses**:
- Special crafting recipes
- Upgrade materials
- To be documented in Items & Materials

**Source**: First-time boss clears only

---

### Martial Arts Tomes

**Function**: Skill upgrade books for Martial Arts weapons

**Uses**:
- Upgrade Martial Arts levels
- Unlock new abilities
- Enhance existing techniques

**Source**: First-time boss clears only

---

### Zhou Coins

**Currency Type**: Primary game currency

**Uses**:
- Purchase items from shops
- Upgrade equipment
- Martial Arts upgrades

**Source**: Both first-time and repeat clears

---

### Stored EXP

**Function**: Banked experience points

**Uses**:
- Apply to character for instant leveling
- Save for future level progression
- Efficient leveling resource

**Source**: Boss defeats (both first-time and repeats)

---

### Gear Set Items

**Source**: Campaign Challenge repeat clears

**Details**:
- Specific bosses drop specific gear sets
- Part of the 12 Gear Sets system
- See Equipment & Gear documentation

**Farming Strategy**: Target specific bosses for desired set pieces

---

### Cosmetic Chests

**Source**: Campaign Challenge repeat clears

**Contents**: Various apparel items for character customization

**Boss-Specific**: Each boss has different cosmetic rewards

---

## Boss Locations

### Campaign Boss Access

**Method**: Campaign Challenge menu

**Requirements**:
- Must have defeated boss in story first
- 40 Stamina per attempt
- Accessible from menu system

**Navigation**: Fast travel to boss fight directly

---

### World Boss Locations

**Finding Bosses**:
- Explore the open world
- Fixed spawn locations
- Marked on map after discovery
- Can be found before story completion

**Regional Distribution**:
- Scattered across Qinghe region
- Multiple biomes and locations
- Various difficulty levels

---

## Related Systems

- **Combat System**: Boss battle mechanics and combat
- **Gear Sets**: Equipment drops from Campaign Challenges
- **Stamina System**: Required for Campaign Challenge replays
- **Compendium**: Adversaries of Power tracking
- **Rewards**: Echo Jade, Martial Arts Tomes, currencies
`;

// Markdown styles
const markdownStyles = {
  body: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 24,
  },
  heading1: {
    ...typography.h2,
    color: colors.primary,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  heading2: {
    ...typography.h3,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  heading3: {
    ...typography.h4,
    color: colors.textSecondary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  paragraph: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    lineHeight: 24,
  },
  list_item: {
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  bullet_list: {
    marginBottom: spacing.md,
  },
  strong: {
    color: colors.text,
    fontWeight: '700' as const,
  },
  hr: {
    backgroundColor: colors.border,
    height: 1,
    marginVertical: spacing.md,
  },
};

interface BossCardProps {
  boss: typeof campaignBosses[0];
}

const BossCard: React.FC<BossCardProps> = ({ boss }) => (
  <View style={styles.bossCard}>
    <Image source={boss.image} style={styles.bossImage} resizeMode="cover" />
    <View style={styles.bossInfo}>
      <Text style={styles.bossName}>{boss.name}</Text>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Type:</Text>
        <Text style={styles.statValue}>{boss.type}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Classification:</Text>
        <Text style={styles.statValue}>{boss.classification}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Encounter Context:</Text>
        <Text style={styles.statValue}>{boss.encounterContext}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Replayable:</Text>
        <Text style={styles.statValue}>{boss.replayable}</Text>
      </View>

      <View style={styles.rewardsSection}>
        <Text style={styles.rewardsTitle}>First Clear Rewards:</Text>
        <Text style={styles.rewardsText}>{boss.firstClearRewards}</Text>
      </View>

      <View style={styles.rewardsSection}>
        <Text style={styles.rewardsTitle}>Challenge Rewards:</Text>
        <Text style={styles.rewardsText}>{boss.challengeRewards}</Text>
      </View>
    </View>
  </View>
);

interface WorldBossCardProps {
  boss: typeof worldBosses[0];
}

const WorldBossCard: React.FC<WorldBossCardProps> = ({ boss }) => (
  <View style={styles.bossCard}>
    <Image source={boss.image} style={styles.bossImage} resizeMode="cover" />
    <View style={styles.bossInfo}>
      <Text style={styles.bossName}>{boss.name}</Text>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Type:</Text>
        <Text style={styles.statValue}>{boss.type}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Classification:</Text>
        <Text style={styles.statValue}>{boss.classification}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Encounter Type:</Text>
        <Text style={styles.statValue}>{boss.encounterType}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Availability:</Text>
        <Text style={styles.statValue}>{boss.availability}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Approach:</Text>
        <Text style={styles.statValue}>{boss.approach}</Text>
      </View>

      {boss.bossMechanic && (
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Boss Mechanic:</Text>
          <Text style={styles.statValue}>{boss.bossMechanic}</Text>
        </View>
      )}

      <View style={styles.rewardsSection}>
        <Text style={styles.rewardsTitle}>Theme:</Text>
        <Text style={styles.rewardsText}>{boss.theme}</Text>
      </View>
    </View>
  </View>
);

export default function BossesContent() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Overview and system info */}
      <Markdown style={markdownStyles}>{overviewContent}</Markdown>

      {/* Campaign boss cards with images */}
      {campaignBosses.map((boss, index) => (
        <BossCard key={index} boss={boss} />
      ))}

      {/* Zheng the Frostwing (no image) */}
      <Markdown style={markdownStyles}>{zhengContent}</Markdown>

      {/* World bosses header */}
      <Markdown style={markdownStyles}>{worldBossesHeader}</Markdown>

      {/* World boss cards with images */}
      {worldBosses.map((boss, index) => (
        <WorldBossCard key={index} boss={boss} />
      ))}

      {/* Tips, rewards, and additional info */}
      <Markdown style={markdownStyles}>{tipsAndInfoContent}</Markdown>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl * 2,
  },
  bossCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  bossImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.border,
  },
  bossInfo: {
    padding: spacing.md,
  },
  bossName: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  statRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
    flexWrap: 'wrap',
  },
  statLabel: {
    ...typography.body,
    fontWeight: '700',
    color: colors.text,
    marginRight: spacing.xs,
  },
  statValue: {
    ...typography.body,
    color: colors.textSecondary,
    flex: 1,
  },
  rewardsSection: {
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  rewardsTitle: {
    ...typography.body,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  rewardsText: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
