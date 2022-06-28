import { StyleSheet } from "react-native";

import theme from "../../../theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    marginBottom: 32,
  },
  typeSelection: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 48,
    width: "100%",
  },
  typeContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    height: 112,
    justifyContent: "center",
    marginHorizontal: 8,
    padding: 8,
    width: 104,
  },
  typeImage: {
    height: 40,
    width: 40,
  },
  typeTitle: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    marginTop: 8,
  },
});
