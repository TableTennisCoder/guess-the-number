import { View, Text, StyleSheet } from "react-native";
import Colors from "../assets/utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderColor: Colors.accent500,
    borderWidth: 4,
    borderRadius: '50%',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
