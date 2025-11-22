import React, { useState, useEffect, useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View, StyleSheet, AppState } from 'react-native';

import type {
  RootStackParamList,
  OnboardingStackParamList,
} from '../../types/navigation';
import { colors } from '../../theme';

import LanguageSelection from '../../screens/onboarding/LanguageSelection';
import IntroCarousel from '../../screens/onboarding/IntroCarousel';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const ONBOARDING_COMPLETE_KEY = '@wwm_helper:onboarding_complete';

function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen
        name="LanguageSelection"
        component={LanguageSelection}
      />
      <OnboardingStack.Screen name="IntroCarousel" component={IntroCarousel} />
    </OnboardingStack.Navigator>
  );
}

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const checkOnboardingStatus = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_COMPLETE_KEY);
      setIsOnboardingComplete(value === 'true');
    } catch (error) {
      console.error('Failed to check onboarding status:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkOnboardingStatus();

    // Listen for app state changes to re-check onboarding status
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkOnboardingStatus();
      }
    });

    // Poll for onboarding completion every 500ms when onboarding is not complete
    let interval: NodeJS.Timeout | null = null;
    if (!isOnboardingComplete) {
      interval = setInterval(checkOnboardingStatus, 500);
    }

    return () => {
      subscription.remove();
      if (interval) clearInterval(interval);
    };
  }, [checkOnboardingStatus, isOnboardingComplete]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!isOnboardingComplete ? (
        <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
      ) : (
        <RootStack.Screen name="Main" component={BottomTabNavigator} />
      )}
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
