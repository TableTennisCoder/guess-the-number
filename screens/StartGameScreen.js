import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../assets/utils/colors";

function StartGameScreen({onUserConfirmed}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function changeTextHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmHandler() {
    const choosenNumber = parseInt(enteredNumber);
    // check if the user input was valid, otherwise display an alert
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "default", onPress: resetUserInput },
      ]);
      return;
    }
    // user input was valid -> pass the number the user has choosen to the App.js file
    onUserConfirmed(choosenNumber)
  }

  function resetUserInput() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={changeTextHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetUserInput}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary500,
    marginTop: 60,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 5, // BoxShadow on Android
    shadowColor: "black",
    shadowOffset: { width: 0.5, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  input: {
    height: 50,
    width: 60,
    color: Colors.accent500,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
