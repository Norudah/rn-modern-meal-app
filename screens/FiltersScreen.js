import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useDispatch } from "react-redux";
import { updateFilters } from "../store/actions/meals";

import { Colors, Spacing } from "../style";

import FilterSwitch from "../components/FilterSwitch";

export default function FiltersScreen() {
  const [wantsWithoutLactose, setWantsWithoutLactose] = useState(false);
  const [wantsWithoutGluten, setWantsWithoutGluten] = useState(false);
  const [wantsOnlyVegetarian, setWantsOnlyVegetarian] = useState(false);
  const [wantsOnlyVegan, setWantsOnlyVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const filters = {
      withoutLactose: wantsWithoutLactose,
      withoutGluten: wantsWithoutGluten,
      onlyVegetarian: wantsOnlyVegetarian,
      onlyVegan: wantsOnlyVegan,
    };

    dispatch(updateFilters(filters));
  }, [
    wantsWithoutLactose,
    wantsWithoutGluten,
    wantsOnlyVegetarian,
    wantsOnlyVegan,
    dispatch,
    updateFilters,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.label}>Switch or unswitch filters</Text>
        <View style={styles.filterContaier}>
          <FilterSwitch
            label="Without lactose"
            onPress={() => setWantsWithoutLactose((prevState) => !prevState)}
            value={wantsWithoutLactose}
          />
          <FilterSwitch
            label="Without gluten"
            onPress={() => setWantsWithoutGluten((prevState) => !prevState)}
            value={wantsWithoutGluten}
          />
          <FilterSwitch
            label="Only vegetarian"
            onPress={() => setWantsOnlyVegetarian((prevState) => !prevState)}
            value={wantsOnlyVegetarian}
          />
          <FilterSwitch
            label="Only vegan"
            onPress={() => setWantsOnlyVegan((prevState) => !prevState)}
            value={wantsOnlyVegan}
          />
        </View>
      </View>
      <Button title="Apply now" onPress={saveFilters} color={Colors.primary.brand} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.padding.x20,
    paddingHorizontal: Spacing.padding.x20,
  },
  topPart: {
    flex: 1,
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
