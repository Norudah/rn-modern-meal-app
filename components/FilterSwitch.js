import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Colors, Spacing } from "../style";

export default function FilterSwitch(props) {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary.brand, false: "" }}
        onValueChange={props.onPress}
        value={props.value}
      />
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
