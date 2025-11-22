import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

export type OnboardingStackParamList = {
  LanguageSelection: undefined;
  IntroCarousel: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Character: undefined;
  Items: undefined;
  Locations: undefined;
  Progression: undefined;
  More: undefined;
};

export type DatabaseStackParamList = {
  DatabaseHome: undefined;
  CategoryList: { categoryId: string; categoryName: string };
  ItemDetail: { itemId: string };
};

export type WeaponStackParamList = {
  WeaponList: undefined;
  WeaponDetail: { weaponId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type OnboardingStackScreenProps<T extends keyof OnboardingStackParamList> =
  NativeStackScreenProps<OnboardingStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type DatabaseStackScreenProps<T extends keyof DatabaseStackParamList> =
  NativeStackScreenProps<DatabaseStackParamList, T>;

export type WeaponStackScreenProps<T extends keyof WeaponStackParamList> =
  NativeStackScreenProps<WeaponStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
