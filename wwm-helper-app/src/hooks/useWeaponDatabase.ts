import { useTranslation } from 'react-i18next';
import { Weapon } from '../types/weapons';

// Weapon database imports
import { weaponDatabase as weaponDatabaseEn } from '../data/weapons/en/weaponDatabase';
import { weaponDatabase as weaponDatabaseZhTW } from '../data/weapons/zh-TW/weaponDatabase';
import { weaponDatabase as weaponDatabaseJa } from '../data/weapons/ja/weaponDatabase';
import { weaponDatabase as weaponDatabaseKo } from '../data/weapons/ko/weaponDatabase';

// Weapon database mapping
const weaponDatabaseMap: Record<string, Weapon[]> = {
  en: weaponDatabaseEn,
  'zh-TW': weaponDatabaseZhTW,
  ja: weaponDatabaseJa,
  ko: weaponDatabaseKo,
};

/**
 * Custom hook to get the weapon database in the current language
 *
 * Usage:
 * const weapons = useWeaponDatabase();
 */
export function useWeaponDatabase(): Weapon[] {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Get weapon database for current language, fallback to English
  const weaponDatabase = weaponDatabaseMap[currentLanguage] || weaponDatabaseMap.en;

  return weaponDatabase;
}

/**
 * Custom hook to get a specific weapon by ID in the current language
 *
 * Usage:
 * const weapon = useWeaponById('heavenquaker-spear');
 */
export function useWeaponById(weaponId: string): Weapon | undefined {
  const weaponDatabase = useWeaponDatabase();
  return weaponDatabase.find(weapon => weapon.id === weaponId);
}
