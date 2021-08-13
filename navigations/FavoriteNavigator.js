import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import { Colors, Sizing } from "../style";

import MealNavigator from "./MealNavigator";

import FavoritesScreen from "../screens/FavoritesScreen";

export default function FavoriteNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Meal"
      screenOptions={({ route }) => ({
        headerTintColor: Colors.primary.brand,
        tabBarIcon: ({ focused, colors, size }) => {
          let icon;

          const color = focused ? Colors.primary.brand : Colors.black.normal;
          const customSize = focused ? Sizing.icon.x20 : Sizing.icon.x25;
          if (route.name === "Meal") {
            icon = (
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={customSize}
                color={color}
              />
            );
          } else {
            icon = <FontAwesome name="star" size={customSize} color={color} />;
          }

          return icon;
        },
        tabBarActiveTintColor: Colors.primary.brand,
        tabBarInactiveTintColor: Colors.black.normal,
      })}
    >
      <Tab.Screen
        name="Meal"
        component={MealNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
