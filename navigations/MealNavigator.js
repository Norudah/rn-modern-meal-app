import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import { Colors, Sizing } from "../style";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealsScreen from "../screens/MealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

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
        options={({ route, navigation }) => ({
          title: "Categories",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <MaterialCommunityIcons
                  name="menu"
                  size={Sizing.icon.x20}
                  color="black"
                />
              </TouchableOpacity>
            );
          },
        })}
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
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigator;
