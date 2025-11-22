import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, typography, spacing } from '../../theme';
import type { OnboardingStackScreenProps } from '../../types/navigation';

const { width } = Dimensions.get('window');
const ONBOARDING_COMPLETE_KEY = '@wwm_helper:onboarding_complete';

type Props = OnboardingStackScreenProps<'IntroCarousel'>;

interface Slide {
  id: string;
  titleKey: string;
  descKey: string;
}

const slides: Slide[] = [
  {
    id: '1',
    titleKey: 'onboarding.intro1Title',
    descKey: 'onboarding.intro1Desc',
  },
  {
    id: '2',
    titleKey: 'onboarding.intro2Title',
    descKey: 'onboarding.intro2Desc',
  },
  {
    id: '3',
    titleKey: 'onboarding.intro3Title',
    descKey: 'onboarding.intro3Desc',
  },
];

export default function IntroCarousel({ navigation }: Props) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const completeOnboarding = async () => {
    await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
    // RootNavigator will automatically detect this change and switch to Main screen
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/wwm_logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Content */}
      <View style={styles.textContent}>
        <Text style={styles.slideDescription}>{t(item.descKey)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>{t('onboarding.skip')}</Text>
      </TouchableOpacity>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />

      {/* Footer */}
      <View style={styles.footer}>
        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>

        {/* Next/Get Started Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>
            {currentIndex === slides.length - 1
              ? t('onboarding.getStarted')
              : t('onboarding.next')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  skipButton: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    zIndex: 10,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  skipText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl * 2,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logoImage: {
    width: 160,
    height: 64,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.primary,
    marginBottom: spacing.xl,
  },
  textContent: {
    paddingHorizontal: spacing.md,
  },
  slideDescription: {
    ...typography.body,
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxl,
    gap: spacing.xl,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textTertiary,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 24,
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    ...typography.button,
    color: colors.background,
    fontWeight: '700',
  },
});
