import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

function Search() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Search Coming Soon...</Text>
        </SafeAreaView>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
    }
})
