import { StyleSheet } from "react-native";

import theme from "../../../theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    marginVertical: 16,
  },
  titleContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 24,
  },
  titleText: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
  },
  titleImage: {
    marginRight: 8,
    height: 24,
    width: 25,
  },
  input: {
    borderColor: theme.colors.stroke,
    borderRadius: 4,
    borderWidth: 1,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    height: 112,
    marginBottom: 8,
    minWidth: "100%",
    padding: 12,
  },
  footer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  screenshotContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    height: 40,
    justifyContent: "center",
    marginRight: 8,
    position: "relative",
    width: 40,
  },
  screenshotImage: {
    height: 40,
    width: 40,
  },
  screenshotTrashIcon: {
    bottom: 0,
    position: "absolute",
    right: 0,
  },
  submitButtonContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.brand,
    borderRadius: 4,
    flex: 1,
    height: 40,
    justifyContent: "center",
  },
  submitButtonTitle: {
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
  },
});
