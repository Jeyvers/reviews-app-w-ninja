import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Home from "./home";
import Navigator from "../routes/homeStack";

export default function Index() {
  return <Navigator />;
}
