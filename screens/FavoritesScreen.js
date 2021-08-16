import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={styles.container}>
      <Text>Favorites !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
