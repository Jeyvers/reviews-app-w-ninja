import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Stack, useRouter, Link } from "expo-router";
import Header from "../shared/header";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../components/ReviewForm";

export default function Home() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
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

  const addReview = (item) => {
    const review = { ...item, key: Math.random().toString() };
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
    console.log(review);
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Modal visible={showModal} animationType="slide">
          <View style={styles.modalContainer}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setShowModal(false)}
            />

            <ReviewForm addReview={addReview} setShowModal={setShowModal} />
          </View>
        </Modal>
      </TouchableWithoutFeedback>

      <View style={globalStyles.container}>
        <MaterialIcons
          name="add"
          size={24}
          style={styles.modalToggle}
          onPress={() => setShowModal(true)}
        />
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

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
