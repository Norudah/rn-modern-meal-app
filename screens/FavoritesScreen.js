import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import MealsList from "../components/MealsList";
import { Spacing } from "../style";

export default function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites);

  if (favorites.length === 0)
    return (
      <View style={styles.container}>
        <Text style={styles.label}>No favorites found.</Text>
        <Text style={styles.label}>
          You can still add some with the little star in the top right corner of a meal
          details sheet !
        </Text>
      </View>
    );

  return <MealsList data={favorites} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.padding.x30,
  },
  label: {
    textAlign: "center",
    marginBottom: Spacing.margin.x10,
  },
});
