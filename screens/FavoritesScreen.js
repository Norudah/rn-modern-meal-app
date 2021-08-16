import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import MealsList from "../components/MealsList";

export default function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites);

  return <MealsList data={favorites} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
