export type WeaponType = 'Sword' | 'Spear' | 'Fan' | 'Umbrella' | 'Dual Blades' | 'Mo Blade' | 'Rope Dart';

export type WeaponPath = 'Bellstrike - Umbra' | 'Bellstrike - Splendor' | 'Stonesplit - Might' | 'Skillbind - Jade' | 'Skillbind - Deluge' | 'Bamboocut - Wind';

export interface WeaponSkill {
  name: string;
  type: 'Martial Art' | 'Special' | 'Light Attack' | 'Heavy Attack' | 'Charged' | 'Dual-Weapon' | 'Healing';
  description: string;
  recovery?: string;
  key?: string;
}

export interface InternalArt {
  name: string;
  type: string;
  description: string;
}

export interface GearSet {
  name: string;
  pieces: number;
  bonuses: {
    twoSet?: string;
    fourSet?: string;
  };
  howToObtain: string[];
}

export interface Talent {
  name: string;
  unlockMethod: string;
  description: string;
}

export interface WeaponStats {
  strengths: string[];
  weaknesses: string[];
}

export interface Weapon {
  id: string;
  name: string;
  type: WeaponType;
  path: WeaponPath;
  tier?: number;
  image?: any;

  // Overview
  description: string;
  playstyle: string;

  // How to Get
  howToGet: {
    method: string;
    location?: string;
    level?: number;
    details: string;
  };

  // Stats & Strengths
  stats: WeaponStats;

  // Skills
  skills: WeaponSkill[];

  // Internal Arts
  internalArts?: InternalArt[];

  // Gear Sets
  gearSets?: GearSet[];

  // Talents
  talents?: Talent[];

  // Effects
  effects?: {
    name: string;
    description: string;
  }[];

  // Notes
  notes?: string[];
}
