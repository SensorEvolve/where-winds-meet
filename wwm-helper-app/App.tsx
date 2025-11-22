import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initI18n } from './src/services/i18n';
import RootNavigator from './src/components/navigation/RootNavigator';
import { colors } from './src/theme';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    prepare();
  }, []);

  const prepare = async () => {
    try {
      // TEMPORARY: Reset onboarding for testing
      // Remove this in production!
      const AsyncStorage = await import('@react-native-async-storage/async-storage');
      await AsyncStorage.default.removeItem('@wwm_helper:onboarding_complete');

      // Initialize i18n
      await initI18n();
    } catch (error) {
      console.error('Failed to initialize app:', error);
    } finally {
      setIsReady(true);
    }
  };

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
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
