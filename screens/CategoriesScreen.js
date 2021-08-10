import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { Colors } from "../style";

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button title={"go to Meals"} onPress={() => navigation.navigate("Meals")} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
