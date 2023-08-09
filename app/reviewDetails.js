import { Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ReviewDetails() {
  const param = useSearchParams();
  const params = useLocalSearchParams();
  console.log(param, params);

  return (
    <>
      <Stack.Screen
        options={{ headerTitle: "Review Details", title: "Review Details" }}
      />
      <View style={styles.container}>
        <Text>{params.title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
