import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/core";

import MealCard from "../components/MealCard";

export default function MealsList(props) {
  const navigation = useNavigation();

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
      <FlatList data={props.data} renderItem={renderMeal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
