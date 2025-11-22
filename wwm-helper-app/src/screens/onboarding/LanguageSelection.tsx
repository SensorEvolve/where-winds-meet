import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeLanguage, supportedLanguages } from '../../services/i18n';
import { colors, typography, spacing } from '../../theme';
import type { OnboardingStackScreenProps } from '../../types/navigation';

type Props = OnboardingStackScreenProps<'LanguageSelection'>;

const ONBOARDING_COMPLETE_KEY = '@wwm_helper:onboarding_complete';

export default function LanguageSelection({ navigation }: Props) {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageSelect = async (languageCode: string) => {
    setSelectedLanguage(languageCode);
    await changeLanguage(languageCode);

    // Complete onboarding and go directly to main app
    await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
    // RootNavigator will automatically detect this change and switch to Main screen
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/wwm_logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Language Options */}
        <View style={styles.languageList}>
          {supportedLanguages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={styles.languageButton}
              onPress={() => handleLanguageSelect(lang.code)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.languageText,
                  selectedLanguage === lang.code && styles.languageTextSelected,
                ]}
              >
                {lang.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl * 3,
  },
  logoImage: {
    width: 200,
    height: 80,
  },
  languageList: {
    width: '100%',
    maxWidth: 400,
    gap: 0,
  },
  languageButton: {
    paddingVertical: spacing.md + 4,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },
  languageText: {
    ...typography.h3,
    fontSize: 22,
    color: colors.text,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  languageTextSelected: {
    color: colors.primary,
    fontWeight: '400',
  },
});
