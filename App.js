import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FavoriteNavigator from "./navigations/FavoriteNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <FavoriteNavigator />
    </NavigationContainer>
  );
}
