import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavoriteNavigator from "./FavoriteNavigator";
import FiltersScreen from "../screens/FiltersScreen";

const Drawer = createDrawerNavigator();

export default function FilterNavigator() {
  return (
    <Drawer.Navigator initialRouteName="FavoritesNavigator">
      <Drawer.Screen
        name="FavoritesNavigator"
        component={FavoriteNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
}
