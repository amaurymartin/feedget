import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import theme from "../../theme";

export default StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.brand,
    borderRadius: 24,
    bottom: getBottomSpace() + 16,
    height: 48,
    justifyContent: "center",
    position: "absolute",
    right: 16,
    width: 48,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
});
