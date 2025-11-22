import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Weapon } from '../../types/weapons';
import { colors, typography, spacing, layout } from '../../theme';

interface WeaponCardProps {
  weapon: Weapon;
  onPress: () => void;
}

export default function WeaponCard({ weapon, onPress }: WeaponCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {weapon.image && (
        <Image
          source={weapon.image}
          style={styles.weaponImage}
          resizeMode="contain"
        />
      )}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{weapon.name}</Text>
          <Text style={styles.path}>{weapon.path}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{weapon.type}</Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {weapon.description}
      </Text>

      <View style={styles.footer}>
        {weapon.stats && (
          <View style={styles.stats}>
            <Text style={styles.statsLabel}>STRENGTHS</Text>
            <Text style={styles.statsText} numberOfLines={1}>
              {weapon.stats.strengths.slice(0, 3).join(' • ')}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: layout.borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...layout.shadow.md,
  },
  weaponImage: {
    width: '100%',
    height: 150,
    marginBottom: spacing.md,
    borderRadius: layout.borderRadius.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  titleContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  name: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs / 2,
  },
  path: {
    ...typography.bodySmall,
    color: colors.primaryLight,
    fontWeight: '500',
  },
  badge: {
    backgroundColor: colors.primary + '15',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: layout.borderRadius.md,
    borderWidth: 1,
    borderColor: colors.primary + '30',
  },
  badgeText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  footer: {
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  stats: {
    flexDirection: 'column',
    gap: spacing.xs,
  },
  statsLabel: {
    ...typography.overline,
    color: colors.textTertiary,
    letterSpacing: 1,
  },
  statsText: {
    ...typography.bodySmall,
    color: colors.primaryLight,
    fontWeight: '500',
  },
});
