import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./assets/utils/colors";
import { useState } from "react";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  // get the number the user has picked
  function getPickedNumber(pickedNumber) {
    setPickedNumber(pickedNumber);
  }

  // change state of our gameOver variable
  function gameOverHandler() {
    setIsGameOver(true);
  }

  // at the beginning the start screen is rendered
  let screen = <StartGameScreen onUserConfirmed={getPickedNumber} />;

  // if a number has been picked by the user, the game screen is rendered
  if (pickedNumber) {
    screen = <GameScreen usersPick={pickedNumber} onGameOver={gameOverHandler}/>;
  }

  // when the game is over (mobile guessed our number), gameOver screen is rendered
  if (isGameOver) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyles}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyles: {
    opacity: 0.15,
  },
});
