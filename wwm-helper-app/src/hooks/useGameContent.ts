import { useTranslation } from 'react-i18next';

// Character content - English
import * as characterEnAttributesStats from '../data/character/en/attributes-and-stats';
import * as characterEnCombatSystem from '../data/character/en/combat-system';
import * as characterEnGameMechanics from '../data/character/en/game-mechanics';
import * as characterEnGameModes from '../data/character/en/game-modes';
import * as characterEnSkillTheft from '../data/character/en/skill-theft';
import * as characterEnSpecialAbilities from '../data/character/en/special-abilities';
import * as characterEnPlayerHousing from '../data/character/en/player-housing';

// Character content - Traditional Chinese
import * as characterZhTWAttributesStats from '../data/character/zh-TW/attributes-and-stats';
import * as characterZhTWCombatSystem from '../data/character/zh-TW/combat-system';
import * as characterZhTWGameMechanics from '../data/character/zh-TW/game-mechanics';
import * as characterZhTWGameModes from '../data/character/zh-TW/game-modes';
import * as characterZhTWSkillTheft from '../data/character/zh-TW/skill-theft';
import * as characterZhTWSpecialAbilities from '../data/character/zh-TW/special-abilities';
import * as characterZhTWPlayerHousing from '../data/character/zh-TW/player-housing';

// Character content - Japanese
import * as characterJaAttributesStats from '../data/character/ja/attributes-and-stats';
import * as characterJaCombatSystem from '../data/character/ja/combat-system';
import * as characterJaGameMechanics from '../data/character/ja/game-mechanics';
import * as characterJaGameModes from '../data/character/ja/game-modes';
import * as characterJaSkillTheft from '../data/character/ja/skill-theft';
import * as characterJaSpecialAbilities from '../data/character/ja/special-abilities';
import * as characterJaPlayerHousing from '../data/character/ja/player-housing';

// Character content - Korean
import * as characterKoAttributesStats from '../data/character/ko/attributes-and-stats';
import * as characterKoCombatSystem from '../data/character/ko/combat-system';
import * as characterKoGameMechanics from '../data/character/ko/game-mechanics';
import * as characterKoGameModes from '../data/character/ko/game-modes';
import * as characterKoSkillTheft from '../data/character/ko/skill-theft';
import * as characterKoSpecialAbilities from '../data/character/ko/special-abilities';
import * as characterKoPlayerHousing from '../data/character/ko/player-housing';

// Items content - English
import * as itemsEnCrafting from '../data/items/en/crafting';
import * as itemsEnEquipmentAndGear from '../data/items/en/equipment-and-gear';
import * as itemsEnItemsAndMaterials from '../data/items/en/items-and-materials';
import * as itemsEnMounts from '../data/items/en/mounts';
import * as itemsEnWeapons from '../data/items/en/weapons';

// Items content - Traditional Chinese
import * as itemsZhTWCrafting from '../data/items/zh-TW/crafting';
import * as itemsZhTWEquipmentAndGear from '../data/items/zh-TW/equipment-and-gear';
import * as itemsZhTWItemsAndMaterials from '../data/items/zh-TW/items-and-materials';
import * as itemsZhTWMounts from '../data/items/zh-TW/mounts';
import * as itemsZhTWWeapons from '../data/items/zh-TW/weapons';

// Items content - Japanese
import * as itemsJaCrafting from '../data/items/ja/crafting';
import * as itemsJaEquipmentAndGear from '../data/items/ja/equipment-and-gear';
import * as itemsJaItemsAndMaterials from '../data/items/ja/items-and-materials';
import * as itemsJaMounts from '../data/items/ja/mounts';
import * as itemsJaWeapons from '../data/items/ja/weapons';

// Items content - Korean
import * as itemsKoCrafting from '../data/items/ko/crafting';
import * as itemsKoEquipmentAndGear from '../data/items/ko/equipment-and-gear';
import * as itemsKoItemsAndMaterials from '../data/items/ko/items-and-materials';
import * as itemsKoMounts from '../data/items/ko/mounts';
import * as itemsKoWeapons from '../data/items/ko/weapons';

// Locations content - English
import * as locationsEnBosses from '../data/locations/en/bosses';
import * as locationsEnEnemies from '../data/locations/en/enemies';
import * as locationsEnExplorationFeatures from '../data/locations/en/exploration-features';
import * as locationsEnFactions from '../data/locations/en/factions';
import * as locationsEnJianghuFriends from '../data/locations/en/jianghu-friends';
import * as locationsEnQuests from '../data/locations/en/quests';
import * as locationsEnSects from '../data/locations/en/sects';
import * as locationsEnWorldMap from '../data/locations/en/world-map';

// Locations content - Traditional Chinese
import * as locationsZhTWBosses from '../data/locations/zh-TW/bosses';
import * as locationsZhTWEnemies from '../data/locations/zh-TW/enemies';
import * as locationsZhTWExplorationFeatures from '../data/locations/zh-TW/exploration-features';
import * as locationsZhTWFactions from '../data/locations/zh-TW/factions';
import * as locationsZhTWJianghuFriends from '../data/locations/zh-TW/jianghu-friends';
import * as locationsZhTWQuests from '../data/locations/zh-TW/quests';
import * as locationsZhTWSects from '../data/locations/zh-TW/sects';
import * as locationsZhTWWorldMap from '../data/locations/zh-TW/world-map';

