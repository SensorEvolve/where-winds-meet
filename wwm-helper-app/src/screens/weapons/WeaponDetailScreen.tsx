import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useWeaponById } from '../../hooks/useWeaponDatabase';
import { colors, typography, spacing } from '../../theme';

interface WeaponDetailScreenProps {
  weaponId: string;
}

export default function WeaponDetailScreen({ weaponId }: WeaponDetailScreenProps) {
  const { t } = useTranslation();
  const weapon = useWeaponById(weaponId);

  if (!weapon) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{t('weapons.weaponNotFound')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{weapon.name}</Text>
          <View style={styles.headerBadges}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{weapon.type}</Text>
            </View>
            {weapon.tier && (
              <View style={[styles.badge, styles.tierBadge]}>
                <Text style={styles.badgeText}>Tier {weapon.tier}</Text>
              </View>
            )}
          </View>
          <Text style={styles.path}>{weapon.path}</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('weapons.description')}</Text>
          <Text style={styles.paragraph}>{weapon.description}</Text>
          <Text style={styles.playstyle}>{t('weapons.playstyle')}: {weapon.playstyle}</Text>
        </View>

        {/* How to Get */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('weapons.howToGet')}</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>{t('weapons.method')}:</Text>
              <Text style={styles.infoValue}>{weapon.howToGet.method}</Text>
            </View>
            {weapon.howToGet.location && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>{t('weapons.location')}:</Text>
                <Text style={styles.infoValue}>{weapon.howToGet.location}</Text>
              </View>
            )}
            {weapon.howToGet.level && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>{t('weapons.level')}:</Text>
                <Text style={styles.infoValue}>{weapon.howToGet.level}</Text>
              </View>
            )}
            <Text style={styles.detailsText}>{weapon.howToGet.details}</Text>
          </View>
        </View>

        {/* Stats */}
        {weapon.stats && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.stats')}</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statsColumn}>
                <Text style={styles.statsColumnTitle}>{t('weapons.strengths')}</Text>
                {weapon.stats.strengths.map((strength, index) => (
                  <View key={index} style={styles.statItem}>
                    <Text style={styles.statTextPositive}>✓ {strength}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.statsColumn}>
                <Text style={styles.statsColumnTitle}>{t('weapons.weaknesses')}</Text>
                {weapon.stats.weaknesses.map((weakness, index) => (
                  <View key={index} style={styles.statItem}>
                    <Text style={styles.statTextNegative}>✗ {weakness}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Skills */}
        {weapon.skills && weapon.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.skills')}</Text>
            {weapon.skills.map((skill, index) => (
              <View key={index} style={styles.skillCard}>
                <View style={styles.skillHeader}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <View style={styles.skillTypeBadge}>
                    <Text style={styles.skillTypeText}>{skill.type}</Text>
                  </View>
                </View>
                <Text style={styles.skillDescription}>{skill.description}</Text>
                {(skill.recovery || skill.key) && (
                  <View style={styles.skillMeta}>
                    {skill.recovery && (
                      <Text style={styles.skillMetaText}>{t('weapons.recovery')}: {skill.recovery}</Text>
                    )}
                    {skill.key && (
                      <Text style={styles.skillMetaText}>{t('weapons.skillType')}: {skill.key}</Text>
                    )}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Internal Arts */}
        {weapon.internalArts && weapon.internalArts.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.internalArts')}</Text>
            {weapon.internalArts.map((art, index) => (
              <View key={index} style={styles.artCard}>
                <Text style={styles.artName}>{art.name}</Text>
                <Text style={styles.artType}>[{art.type}]</Text>
                <Text style={styles.artDescription}>{art.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Gear Sets */}
        {weapon.gearSets && weapon.gearSets.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.gearSets')}</Text>
            {weapon.gearSets.map((set, index) => (
              <View key={index} style={styles.gearSetCard}>
                <Text style={styles.gearSetName}>{set.name}</Text>
                {set.bonuses.twoSet && (
                  <Text style={styles.gearSetBonus}>{t('weapons.setPieces', { count: 2 })}: {set.bonuses.twoSet}</Text>
                )}
                {set.bonuses.fourSet && (
                  <Text style={styles.gearSetBonus}>{t('weapons.setPieces', { count: 4 })}: {set.bonuses.fourSet}</Text>
                )}
                <Text style={styles.gearSetObtain}>
                  {t('weapons.howToGet')}: {set.howToObtain.join(', ')}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Talents */}
        {weapon.talents && weapon.talents.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.talents')}</Text>
            {weapon.talents.map((talent, index) => (
              <View key={index} style={styles.talentCard}>
                <Text style={styles.talentName}>{talent.name}</Text>
                <Text style={styles.talentUnlock}>{t('weapons.unlockMethod')}: {talent.unlockMethod}</Text>
                <Text style={styles.talentDescription}>{talent.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Effects */}
        {weapon.effects && weapon.effects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.effects')}</Text>
            {weapon.effects.map((effect, index) => (
              <View key={index} style={styles.effectItem}>
                <Text style={styles.effectName}>{effect.name}</Text>
                <Text style={styles.effectDescription}>{effect.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Notes */}
        {weapon.notes && weapon.notes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('weapons.notes')}</Text>
            {weapon.notes.map((note, index) => (
              <View key={index} style={styles.noteItem}>
                <Text style={styles.noteText}>• {note}</Text>
              </View>
            ))}
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
  header: {
    marginBottom: spacing.xl,
  },
  name: {
    ...typography.h1,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  headerBadges: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  badge: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 6,
  },
  tierBadge: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  badgeText: {
    ...typography.label,
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  path: {
    ...typography.h4,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  paragraph: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.sm,
  },
  playstyle: {
    ...typography.body,
    color: colors.primary,
    fontStyle: 'italic',
  },
  infoCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  infoLabel: {
    ...typography.label,
    color: colors.textTertiary,
    width: 120,
  },
  infoValue: {
    ...typography.body,
    color: colors.text,
    flex: 1,
    fontWeight: '600',
  },
  detailsText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statsColumn: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statsColumnTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  statItem: {
    marginBottom: spacing.xs,
  },
  statTextPositive: {
    ...typography.body,
    color: '#4ade80',
    fontSize: 14,
  },
  statTextNegative: {
    ...typography.body,
    color: '#f87171',
    fontSize: 14,
  },
  skillCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  skillName: {
    ...typography.h3,
    color: colors.text,
    flex: 1,
    marginRight: spacing.sm,
  },
  skillTypeBadge: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
  skillTypeText: {
    ...typography.label,
    color: colors.primary,
    fontSize: 10,
  },
  skillDescription: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  skillMeta: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  skillMetaText: {
    ...typography.label,
    color: colors.textTertiary,
    fontSize: 12,
  },
  artCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  artName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  artType: {
    ...typography.label,
    color: colors.primary,
    fontSize: 12,
    marginBottom: spacing.sm,
  },
  artDescription: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  gearSetCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  gearSetName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  gearSetBonus: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: spacing.xs,
  },
  gearSetObtain: {
    ...typography.body,
    color: colors.textTertiary,
    fontSize: 13,
    marginTop: spacing.sm,
    fontStyle: 'italic',
  },
  talentCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  talentName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  talentUnlock: {
    ...typography.label,
    color: colors.primary,
    fontSize: 12,
    marginBottom: spacing.sm,
  },
  talentDescription: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  effectItem: {
    marginBottom: spacing.md,
  },
  effectName: {
    ...typography.h4,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  effectDescription: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 14,
  },
  noteItem: {
    marginBottom: spacing.sm,
  },
  noteText: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    ...typography.body,
    color: colors.textTertiary,
  },
});
