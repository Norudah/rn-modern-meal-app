import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FilterNavigator from "./navigations/FilterNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <FilterNavigator />
    </NavigationContainer>
  );
}