// Locations content - Japanese
import * as locationsJaBosses from '../data/locations/ja/bosses';
import * as locationsJaEnemies from '../data/locations/ja/enemies';
import * as locationsJaExplorationFeatures from '../data/locations/ja/exploration-features';
import * as locationsJaFactions from '../data/locations/ja/factions';
import * as locationsJaJianghuFriends from '../data/locations/ja/jianghu-friends';
import * as locationsJaQuests from '../data/locations/ja/quests';
import * as locationsJaSects from '../data/locations/ja/sects';
import * as locationsJaWorldMap from '../data/locations/ja/world-map';

// Locations content - Korean
import * as locationsKoBosses from '../data/locations/ko/bosses';
import * as locationsKoEnemies from '../data/locations/ko/enemies';
import * as locationsKoExplorationFeatures from '../data/locations/ko/exploration-features';
import * as locationsKoFactions from '../data/locations/ko/factions';
import * as locationsKoJianghuFriends from '../data/locations/ko/jianghu-friends';
import * as locationsKoQuests from '../data/locations/ko/quests';
import * as locationsKoSects from '../data/locations/ko/sects';
import * as locationsKoWorldMap from '../data/locations/ko/world-map';

// Progression content - English
import * as progressionEnExplorationSkills from '../data/progression/en/exploration-skills';
import * as progressionEnInnerWays from '../data/progression/en/inner-ways';
import * as progressionEnMartialArts from '../data/progression/en/martial-arts';
import * as progressionEnMysticSkills from '../data/progression/en/mystic-skills';
import * as progressionEnPathGuides from '../data/progression/en/path-guides';

// Progression content - Traditional Chinese
import * as progressionZhTWExplorationSkills from '../data/progression/zh-TW/exploration-skills';
import * as progressionZhTWInnerWays from '../data/progression/zh-TW/inner-ways';
import * as progressionZhTWMartialArts from '../data/progression/zh-TW/martial-arts';
import * as progressionZhTWMysticSkills from '../data/progression/zh-TW/mystic-skills';
import * as progressionZhTWPathGuides from '../data/progression/zh-TW/path-guides';

// Progression content - Japanese
import * as progressionJaExplorationSkills from '../data/progression/ja/exploration-skills';
import * as progressionJaInnerWays from '../data/progression/ja/inner-ways';
import * as progressionJaMartialArts from '../data/progression/ja/martial-arts';
import * as progressionJaMysticSkills from '../data/progression/ja/mystic-skills';
import * as progressionJaPathGuides from '../data/progression/ja/path-guides';

// Progression content - Korean
import * as progressionKoExplorationSkills from '../data/progression/ko/exploration-skills';
import * as progressionKoInnerWays from '../data/progression/ko/inner-ways';
import * as progressionKoMartialArts from '../data/progression/ko/martial-arts';
import * as progressionKoMysticSkills from '../data/progression/ko/mystic-skills';
import * as progressionKoPathGuides from '../data/progression/ko/path-guides';

