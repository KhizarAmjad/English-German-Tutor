import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../firebase";
import ButtonPair from "./ButtonPair";
import Footer from "./Footer";
export default function ExerciseTab() {
  const [germanHeader, setGermanHeader] = useState<any>(null);
  const [flag, setFlag] = useState<any>(false);

  const [englishHeader, setEnglishHeader] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);
  const [buttons, setButtons] = useState<any>([]);
  const [opacity, setOpacity] = useState<any>(false);

  const [correct, setCorrect] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<any>("______");
  const [checkTrueFlag, setCheckTrueFlag] = useState<any>(false);
  const [checkFalseFlag, setCheckFalseFlag] = useState<any>(false);

  const data = ["Fill in the missing word"];

  useEffect(() => {
    getValues();
  }, []);

  async function getValues() {
    const getData = db.collection("exercises").doc("AYyRar5teOMaODuEAaWe");
    const doc_data = await getData.get();
    if (!doc_data.exists) {
      console.log("No such document!");
    } else {
      const dd = doc_data.data();
      if (dd) {
        setCorrect(dd.correct);
        setOptions(dd.Options);
        setButtons(dd.Buttons);

        const str = dd["exercise"]["English"];
        let stringReturned = split_at_index(
          str,
          str.indexOf(dd.correct[0]),
          dd.correct[0]
        );
        if (stringReturned) setEnglishHeader(stringReturned);

        const str1 = dd["exercise"]["German"];
        let stringReturned1 = split_at_index(
          str1,
          str1.indexOf(dd.correct[1]),
          dd.correct[1]
        );
        if (stringReturned1) setGermanHeader(stringReturned1);
      }
    }
  }
  function split_at_index(value: string, index: any, correctVal: any) {
    if (correctVal) {
      return (
        value.substring(0, index - 1) +
        "," +
        value.substring(index + correctVal.length + 1)
      );
    }
  }
  function buttonCall(value: any) {
    console.log("value", value);
    setSelectedOption(value);
    setOpacity(true);
  }
  function footerButtonCall() {
    console.log("Check");
    if (opacity) {
      if (selectedOption == correct[1]) {
        console.log("Correct!!");
        setCheckTrueFlag(true);
      } else {
        console.log("InCorrect!!");
        setCheckFalseFlag(true);
      }
      if (checkFalseFlag) {
        setCheckFalseFlag(false);
        setOpacity(false);
        setSelectedOption("_____");
      }
      if (checkTrueFlag) {
        setCheckTrueFlag(false);
        setOpacity(false);
        setSelectedOption("_____");
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerConntainer}>
        <Text style={styles.text}>{data[0]}</Text>
        <View>
          <Text style={styles.headertext}>
            {englishHeader ? englishHeader.split(",")[0] + " " : "-"}

            <Text style={styles.labeltext}>{correct ? correct[0] : "-"}</Text>
            <Text>
              {englishHeader ? " " + englishHeader.split(",")[1] : "-"}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.headertext1}>
            {germanHeader ? germanHeader.split(",")[0] + " " : "-"}

            <Text style={styles.labeltext}>
              {selectedOption ? selectedOption : "-"}
            </Text>
            <Text>{germanHeader ? " " + germanHeader.split(",")[1] : "-"}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPair
            buttons={buttons.slice(0, 2)}
            buttonCall={buttonCall}
            opacity={opacity}
            setOpacity={setOpacity}
          />
          <ButtonPair
            buttons={buttons.slice(2, 4)}
            buttonCall={buttonCall}
            opacity={opacity}
            setOpacity={setOpacity}
          />
        </View>
      </View>
      <Footer
        checkFalseFlag={checkFalseFlag}
        checkTrueFlag={checkTrueFlag}
        correct={correct}
        footerButtonCall={footerButtonCall}
        opacity={opacity}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#306d8c",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "100%",
    marginTop: "40%",
    width: "100%",
  },
  innerConntainer: {
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#e3e6e4",
    fontSize: 11,
    fontFamily: "serif",
  },
  headertext: {
    margin: 20,
    color: "white",
    fontSize: 16,
    fontFamily: "serif",
  },
  headertext1: {
    margin: 22,
    color: "white",
    fontSize: 17,
    fontWeight: "100",
    fontFamily: "serif",
  },
  labeltext: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontFamily: "serif",
  },
  button: {
    color: "red",
    width: 20,
  },
  row: {
    flexDirection: "row",
  },
  buttonContainer: {
    marginTop: "10%",
    alignItems: "center",
  },
  buttonWords: {
    width: "40%",
    padding: 20,
    margin: 2,
    backgroundColor: "#32637d",
  },
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
