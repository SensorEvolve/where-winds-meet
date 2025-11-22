import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_COMPLETE_KEY = '@wwm_helper:onboarding_complete';

export const resetOnboarding = async () => {
  try {
    await AsyncStorage.removeItem(ONBOARDING_COMPLETE_KEY);
    console.log('Onboarding reset successfully');
  } catch (error) {
    console.error('Failed to reset onboarding:', error);
  }
};