// Content mapping object
const contentMap: Record<string, Record<string, Record<string, { content: string }>>> = {
  en: {
    character: {
      'attributes-and-stats': characterEnAttributesStats,
      'combat-system': characterEnCombatSystem,
      'game-mechanics': characterEnGameMechanics,
      'game-modes': characterEnGameModes,
      'skill-theft': characterEnSkillTheft,
      'special-abilities': characterEnSpecialAbilities,
      'player-housing': characterEnPlayerHousing,
    },
    items: {
      'crafting': itemsEnCrafting,
      'equipment-and-gear': itemsEnEquipmentAndGear,
      'items-and-materials': itemsEnItemsAndMaterials,
      'mounts': itemsEnMounts,
      'weapons': itemsEnWeapons,
    },
    locations: {
      'bosses': locationsEnBosses,
      'enemies': locationsEnEnemies,
      'exploration-features': locationsEnExplorationFeatures,
      'factions': locationsEnFactions,
      'jianghu-friends': locationsEnJianghuFriends,
      'quests': locationsEnQuests,
      'sects': locationsEnSects,
      'world-map': locationsEnWorldMap,
    },
    progression: {
      'exploration-skills': progressionEnExplorationSkills,
      'inner-ways': progressionEnInnerWays,
      'martial-arts': progressionEnMartialArts,
      'mystic-skills': progressionEnMysticSkills,
      'path-guides': progressionEnPathGuides,
    },
  },
  'zh-TW': {
    character: {
      'attributes-and-stats': characterZhTWAttributesStats,
      'combat-system': characterZhTWCombatSystem,
      'game-mechanics': characterZhTWGameMechanics,
      'game-modes': characterZhTWGameModes,
      'skill-theft': characterZhTWSkillTheft,
      'special-abilities': characterZhTWSpecialAbilities,
      'player-housing': characterZhTWPlayerHousing,
    },
    items: {
      'crafting': itemsZhTWCrafting,
      'equipment-and-gear': itemsZhTWEquipmentAndGear,
      'items-and-materials': itemsZhTWItemsAndMaterials,
      'mounts': itemsZhTWMounts,
      'weapons': itemsZhTWWeapons,
    },
    locations: {
      'bosses': locationsZhTWBosses,
      'enemies': locationsZhTWEnemies,
      'exploration-features': locationsZhTWExplorationFeatures,
      'factions': locationsZhTWFactions,
      'jianghu-friends': locationsZhTWJianghuFriends,
      'quests': locationsZhTWQuests,
      'sects': locationsZhTWSects,
      'world-map': locationsZhTWWorldMap,
    },
    progression: {
      'exploration-skills': progressionZhTWExplorationSkills,
      'inner-ways': progressionZhTWInnerWays,
      'martial-arts': progressionZhTWMartialArts,
      'mystic-skills': progressionZhTWMysticSkills,
      'path-guides': progressionZhTWPathGuides,
    },
  },
  ja: {
    character: {
      'attributes-and-stats': characterJaAttributesStats,
      'combat-system': characterJaCombatSystem,
      'game-mechanics': characterJaGameMechanics,
      'game-modes': characterJaGameModes,
      'skill-theft': characterJaSkillTheft,
      'special-abilities': characterJaSpecialAbilities,
      'player-housing': characterJaPlayerHousing,
    },
    items: {
      'crafting': itemsJaCrafting,
      'equipment-and-gear': itemsJaEquipmentAndGear,
      'items-and-materials': itemsJaItemsAndMaterials,
      'mounts': itemsJaMounts,
      'weapons': itemsJaWeapons,
    },
    locations: {
      'bosses': locationsJaBosses,
      'enemies': locationsJaEnemies,
      'exploration-features': locationsJaExplorationFeatures,
      'factions': locationsJaFactions,
      'jianghu-friends': locationsJaJianghuFriends,
      'quests': locationsJaQuests,
      'sects': locationsJaSects,
      'world-map': locationsJaWorldMap,
    },
    progression: {
      'exploration-skills': progressionJaExplorationSkills,
      'inner-ways': progressionJaInnerWays,
      'martial-arts': progressionJaMartialArts,
      'mystic-skills': progressionJaMysticSkills,
      'path-guides': progressionJaPathGuides,
    },
  },
  ko: {
    character: {
      'attributes-and-stats': characterKoAttributesStats,
      'combat-system': characterKoCombatSystem,
      'game-mechanics': characterKoGameMechanics,
      'game-modes': characterKoGameModes,
      'skill-theft': characterKoSkillTheft,
      'special-abilities': characterKoSpecialAbilities,
      'player-housing': characterKoPlayerHousing,
    },
    items: {
      'crafting': itemsKoCrafting,
      'equipment-and-gear': itemsKoEquipmentAndGear,
      'items-and-materials': itemsKoItemsAndMaterials,
      'mounts': itemsKoMounts,
      'weapons': itemsKoWeapons,
    },
    locations: {
      'bosses': locationsKoBosses,
      'enemies': locationsKoEnemies,
      'exploration-features': locationsKoExplorationFeatures,
      'factions': locationsKoFactions,
      'jianghu-friends': locationsKoJianghuFriends,
      'quests': locationsKoQuests,
      'sects': locationsKoSects,
      'world-map': locationsKoWorldMap,
    },
    progression: {
      'exploration-skills': progressionKoExplorationSkills,
      'inner-ways': progressionKoInnerWays,
      'martial-arts': progressionKoMartialArts,
      'mystic-skills': progressionKoMysticSkills,
      'path-guides': progressionKoPathGuides,
    },
  },
};

/**
 * Custom hook to dynamically load game content based on current language
 *
 * Usage:
 * const content = useGameContent('character', 'attributes-and-stats');
 */
export function useGameContent(category: string, filename: string): string {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  try {
    // Try to get content from the mapping
    const languageContent = contentMap[currentLanguage];
    if (!languageContent) {
      throw new Error(`Language ${currentLanguage} not found`);
    }

    const categoryContent = languageContent[category];
    if (!categoryContent) {
      throw new Error(`Category ${category} not found for language ${currentLanguage}`);
    }

    const fileContent = categoryContent[filename];
    if (!fileContent || !fileContent.content) {
      throw new Error(`File ${filename} not found in ${category} for language ${currentLanguage}`);
    }

    return fileContent.content;
  } catch (error) {
    // Fallback to English if translation doesn't exist
    console.warn(`Content not found for ${category}/${currentLanguage}/${filename}, falling back to English`, error);
    try {
      const fallbackContent = contentMap.en[category]?.[filename];
      if (fallbackContent && fallbackContent.content) {
        return fallbackContent.content;
      }
    } catch (fallbackError) {
      console.error(`Failed to load content: ${category}/${filename}`, fallbackError);
    }

    return `# Content Not Found\n\nUnable to load content for ${category}/${filename}`;
  }
}

/**
 * Type-safe content categories
 */
export type ContentCategory = 'character' | 'items' | 'locations' | 'progression';
