import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Colors } from "../style";

import MealNavigator from "./MealNavigator";

import FavoritesScreen from "../screens/FavoritesScreen";

export default function FavoriteNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Meal"
      screenOptions={{
        headerTintColor: Colors.primary.brand,
      }}
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
