import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

// genereates a random number
function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ usersPick, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, usersPick);

  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  // we use useEffect() to run logic whenever some dependencies (states, props) changes
  // whenever the value of guessed number changes, we wanna check if it's our picked number
  useEffect(() => {
    if (usersPick === guessedNumber) {
      onGameOver();
    }
  }, [usersPick, guessedNumber, onGameOver]);

  function giveHintToPC(hint) {
    if (
      (hint === "lower" && usersPick > guessedNumber) ||
      (hint === "higher" && usersPick < guessedNumber)
    ) {
      Alert.alert("Don't lie Bro", "You know you gave the wrong hint...", [
        { text: "Sorry", style: "default" },
      ]);

      return;
    }

    if (hint === "lower") {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber + 1;
    }
    const newRndNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      guessedNumber
    );
    setGuessedNumber(newRndNum);
  }

  return (
    <View style={styles.gameScreen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={giveHintToPC.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={giveHintToPC.bind(this, "higher")}>
          +
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreen: {
    margin: 15,
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default GameScreen;
