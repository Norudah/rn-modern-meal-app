import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Colors, Spacing, Sizing } from "../style";

export default function MealDetailsScreen({ navigation, route }) {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const ingredients = meal.ingredients.map((ingredient) => <Text>{ingredient}</Text>);
  const steps = meal.steps.map((step) => <Text>{step}</Text>);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <View style={styles.information}>
        <View style={styles.informationLabelContainer}>
          <Text style={styles.informationLabel}>{meal.duration} min</Text>
        </View>
        <View style={styles.informationLabelContainer}>
          <Text style={styles.informationLabel}>{meal.complexity.toUpperCase()}</Text>
        </View>
        <View style={styles.informationLabelContainer}>
          <Text style={styles.informationLabel}>{meal.affordability.toUpperCase()}</Text>
        </View>
      </View>
      <View>
        <Text>Ingredients</Text>
        {ingredients}
      </View>
      <View>
        <Text>Recette</Text>
        {steps}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: Sizing.x200,
  },
  information: {
    flexDirection: "row",

    width: "100%",
  },
  informationLabelContainer: {
    flex: 1,
  },
  informationLabel: {
    textAlign: "center",
  },
  ingredients: {},
  recipe: {},
});
