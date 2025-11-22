import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Markdown from 'react-native-markdown-display';
import { useTranslation } from 'react-i18next';
import { colors, typography, spacing } from '../../theme';
import { useGameContent } from '../../hooks/useGameContent';

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

// Create screen component for each character section
const createCharacterScreen = (filename: string) => {
  const ScreenComponent = () => {
    const content = useGameContent('character', filename);
    return (
      <ScrollView style={styles.sceneContainer} contentContainerStyle={styles.sceneContent}>
        <Markdown style={markdownStyles}>{content}</Markdown>
      </ScrollView>
    );
  };
  return ScreenComponent;
};

// Special component for attributes with hero image
const AttributesScreen = () => {
  const content = useGameContent('character', 'attributes-and-stats');
  return (
    <ScrollView style={styles.sceneContainer} contentContainerStyle={styles.sceneContent}>
      <Image
        source={require('../../../assets/attributes.png')}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <Markdown style={markdownStyles}>{content}</Markdown>
    </ScrollView>
  );
};

// Special component for combat with hero image
const CombatScreen = () => {
  const content = useGameContent('character', 'combat-system');
  return (
    <ScrollView style={styles.sceneContainer} contentContainerStyle={styles.sceneContent}>
      <Image
        source={require('../../../assets/combat_top_banner.png')}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <Markdown style={markdownStyles}>{content}</Markdown>
    </ScrollView>
  );
};

// Create scenes for all character sections
const renderScene = SceneMap({
  attributes: AttributesScreen,
  combat: CombatScreen,
  mechanics: createCharacterScreen('game-mechanics'),
  modes: createCharacterScreen('game-modes'),
  abilities: createCharacterScreen('special-abilities'),
  theft: createCharacterScreen('skill-theft'),
});

export default function CharacterScreen() {
  const { t } = useTranslation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  // Character data with tab labels (using translations)
  const characterData = [
    { key: 'attributes', title: t('character.attributes') },
    { key: 'combat', title: t('character.combat') },
    { key: 'mechanics', title: t('character.mechanics') },
    { key: 'modes', title: t('character.modes') },
    { key: 'abilities', title: t('character.abilities') },
    { key: 'theft', title: t('character.skillTheft') },
  ];

  const [routes] = useState(characterData.map(({ key, title }) => ({ key, title })));

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
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: spacing.lg,
  },
});
