# Where Winds Meet - Companion App

A comprehensive companion app for **Where Winds Meet**, a wuxia action RPG set in 10th-century China. The app provides players with detailed game information, guides, and references in multiple languages.

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [App Structure](#app-structure)
4. [Content System](#content-system)
5. [Translation Workflow](#translation-workflow)
6. [Adding New Content](#adding-new-content)
7. [Development](#development)
8. [Project Structure](#project-structure)

---

## Overview

### What is this app?

A mobile companion app (iOS/Android/Web) that provides:
- **Character guides**: Attributes, combat, mechanics, game modes, abilities
- **Item database**: Weapons, equipment, crafting recipes, mounts
- **Location guides**: World map, exploration, housing, quests, factions, sects
- **Progression systems**: Martial arts, inner ways, mystic skills, path guides
- **Multilingual support**: English, Traditional Chinese, Japanese, Korean

### Game Background

Where Winds Meet is a free-to-play open-world wuxia action RPG set during the Five Dynasties and Ten Kingdoms era (10th-century China).

---

## Technology Stack

### Core
- **React Native** 0.81.5 + **Expo** ~54
- **TypeScript** ~5.9
- **React** 19.1.0

### Navigation
- **React Navigation** 7.x
  - Bottom Tabs Navigator (main tabs)
  - Native Stack Navigator (onboarding flow)
  - Tab View (sub-tabs within main tabs)

### Content & Display
- **react-native-markdown-display** - Renders game content
- **react-i18next** + **i18next** - Internationalization
- **expo-localization** - Device locale detection

### State Management
- **Zustand** - Lightweight state management

### UI Components
- **React Native Paper** - Material Design components
- **React Native Vector Icons** - Icon library
- Custom theme system (Wuxia-inspired gold/black design)

### Monetization (Ready)
- **react-native-google-mobile-ads** - Ad integration
- **react-native-purchases** - In-app purchases

---

## App Structure

### Navigation Flow

```
App Start
  └─> Onboarding (first launch only)
       ├─> Language Selection (EN, ZH-TW, JA, KO)
       └─> Intro Carousel (3 slides)
            └─> Main App

Main App (Bottom Tabs)
  ├─> Home (News & Updates)
  ├─> Character (6 sub-tabs with markdown content)
  ├─> Items (5 sub-tabs: Weapons use database, others use markdown)
  ├─> Locations (9 sub-tabs with markdown content)
  ├─> Progression (5 sub-tabs with markdown content)
  └─> More (Settings & additional features)
```

### Main Tabs Overview

#### 1. **Home**
- Welcome message
- Latest news and events
- Featured content
- No sub-tabs

#### 2. **Character** (6 sub-tabs)
- Attributes
- Combat
- Mechanics
- Modes
- Abilities
- Skill Theft

#### 3. **Items** (5 sub-tabs)
- **Weapons** (uses WeaponDatabase with images)
- Equipment
- Items & Materials
- Crafting
- Mounts

#### 4. **Locations** (9 sub-tabs)
- World Map (image viewer)
- Exploration
- Housing
- Quests
- Factions
- Sects
- Jianghu Friends
- Bosses (card-based display)
- Enemies

#### 5. **Progression** (5 sub-tabs)
- Martial Arts
- Inner Ways
- Mystic Skills
- Exploration Skills
- Path Guides

#### 6. **More**
- Settings
- About
- Additional features

---

## Content System

### How Content Works

All game content is stored as **TypeScript files** with markdown strings, organized by:
1. **Category** (character, items, locations, progression)
2. **Language** (en, zh-TW, ja, ko)
3. **Content file** (e.g., `attributes-and-stats.ts`)

### File Organization

```
wwm-helper-app/src/data/
├── character/
│   ├── en/
│   │   ├── attributes-and-stats.ts
│   │   ├── combat-system.ts
│   │   ├── game-mechanics.ts
│   │   ├── game-modes.ts
│   │   ├── player-housing.ts
│   │   ├── skill-theft.ts
│   │   └── special-abilities.ts
│   ├── zh-TW/
│   ├── ja/
│   └── ko/
├── items/
│   ├── en/
│   │   ├── crafting.ts
│   │   ├── equipment-and-gear.ts
│   │   ├── items-and-materials.ts
│   │   ├── mounts.ts
│   │   └── weapons.ts (not currently used)
│   ├── zh-TW/
│   ├── ja/
│   └── ko/
├── locations/
│   ├── en/
│   │   ├── bosses.ts
│   │   ├── enemies.ts
│   │   ├── exploration-features.ts
│   │   ├── factions.ts
│   │   ├── jianghu-friends.ts
│   │   ├── quests.ts
│   │   ├── sects.ts
│   │   └── world-map.ts
│   ├── zh-TW/
│   ├── ja/
│   └── ko/
├── progression/
│   ├── en/
│   │   ├── exploration-skills.ts
│   │   ├── inner-ways.ts
│   │   ├── martial-arts.ts
│   │   ├── mystic-skills.ts
│   │   └── path-guides.ts
│   ├── zh-TW/
│   ├── ja/
│   └── ko/
└── weapons/
    ├── en/
    │   └── weaponDatabase.ts (detailed weapon entries)
    ├── zh-TW/
    ├── ja/
    └── ko/
```

### Content Loading

**Hook:** `useGameContent(category, filename)`

**Example:**
```typescript
const content = useGameContent('character', 'combat-system');
// Automatically loads content in user's selected language
```

**How it works:**
1. User selects language in onboarding (stored in AsyncStorage)
2. i18next manages current language
3. `useGameContent` hook loads correct language file
4. Markdown component renders content with custom styling

---

## Translation Workflow

### Current Translation Status

- ✅ **English (en)**: Complete (source language)
- 🔄 **Traditional Chinese (zh-TW)**: In progress
- 🔄 **Japanese (ja)**: In progress
- 🔄 **Korean (ko)**: In progress

### Translation Files

#### 1. **Content Files** (Game guides)
Located in: `wwm-helper-app/src/data/{category}/{lang}/`
- Format: TypeScript files exporting markdown strings
- Example: `character/zh-TW/combat-system.ts`

#### 2. **UI Translations** (App interface)
Located in: `wwm-helper-app/src/locales/`
- `en.json` - English UI strings
- `zh-TW.json` - Traditional Chinese UI strings
- `ja.json` - Japanese UI strings
- `ko.json` - Korean UI strings

### Translation Process

#### Step 1: Source Content (Markdown)
Game content starts in: `/game-data/{category}/{file}.md`

Example: `/game-data/Character/combat-system.md`

#### Step 2: Convert to TypeScript
Run conversion script:
```bash
npm run convert-markdown
```

This generates:
- `src/data/character/en/combat-system.ts`
- Placeholder files for other languages

#### Step 3: Translate Content
1. Copy English `.ts` file to target language folder
2. Translate the markdown content inside the string
3. Keep markdown formatting intact
4. Test in app to verify rendering

#### Step 4: Translate UI Strings
Edit `src/locales/{lang}.json` with translated UI text:
- Tab labels
- Button text
- Navigation labels
- Error messages

---

## Adding New Content

### Scenario 1: Add New Game Content

**Example:** Adding "Careers" section to Character tab

#### 1. Create markdown source
```
/game-data/Character/careers.md
```

#### 2. Convert to TypeScript (all languages)
```bash
node wwm-helper-app/scripts/convertMarkdownToTS.js
```

This creates:
```
src/data/character/en/careers.ts
src/data/character/zh-TW/careers.ts
src/data/character/ja/careers.ts
src/data/character/ko/careers.ts
```

#### 3. Import in `useGameContent.ts`
```typescript
// Add imports for all languages
import * as characterEnCareers from '../data/character/en/careers';
import * as characterZhTWCareers from '../data/character/zh-TW/careers';
// ... etc

// Add to contentMap
en: {
  character: {
    // ... existing
    'careers': characterEnCareers,
  }
}
```

#### 4. Add tab to screen
```typescript
// In Character.tsx
const characterData = [
  // ... existing tabs
  { key: 'careers', title: t('character.careers') },
];

const renderScene = SceneMap({
  // ... existing
  careers: createCharacterScreen('careers'),
});
```

#### 5. Add translation key
```json
// In src/locales/en.json
{
  "character": {
    "careers": "Careers"
  }
}
```

### Scenario 2: Add New Tab

**Example:** Adding "Social" tab

#### 1. Create tab screen
```typescript
// src/screens/tabs/Social.tsx
export default function SocialScreen() { ... }
```

#### 2. Register in BottomTabNavigator
```typescript
<Tab.Screen
  name="Social"
  component={SocialScreen}
  options={{
    title: t('tabs.social'),
    tabBarIcon: ({ focused }) => (/* icon */)
  }}
/>
```

#### 3. Add data structure
Create content files in:
```
src/data/social/en/
src/data/social/zh-TW/
src/data/social/ja/
src/data/social/ko/
```

---

## Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
cd wwm-helper-app
npm install
```

### Running the App

```bash
# Start Expo dev server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

### Reset Onboarding (for testing)

Onboarding is temporarily auto-reset in `App.tsx` (lines 21-22):
```typescript
await AsyncStorage.default.removeItem('@wwm_helper:onboarding_complete');
```

Remove this in production!

### Check Translations

```bash
npm run check-translations
```

This script verifies all translation keys exist across all languages.

---

## Project Structure

### Key Directories

```
wwm-helper-app/
├── assets/                    # Images, icons, fonts
│   ├── bosses-campaign/       # Boss images
│   ├── bosses-world/          # World boss images
│   ├── martial_art_weapons/  # Weapon images
│   └── menu_buttons/          # Tab icons
├── src/
│   ├── components/
│   │   ├── navigation/        # Navigation components
│   │   ├── weapons/           # Weapon-related components
│   │   ├── BossesContent.tsx  # Bosses display
│   │   └── WorldMap.tsx       # World map viewer
│   ├── data/                  # All game content
│   │   ├── character/
│   │   ├── items/
│   │   ├── locations/
│   │   ├── progression/
│   │   └── weapons/
│   ├── hooks/
│   │   ├── useGameContent.ts  # Content loading hook
│   │   └── useWeaponDatabase.ts
│   ├── locales/               # UI translations
│   │   ├── en.json
│   │   ├── zh-TW.json
│   │   ├── ja.json
│   │   └── ko.json
│   ├── screens/
│   │   ├── onboarding/        # Onboarding screens
│   │   └── tabs/              # Main tab screens
│   ├── services/
│   │   └── i18n.ts            # i18next configuration
│   ├── theme/                 # Design system
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   └── types/                 # TypeScript types
├── scripts/
│   └── convertMarkdownToTS.js # Markdown converter
├── App.tsx                    # Root component
├── package.json
└── tsconfig.json

game-data/                     # Source markdown files
├── Character/
├── items/
├── locations/
└── progression/
```

### Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Root component, app initialization |
| `src/components/navigation/RootNavigator.tsx` | Onboarding vs Main app routing |
| `src/components/navigation/BottomTabNavigator.tsx` | Main tab navigation |
| `src/hooks/useGameContent.ts` | Content loading system |
| `src/services/i18n.ts` | i18next configuration |
| `src/theme/` | Design system (colors, typography, spacing) |
| `.claude/command.md` | Quick reference for tab structure |

---

## Key Concepts

### 1. Markdown-based Content
- All game guides stored as markdown strings
- Rendered with custom styling for wuxia theme
- Supports tables, lists, code blocks, images

### 2. Multilingual Architecture
- Language selected once in onboarding
- All content automatically loads in selected language
- Fallback to English if translation missing

### 3. Tab-based Navigation
- Main tabs for major sections
- Sub-tabs for detailed categories
- Consistent navigation pattern throughout

### 4. Theme System
- Gold/bronze wuxia aesthetic
- Dark mode optimized
- Consistent spacing and typography
- Category-specific gradient colors

### 5. Special Components
- **WeaponsNavigator**: Interactive weapon database with images
- **WorldMap**: Zoomable world map viewer
- **BossesContent**: Card-based boss display
- **Markdown renderer**: Custom-styled markdown display

---

## Quick Reference

See `.claude/command.md` for complete tab structure reference.

---

## Contributing

### For Developers
1. Follow existing file structure
2. Use TypeScript for type safety
3. Keep markdown formatting consistent
4. Test all language versions

### For Translators
1. Work in `src/data/{category}/{lang}/` for content
2. Work in `src/locales/{lang}.json` for UI
3. Keep markdown syntax intact
4. Test in app before submitting

---

## License

This companion app is built for the Where Winds Meet player community.

---

## Contact

For questions or issues, please contact the development team.
