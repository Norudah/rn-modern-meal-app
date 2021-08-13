import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Spacing } from "../style";

export default function FilterSwitch(props) {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch onValueChange={props.onPress} value={props.value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing.padding.x7,
  },
});
