# App Tab Structure - Quick Reference

This document provides a quick reference for the tab structure and content organization of the Where Winds Meet Companion App.

---

## Navigation Overview

```
Onboarding Flow (First Launch Only)
├─> Language Selection (EN, ZH-TW, JA, KO)
└─> Intro Carousel (3 slides)

Main App (Bottom Tabs)
├─> Home
├─> Character (6 sub-tabs)
├─> Items (5 sub-tabs)
├─> Locations (9 sub-tabs)
├─> Progression (5 sub-tabs)
└─> More
```

---

## Tab Content Structure

### Home
- Welcome and news
- Latest events (e.g., Twitch Drops)
- Game overview
- **No sub-tabs**

---

### Character (6 sub-tabs)

All sub-tabs use markdown content from `src/data/character/{lang}/`

1. **Attributes**
   - File: `attributes-and-stats.ts`
   - Languages: EN, ZH-TW, JA, KO

2. **Combat**
   - File: `combat-system.ts`
   - Languages: EN, ZH-TW, JA, KO

3. **Mechanics**
   - File: `game-mechanics.ts`
   - Languages: EN, ZH-TW, JA, KO

4. **Modes**
   - File: `game-modes.ts`
   - Languages: EN, ZH-TW, JA, KO

5. **Abilities**
   - File: `special-abilities.ts`
   - Languages: EN, ZH-TW, JA, KO

6. **Skill Theft**
   - File: `skill-theft.ts`
   - Languages: EN, ZH-TW, JA, KO

---

### Items (5 sub-tabs)

Content from `src/data/items/{lang}/` (except Weapons)

1. **Weapons**
   - Uses: `WeaponsNavigator` component
   - Data: `src/data/weapons/{lang}/weaponDatabase.ts`
   - Languages: EN, ZH-TW, JA, KO
   - Display: Interactive weapon cards with images

2. **Equipment**
   - File: `equipment-and-gear.ts`
   - Languages: EN, ZH-TW, JA, KO

3. **Items** (Items & Materials)
   - File: `items-and-materials.ts`
   - Languages: EN, ZH-TW, JA, KO

4. **Crafting**
   - File: `crafting.ts`
   - Languages: EN, ZH-TW, JA, KO

5. **Mounts**
   - File: `mounts.ts`
   - Languages: EN, ZH-TW, JA, KO

---

### Locations (9 sub-tabs)

Content from `src/data/locations/{lang}/` (except World Map and Bosses)

1. **World Map**
   - Component: `WorldMap`
   - Display: Zoomable image viewer
   - Same image for all languages

2. **Exploration**
   - File: `exploration-features.ts`
   - Languages: EN, ZH-TW, JA, KO

3. **Housing**
   - File: `src/data/character/{lang}/player-housing.ts`
   - Note: Located in character folder
   - Languages: EN, ZH-TW, JA, KO

4. **Quests**
   - File: `quests.ts`
   - Languages: EN, ZH-TW, JA, KO

5. **Factions**
   - File: `factions.ts`
   - Languages: EN, ZH-TW, JA, KO

6. **Sects**
   - File: `sects.ts`
   - Languages: EN, ZH-TW, JA, KO

7. **Jianghu Friends**
   - File: `jianghu-friends.ts`
   - Languages: EN, ZH-TW, JA, KO

8. **Bosses**
   - Component: `BossesContent`
   - Display: Card-based with boss images
   - Data: `bosses.ts`
   - Languages: EN, ZH-TW, JA, KO

9. **Enemies**
   - File: `enemies.ts`
   - Languages: EN, ZH-TW, JA, KO

---

### Progression (5 sub-tabs)

All sub-tabs use markdown content from `src/data/progression/{lang}/`

1. **Martial Arts**
   - File: `martial-arts.ts`
   - Languages: EN, ZH-TW, JA, KO
   - Note: Includes weapon paths and martial arts system

2. **Inner Ways**
   - File: `inner-ways.ts`
   - Languages: EN, ZH-TW, JA, KO

3. **Mystic Skills**
   - File: `mystic-skills.ts`
   - Languages: EN, ZH-TW, JA, KO

4. **Exploration**
   - File: `exploration-skills.ts`
   - Languages: EN, ZH-TW, JA, KO

5. **Path Guides**
   - File: `path-guides.ts`
   - Languages: EN, ZH-TW, JA, KO

---

### More
- Settings
- About
- Additional features
- Languages: EN, ZH-TW, JA, KO

---

## Special Components

### Components That Don't Use Standard Markdown

1. **WeaponsNavigator** (Items > Weapons)
   - Interactive weapon database
   - Uses weaponDatabase.ts
   - Displays weapon cards with images and details

2. **WorldMap** (Locations > World Map)
   - Zoomable image viewer
   - Same for all languages

3. **BossesContent** (Locations > Bosses)
   - Card-based display with boss images
   - Campaign and World bosses

---

## Content File Naming Convention

### Standard Pattern
```
src/data/{category}/{language}/{filename}.ts
```

### Examples
```
src/data/character/en/combat-system.ts
src/data/character/zh-TW/combat-system.ts
src/data/items/ja/crafting.ts
src/data/progression/ko/martial-arts.ts
```

### Special Cases
- **Housing**: Located in `character/` folder, used in Locations tab
- **Weapons**: `weaponDatabase.ts` in `weapons/` folder (not `items/`)

---

## Language Codes

| Code | Language |
|------|----------|
| `en` | English |
| `zh-TW` | Traditional Chinese (繁體中文) |
| `ja` | Japanese (日本語) |
| `ko` | Korean (한국어) |

---

## Content Loading Pattern

All tabs use the same pattern (except special components):

```typescript
// 1. Import hook
import { useGameContent } from '../../hooks/useGameContent';

// 2. Create screen component
const createScreen = (filename: string) => {
  const ScreenComponent = () => {
    const content = useGameContent('category', filename);
    return (
      <ScrollView>
        <Markdown>{content}</Markdown>
      </ScrollView>
    );
  };
  return ScreenComponent;
};

// 3. Map scenes
const renderScene = SceneMap({
  key: createScreen('filename'),
});
```

---

## Translation Checklist

When translating content, ensure:

1. ✅ Content file exists in `src/data/{category}/{lang}/`
2. ✅ UI labels exist in `src/locales/{lang}.json`
3. ✅ Markdown formatting preserved
4. ✅ Images and links work correctly
5. ✅ Content renders properly in app

---

## Quick Tips

### Adding a New Sub-tab
1. Create content files for all languages
2. Import in `useGameContent.ts`
3. Add to screen's `renderScene` and tab data
4. Add translation key to `locales/{lang}.json`

### Finding Content Files
- **Character content**: `src/data/character/`
- **Items content**: `src/data/items/`
- **Locations content**: `src/data/locations/`
- **Progression content**: `src/data/progression/`
- **Weapons database**: `src/data/weapons/`

### Screen Files
- **Tab screens**: `src/screens/tabs/`
- **Onboarding**: `src/screens/onboarding/`

---

## Total Counts

- **Main Tabs**: 6
- **Total Sub-tabs**: 25
  - Character: 6
  - Items: 5
  - Locations: 9
  - Progression: 5
- **Languages**: 4 (EN, ZH-TW, JA, KO)
- **Content Files**: ~100+ (25 sub-tabs × 4 languages)

---

For detailed documentation, see main `README.md`
