import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useWeaponDatabase } from '../../hooks/useWeaponDatabase';
import WeaponCard from '../../components/weapons/WeaponCard';
import { colors, typography, spacing } from '../../theme';

interface WeaponListScreenProps {
  onWeaponPress: (weaponId: string) => void;
}

export default function WeaponListScreen({ onWeaponPress }: WeaponListScreenProps) {
  const { t } = useTranslation();
  const weaponDatabase = useWeaponDatabase();

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>{t('weapons.title')}</Text>
        <Text style={styles.subtitle}>
          {weaponDatabase.length === 1
            ? t('weapons.weaponCountSingular', { count: weaponDatabase.length })
            : t('weapons.weaponsCount', { count: weaponDatabase.length })}
        </Text>

        {weaponDatabase.map(weapon => (
          <WeaponCard
            key={weapon.id}
            weapon={weapon}
            onPress={() => onWeaponPress(weapon.id)}
          />
        ))}

        {weaponDatabase.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>{t('weapons.noWeaponsFound')}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl * 2,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  emptyState: {
    paddingVertical: spacing.xxl * 2,
    alignItems: 'center',
  },
  emptyText: {
    ...typography.body,
    color: colors.textTertiary,
  },
});
