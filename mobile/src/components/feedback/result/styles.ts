import { StyleSheet } from "react-native";
import theme from "../../../theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height: 36,
    marginTop: 42,
    marginBottom: 10,
    width: 36,
  },
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    height: 40,
    justifyContent: "center",
    marginBottom: 56,
    paddingHorizontal: 24,
  },
  buttonTitle: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
  },
});
