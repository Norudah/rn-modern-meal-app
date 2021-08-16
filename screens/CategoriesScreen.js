import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import CategoryCard from "../components/CategoryCard";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen({ navigation }) {
  const renderCategory = (categoryData) => {
    return (
      <CategoryCard
        title={categoryData.item.title}
        color={categoryData.item.color}
        onPress={() =>
          navigation.navigate("Meals", {
            categoryId: categoryData.item.id,
            categoryName: categoryData.item.title,
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={CATEGORIES}
        renderItem={renderCategory}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContaine: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
