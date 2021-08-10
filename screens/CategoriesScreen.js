import React from "react";
import { View, Text, Button } from "react-native";

export default function CategoriesScreen({ navigation }) {
  return (
    <View>
      <Text>Categories screen</Text>
      <Button title={"go to Meals"} onPress={() => navigation.navigate("Meals")} />
    </View>
  );
}
