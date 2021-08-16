import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors, Spacing, Outlines } from "../style";

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
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: Spacing.margin.x10,
    padding: Spacing.padding.x10,
    borderRadius: Outlines.borderRadius.base,
  },
  label: {
    color: Colors.white.normal,
  },
});
