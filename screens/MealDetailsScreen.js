import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import DescriptiveLine from "../components/DescriptiveLine";
import { MEALS } from "../data/dummy-data";
import { Colors, Spacing, Sizing } from "../style";

export default function MealDetailsScreen({ navigation, route }) {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const ingredients = meal.ingredients.map((ingredient) => (
    <DescriptiveLine withBullets={true}>{ingredient}</DescriptiveLine>
  ));

  const steps = meal.steps.map((step) => <DescriptiveLine>{step}</DescriptiveLine>);

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
      <View style={{ ...styles.subContainers, ...styles.ingredientsContainer }}>
        <Text style={styles.subLabels}>{"Ingredients".toUpperCase()}</Text>
        {ingredients}
      </View>
      <View style={{ ...styles.subContainers, ...styles.recipeContainer }}>
        <Text style={styles.subLabels}>{"Recipe".toUpperCase()}</Text>
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
  subContainers: {
    marginTop: Spacing.margin.x30,
  },
  subLabels: {
    textAlign: "center",
    marginBottom: Spacing.margin.x20,
  },
  ingredientsContainer: {
    marginLeft: Spacing.margin.x20,
  },
  recipeContainer: {
    marginHorizontal: Spacing.margin.x20,
  },
});
