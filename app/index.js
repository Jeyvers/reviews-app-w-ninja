import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Stack, useRouter, Link } from "expo-router";
import Header from "../shared/header";
import Card from "../shared/card";

export default function Home() {
  const router = useRouter();
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const pressHandler = () => {
    router.push("/reviewDetails");
  };

  return (
    <>
      <Stack.Screen
        options={{
          // This code shows how to replace the default header
          headerTitle: () => <Header title={"GameZone"} />,
          // headerTitle: "GameZone",
          // title renames the text in the drawer
          title: "Game Zone",
        }}
      />

      <View style={globalStyles.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({ pathname: `/reviewDetails`, params: item })
              }
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
