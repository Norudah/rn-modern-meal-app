import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";

export default function MealsScreen({ navigation, route }) {
  const { categoryId } = route.params;

  const mealsFilteredByCategory = MEALS.filter((meal) => {
    return meal.categoryIds.find((id) => id == categoryId);
  });

  const renderMeal = (mealData) => {
    return (
      <MealCard
        title={mealData.item.title}
        duration={mealData.item.duration}
        affordability={mealData.item.affordability}
        complexity={mealData.item.complexity}
        image={mealData.item.imageUrl}
        onPress={() =>
          navigation.navigate("MealDetails", {
            mealId: mealData.item.id,
            mealName: mealData.item.title,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={mealsFilteredByCategory} renderItem={renderMeal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
