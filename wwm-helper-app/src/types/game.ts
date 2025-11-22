export type GameObjectType =
  | 'martial-art'
  | 'mystic-skill'
  | 'inner-way'
  | 'exploration-skill'
  | 'weapon'
  | 'equipment'
  | 'item'
  | 'material'
  | 'currency'
  | 'enemy'
  | 'boss'
  | 'faction'
  | 'sect'
  | 'quest'
  | 'location';

export type CategoryIcon =
  | 'sword'
  | 'skill'
  | 'item'
  | 'enemy'
  | 'location'
  | 'faction'
  | 'quest'
  | 'equipment';

export interface GameObject {
  id: string;
  name: string;
  type: GameObjectType;
  category: string;
  shortDesc: string;
  description: string;
  imagePlaceholder: CategoryIcon;
  stats?: Record<string, any>;
  attributes?: Record<string, any>;
  relatedIds?: string[];
  metadata?: {
    rarity?: string;
    level?: number;
    region?: string;
    effects?: string[];
    howToObtain?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: CategoryIcon;
  count: number;
  types: GameObjectType[];
}

export interface SearchFilters {
  type?: GameObjectType;
  category?: string;
  rarity?: string;
  region?: string;
}
