import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from '../assets/utils/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.pressed, styles.outerContainer]
          : styles.outerContainer
      }
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: Colors.primary300,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    shadowColor: "black",
    shadowOffset: { width: 0.5, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
