import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { colors, typography, spacing, layout } from "../../theme";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("home.aboutTitle")}</Text>
          <Text style={styles.paragraph}>
            {t("home.aboutDesc")}
          </Text>

          {/* Header Image */}
          <Image
            source={require("../../../assets/start.png")}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>

        {/* News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("home.latestNews")}</Text>

          <View style={styles.newsCard}>
            <View style={styles.newsHeader}>
              <Text style={styles.newsTag}>{t("home.eventTag")}</Text>
              <Text style={styles.newsDate}>{t("home.twitchDrops.dateRange")}</Text>
            </View>

            <Text style={styles.newsTitle}>{t("home.twitchDrops.title")}</Text>

            {/* Twitch Drops Image */}
            <Image
              source={require("../../../assets/twitchdrop.png")}
              style={styles.newsImage}
              resizeMode="cover"
            />

            <Text style={styles.paragraph}>
              {t("home.twitchDrops.description")}
            </Text>

            {/* Rewards Table */}
            <View style={styles.rewardsSection}>
              <Text style={styles.rewardsSectionTitle}>{t("home.twitchDrops.rewardsTitle")}</Text>

              <View style={styles.rewardRow}>
                <Text style={styles.rewardTime}>15 {t("common.minutes")}</Text>
                <Text style={styles.rewardItem}>{t("home.twitchDrops.reward15min")}</Text>
              </View>

              <View style={styles.rewardRow}>
                <Text style={styles.rewardTime}>30 {t("common.minutes")}</Text>
                <Text style={styles.rewardItem}>{t("home.twitchDrops.reward30min")}</Text>
              </View>

              <View style={styles.rewardRow}>
                <Text style={styles.rewardTime}>1 {t("common.hour")}</Text>
                <Text style={styles.rewardItem}>
                  {t("home.twitchDrops.reward1h")}
                </Text>
              </View>

              <View style={styles.rewardRow}>
                <Text style={styles.rewardTime}>1h 30m</Text>
                <Text style={styles.rewardItem}>
                  {t("home.twitchDrops.reward1h30m")}
                </Text>
              </View>

              <View style={styles.rewardRow}>
                <Text style={styles.rewardTime}>2h 30m</Text>
                <Text style={styles.rewardItem}>{t("home.twitchDrops.reward2h30m")}</Text>
              </View>
            </View>

            <View style={styles.noteBox}>
              <Text style={styles.noteText}>
                {t("home.twitchDrops.noteText")}
              </Text>
            </View>
          </View>
        </View>
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
    padding: spacing.lg / 2,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.xl / 2,
    alignItems: "center",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  section: {
    marginBottom: spacing.xl / 2,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.lg / 2,
  },
  paragraph: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md / 2,
  },
  newsCard: {
    backgroundColor: colors.surface,
    borderRadius: layout.borderRadius.lg,
    padding: spacing.xl / 2,
    borderWidth: 1,
    borderColor: colors.borderLight,
    ...layout.shadow.md,
  },
  newsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg / 2,
  },
  newsTag: {
    ...typography.overline,
    color: colors.primary,
    backgroundColor: colors.primary + '15',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: layout.borderRadius.sm,
  },
  newsDate: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  newsTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md / 2,
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: layout.borderRadius.md,
    marginBottom: spacing.lg / 2,
  },
  rewardsSection: {
    marginTop: spacing.lg / 2,
    marginBottom: spacing.lg / 2,
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg / 2,
    borderRadius: layout.borderRadius.md,
  },
  rewardsSectionTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md / 2,
  },
  rewardRow: {
    flexDirection: "row",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  rewardTime: {
    ...typography.bodySmall,
    color: colors.primaryLight,
    fontWeight: "600",
    width: 90,
  },
  rewardItem: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    flex: 1,
  },
  noteBox: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg / 2,
    borderRadius: layout.borderRadius.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  noteText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});
