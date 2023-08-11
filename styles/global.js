import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleText: {
    fontFamily: "NunitoBold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "500",
    marginTop: 6,
    marginBottom: 10,
    textAlign: "center",
  },
});

/* concatenation doesn't work with require() */
export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
