import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FilterSwitch from "../components/FilterSwitch";
import { Sizing, Spacing } from "../style";

export default function FiltersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Switch or unswitch filters</Text>
      <View style={styles.filterContaier}>
        <FilterSwitch label="Without Gluten" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.padding.x10,
    paddingHorizontal: Spacing.padding.x20,
    alignItems: "center",
  },
  label: {
    fontSize: 20,
  },
  filterContaier: {
    alignItems: "stretch",
    width: "100%",
    paddingTop: Spacing.padding.x30,
  },
});
