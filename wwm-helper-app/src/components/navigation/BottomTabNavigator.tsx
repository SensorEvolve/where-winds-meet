import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { colors } from "../../theme";
import type { MainTabParamList } from "../../types/navigation";

import HomeScreen from "../../screens/tabs/Home";
import CharacterScreen from "../../screens/tabs/Character";
import ItemsScreen from "../../screens/tabs/Items";
import LocationsScreen from "../../screens/tabs/Locations";
import ProgressionScreen from "../../screens/tabs/Progression";
import MoreScreen from "../../screens/tabs/More";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 72,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -3,
        },
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "700",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../../../assets/wwm_logo.png")}
              style={{
                width: 345,
                height: 135,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: t("tabs.home"),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/menu_buttons/home.png")}
              style={{
                width: 29,
                height: 29,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            height: 150,
          },
        }}
      />
      <Tab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          title: t("tabs.character"),
          tabBarLabel: t("tabs.character"),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/menu_buttons/character.png")}
              style={{
                width: 29,
                height: 29,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          title: t("tabs.items"),
          tabBarLabel: t("tabs.items"),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/menu_buttons/items.png")}
              style={{
                width: 29,
                height: 29,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          title: t("tabs.locations"),
          tabBarLabel: t("tabs.locations"),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/menu_buttons/location.png")}
              style={{
                width: 29,
                height: 29,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Progression"
        component={ProgressionScreen}
        options={{
          title: t("tabs.progression"),
          tabBarLabel: t("tabs.progression"),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/menu_buttons/progression.png")}
              style={{
                width: 29,
                height: 29,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: t("more.title"),
          tabBarLabel: t("tabs.more"),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/menu_buttons/More.png")}
              style={{
                width: 29,
                height: 29,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
