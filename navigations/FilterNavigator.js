import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavoriteNavigator from "./FavoriteNavigator";
import FiltersScreen from "../screens/FiltersScreen";
import { Colors } from "../style";

const Drawer = createDrawerNavigator();

export default function FilterNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="FavoritesNavigator"
      screenOptions={{
        drawerActiveTintColor: Colors.primary.brand,
        headerTintColor: Colors.black.normal,
      }}
    >
      <Drawer.Screen
        name="FavoritesNavigator"
        component={FavoriteNavigator}
        options={{
          headerShown: false,
          title: "Meals",
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
}
