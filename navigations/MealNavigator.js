import React from "react";
import { Button, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, Sizing } from "../style";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealsScreen from "../screens/MealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

const menuIcon = (
  <MaterialCommunityIcons name="menu" size={Sizing.icon.x20} color="black" />
);

const MealNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: Colors.primary.brand,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Categories", headerLeft: () => menuIcon }}
      />
      <Stack.Screen
        name="Meals"
        component={MealsScreen}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: route.params.mealName,
          headerRight: () => <Button title="favorite" />,
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigator;
