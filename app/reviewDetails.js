import {
  Stack,
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

export default function ReviewDetails() {
  const router = useRouter();
  const param = useSearchParams();
  const params = useLocalSearchParams();
  const { title, body, rating } = params;
  console.log(param, params);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Review Details",
          title: "Review Details",
          headerBackButtonMenuEnabled: true,
          navigationBarHidden: true,
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="black"
              onPress={() => router.back()}
              style={{ marginHorizontal: 24 }}
            />
          ),
        }}
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
