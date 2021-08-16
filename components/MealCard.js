import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { Outlines, Spacing, Colors, Sizing } from "../style";

export default function MealCard(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <ImageBackground
          style={styles.imageContainer}
          imageStyle={styles.image}
          source={{ uri: props.image }}
          resizeMode="cover"
        >
          <Text style={styles.mealName}>{props.title}</Text>
        </ImageBackground>
        <View style={styles.information}>
          <View style={styles.informationLabelContainer}>
            <Text style={styles.informationLabel}>{props.duration} min</Text>
          </View>
          <View style={styles.informationLabelContainer}>
            <Text style={styles.informationLabel}>{props.complexity.toUpperCase()}</Text>
          </View>
          <View style={styles.informationLabelContainer}>
            <Text style={styles.informationLabel}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.margin.x10,
    marginBottom: Spacing.margin.x20,
    shadowColor: Colors.black.normal,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: "100%",
    height: Sizing.x110,
    alignItems: "stretch",
    justifyContent: "flex-end",
  },
  image: {
    borderTopLeftRadius: Outlines.borderRadius.base,
    borderTopRightRadius: Outlines.borderRadius.base,
  },
  mealName: {
    backgroundColor: Colors.black.transparent.x7,
    color: Colors.white.normal,
    paddingVertical: Spacing.padding.x7,
    textAlign: "center",
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.grey.normal.x3,
    paddingVertical: Spacing.padding.x7,
    borderBottomEndRadius: Outlines.borderRadius.base,
  },
  informationLabelContainer: {
    flex: 1,
  },
  informationLabel: {
    textAlign: "center",
  },
});
