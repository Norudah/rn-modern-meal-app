import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { Spacing } from "../style";

import MealsList from "../components/MealsList";

export default function MealsScreen({ route }) {
  const { categoryId } = route.params;
  const filteredMeals = useSelector((state) => state.filteredMeals);

  const mealsFilteredByCategory = filteredMeals.filter((meal) => {
    return meal.categoryIds.find((id) => id == categoryId);
  });

  if (mealsFilteredByCategory.length === 0)
    return (
      <View style={styles.container}>
        <Text style={styles.label}>No meals found.</Text>
        <Text style={styles.label}>Maybe you have some filters switched on ?</Text>
      </View>
    );

  return <MealsList data={mealsFilteredByCategory} />;
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
