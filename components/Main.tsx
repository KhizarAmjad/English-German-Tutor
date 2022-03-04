import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { db } from "../firebase";
import ExerciseTab from "./ExerciseTab";
async function getValues() {
  const cityRef = db.collection("exercises").doc("AYyRar5teOMaODuEAaWe");
  const doc = await cityRef.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Data: ", doc.data());
  }
}
export default function Main() {
  //   getValues();
  return (
    <View style={styles.container}>
      <ExerciseTab />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#39a9bd",
    flex: 1,
    width: "100%",
  },
});
