import React from "react";

import { useSelector } from "react-redux";

import MealsList from "../components/MealsList";

export default function MealsScreen({ route }) {
  const { categoryId } = route.params;
  const filteredMeals = useSelector((state) => state.filteredMeals);

  const mealsFilteredByCategory = filteredMeals.filter((meal) => {
    return meal.categoryIds.find((id) => id == categoryId);
  });

  return <MealsList data={mealsFilteredByCategory} />;
}
