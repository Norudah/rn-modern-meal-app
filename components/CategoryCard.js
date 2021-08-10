import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../style";

export default function CategoryCard(props) {
  return (
    <TouchableOpacity
      style={{ ...styles.component, backgroundColor: props.color }}
      onPress={props.onPress}
    >
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    height: 120,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10,
    padding: 10,
  },
  label: {
    color: "white",
  },
});
