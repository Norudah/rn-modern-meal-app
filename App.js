import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MealNavigator from "./navigations/meal-navigator";

export default function App() {
  return (
    <NavigationContainer>
      <MealNavigator />
    </NavigationContainer>
  );
}
