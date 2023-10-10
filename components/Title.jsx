import { Text, StyleSheet } from "react-native";
import Colors from "../assets/utils/colors";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
        borderWidth: 2,
        borderColor: 'white',
        textAlign: 'center',
    }
})

export default Title;