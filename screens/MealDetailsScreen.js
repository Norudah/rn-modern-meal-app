import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { Colors, Spacing, Sizing } from "../style";

import DescriptiveLine from "../components/DescriptiveLine";
import { toggleFavorite } from "../store/actions/meals";
import { useEffect } from "react";

export default function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params;
  const meals = useSelector((state) => state.meals);

  const meal = meals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const handleToggleFavorite = () => dispatch(toggleFavorite(mealId));

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity activeOpacity={0.6} onPress={handleToggleFavorite}>
            <FontAwesome
              name="star-o"
              size={Sizing.icon.x20}
              color={Colors.primary.brand}
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  const ingredients = meal.ingredients.map((ingredient) => (
    <DescriptiveLine key={ingredient} withBullets={true}>
      {ingredient}
    </DescriptiveLine>
  ));

  const steps = meal.steps.map((step) => (
    <DescriptiveLine key={step}>{step}</DescriptiveLine>
  ));

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <View></View>
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
