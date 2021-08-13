import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Outlines, Sizing, Colors, Spacing } from "../style";

export default function DescriptiveLine(props) {
  const bullet = <View style={styles.bullet}></View>;

  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.withBullets && bullet}
      <Text style={styles.line}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.padding.x7,
  },
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: Colors.black.normal,
    borderRadius: Outlines.borderRadius.base,
  },
  line: {
    marginLeft: Spacing.margin.x5,
  },
});
