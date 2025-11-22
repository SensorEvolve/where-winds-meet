import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeaponListScreen from '../../screens/weapons/WeaponListScreen';
import WeaponDetailScreen from '../../screens/weapons/WeaponDetailScreen';
import { colors } from '../../theme';
import type { WeaponStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<WeaponStackParamList>();

export default function WeaponsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: '700',
        },
      }}
    >
      <Stack.Screen
        name="WeaponList"
        options={{ headerShown: false }}
      >
        {({ navigation }) => (
          <WeaponListScreen
            onWeaponPress={(weaponId) => {
              navigation.navigate('WeaponDetail', { weaponId });
            }}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="WeaponDetail"
        options={{ title: 'Weapon Details' }}
      >
        {({ route }) => <WeaponDetailScreen weaponId={route.params.weaponId} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
