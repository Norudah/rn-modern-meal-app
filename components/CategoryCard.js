import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../style";
import componentStyles from "../style/components";

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
    ...componentStyles.categoryCard,
  },
  label: {
    color: Colors.white.normal,
  },
});
