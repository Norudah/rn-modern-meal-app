import { StyleSheet } from "react-native";

import * as Spacings from "./spacings";
import * as Outlines from "./outlines";

const componentStyles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    height: 120,
    alignItems: "flex-end",
    margin: Spacings.margin.base,
    padding: Spacings.padding.base,
    borderRadius: Outlines.borderRadius.base,
  },
});

export default componentStyles;
