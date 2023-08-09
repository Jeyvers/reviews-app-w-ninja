import { Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails() {
  const param = useSearchParams();
  const params = useLocalSearchParams();
  const { title, body, rating } = params;
  console.log(param, params);

  return (
    <>
      <Stack.Screen
        options={{ headerTitle: "Review Details", title: "Review Details" }}
      />
      <View style={globalStyles.container}>
        <Card>
          <Text>{title}</Text>
          <Text>{body}</Text>
          <View style={styles.rating}>
            <Text>GameZone rating: </Text>
            {/* concatenation doesn't work with require() */}
            <Image source={images.ratings[rating]} />
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
