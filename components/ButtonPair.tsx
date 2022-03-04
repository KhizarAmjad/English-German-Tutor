import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonPair(props: any) {
  return (
    <View style={styles.row}>
      {console.log("buttons: ", props.buttons)}
      {props.buttons
        ? props.buttons.map((item: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => props.buttonCall(item)}
                style={
                  props.opacity ? styles.buttonWordsOpacity : styles.buttonWords
                }
              >
                <Text style={styles.text}>
                  {props.buttons ? props.buttons[index] : "--"}
                </Text>
              </TouchableOpacity>
            );
          })
        : "--"}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  text: {
    color: "black",
    fontFamily: "serif",
  },
  buttonWords: {
    width: "40%",
    padding: 20,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    fontFamily: "serif",
  },
  buttonWordsOpacity: {
    width: "40%",
    padding: 20,
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 20,
  },
});
