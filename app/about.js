import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../shared/header";

export default function About() {
  return (
    <Stack.Screen
      options={{
        headerTitle: () => <Header title={"About GameZone"} />,

        // headerTitle: "About GameZone",
        // title renames the text in the drawer
        title: "About Game Zone",
      }}
    >
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    </Stack.Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
