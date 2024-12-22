import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Profile Coming Soon...</Text>
        </SafeAreaView>
    )
}

export default Profile;

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
