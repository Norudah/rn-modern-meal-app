import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "Les catégories" }}
        />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={({ route }) => ({ title: route.params.categoryName })}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={({ route }) => ({ title: route.params.mealName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
