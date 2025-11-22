import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Markdown from 'react-native-markdown-display';
import { useTranslation } from 'react-i18next';
import { colors, typography, spacing } from '../../theme';
import { useGameContent } from '../../hooks/useGameContent';

// Components
import WorldMap from '../../components/WorldMap';
import BossesContent from '../../components/BossesContent';

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
  ordered_list: {
    marginBottom: spacing.md,
  },
  code_inline: {
    backgroundColor: colors.surface,
    color: colors.primary,
    paddingHorizontal: spacing.xs,
    borderRadius: 4,
  },
  code_block: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginVertical: spacing.sm,
  },
  fence: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginVertical: spacing.sm,
  },
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginVertical: spacing.md,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  th: {
    color: colors.primary,
    fontWeight: '700' as const,
    padding: spacing.sm,
  },
  td: {
    color: colors.textSecondary,
    padding: spacing.sm,
  },
  blockquote: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    paddingLeft: spacing.md,
    marginLeft: 0,
    fontStyle: 'italic',
  },
  hr: {
    backgroundColor: colors.border,
    height: 1,
    marginVertical: spacing.md,
  },
  link: {
    color: colors.primary,
  },
  strong: {
    color: colors.text,
    fontWeight: '700' as const,
  },
  em: {
    fontStyle: 'italic' as const,
  },
};

// Create screen component for each locations section
const createLocationsScreen = (category: 'locations' | 'character', filename: string) => {
  const ScreenComponent = () => {
    const content = useGameContent(category, filename);
    return (
      <ScrollView style={styles.sceneContainer} contentContainerStyle={styles.sceneContent}>
        <Markdown style={markdownStyles}>{content}</Markdown>
      </ScrollView>
    );
  };
  return ScreenComponent;
};

// World Map scene with interactive map
const WorldMapScene = () => <WorldMap />;

// Bosses scene with cards showing images and info
const BossesScene = () => <BossesContent />;

// Create scenes for all locations sections
const renderScene = SceneMap({
  worldmap: WorldMapScene,
  exploration: createLocationsScreen('locations', 'exploration-features'),
  housing: createLocationsScreen('character', 'player-housing'),
  quests: createLocationsScreen('locations', 'quests'),
  factions: createLocationsScreen('locations', 'factions'),
  sects: createLocationsScreen('locations', 'sects'),
  jianghu: createLocationsScreen('locations', 'jianghu-friends'),
  bosses: BossesScene,
  enemies: createLocationsScreen('locations', 'enemies'),
});

export default function LocationsScreen() {
  const { t } = useTranslation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  // Locations data with tab labels (using translations)
  const locationsData = [
    { key: 'worldmap', title: t('locations.worldMap') },
    { key: 'exploration', title: t('locations.exploration') },
    { key: 'housing', title: t('locations.housing') },
    { key: 'quests', title: t('locations.quests') },
    { key: 'factions', title: t('locations.factions') },
    { key: 'sects', title: t('locations.sects') },
    { key: 'jianghu', title: t('locations.jianghu') },
    { key: 'bosses', title: t('bosses.title') },
    { key: 'enemies', title: t('locations.enemies') },
  ];

  const [routes] = useState(locationsData.map(({ key, title }) => ({ key, title })));

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      activeColor={colors.primary}
      inactiveColor={colors.textSecondary}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    width: 'auto',
    paddingHorizontal: spacing.md,
  },
  indicator: {
    backgroundColor: colors.primary,
    height: 3,
  },
  label: {
    ...typography.label,
    textTransform: 'none',
    fontWeight: '600',
  },
  sceneContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sceneContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl * 2,
  },
});
