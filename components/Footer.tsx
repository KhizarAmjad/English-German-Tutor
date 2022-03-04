import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Footer(props: any) {
  const states = ["Continue", "Check Answer"];
  const outcomes = ["Great Job !", "Answer : "];

  return (
    <View
      style={
        props.checkTrueFlag
          ? styles.footerTrue
          : props.checkFalseFlag
          ? styles.footerfalse
          : styles.footer
      }
    >
      {props.checkTrueFlag && (
        <Text style={styles.correctResult}>{outcomes[0]}</Text>
      )}
      {props.checkFalseFlag && (
        <Text style={styles.incorrectResult}>
          {outcomes[1] + props.correct[1]}
        </Text>
      )}
      <TouchableOpacity
        onPress={props.footerButtonCall}
        style={
          props.checkFalseFlag || props.checkTrueFlag
            ? styles.footerButton
            : props.opacity
            ? styles.footerButtonColor
            : styles.footerButton
        }
      >
        <Text
          style={
            props.checkFalseFlag
              ? styles.footerTextFalse
              : props.checkTrueFlag
              ? styles.footerTextTrue
              : props.opacity
              ? styles.footerText
              : styles.footerText
          }
        >
          {props.checkFalseFlag || props.checkTrueFlag
            ? states[0]
            : props.opacity
            ? states[1]
            : states[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    height: "100%",
    width: "100%",
    backgroundColor: "#306d8c",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerTrue: {
    marginTop: 10,
    height: "100%",
    width: "100%",
    backgroundColor: "#10c970",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerfalse: {
    marginTop: 10,
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerButton: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    width: "70%",
    justifyContent: "center",
    marginTop: "10%",
  },
  footerButtonColor: {
    alignItems: "center",
    backgroundColor: "#6bdbbc",
    padding: 10,
    width: "70%",
    justifyContent: "center",
    marginTop: "10%",
  },
  footerText: {
    color: "black",
  },
  footerTextTrue: {
    color: "green",
  },
  footerTextFalse: {
    color: "red",
  },
  correctResult: {
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
  },
  incorrectResult: {
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
  },
});
