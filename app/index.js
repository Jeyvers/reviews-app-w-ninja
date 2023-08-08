import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Stack, useRouter, Link } from "expo-router";

export default function Home() {
  const router = useRouter();
  const pressHandler = () => {
    router.push("/reviewDetails");
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: "" }} />
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home</Text>
        <Button onPress={pressHandler} title="go to review dets" />
        <Link href="/about" asChild>
          <Button title="About" />
        </Link>
      </View>
    </>
  );
}
