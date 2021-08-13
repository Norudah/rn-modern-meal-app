import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function FilterSwitch(props) {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch onValueChange={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
