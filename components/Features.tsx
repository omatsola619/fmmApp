import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function Features() {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => navigation.navigate('Home2')}>
                <View style={styles.iconBox}>
                    <MaterialIcons name="event-note" size={40} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Mes rendez-vous</Text>
            </TouchableOpacity>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Entypo name="flash" size={40} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Mes tâches</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="tools" size={40} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Mes dérangements</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Ionicons name="chatbox-ellipses-outline" size={40} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Messagerie</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Ionicons name="documents-outline" size={40} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Messagerie</Text>
            </View>
        </View>
    )
}

export default Features;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    card: {
        width: '33.33%',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        // borderColor: '#e0edfb',
        backgroundColor: '#fff',
    },
    cardTxt: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        color: 'rgba(51,51,51,0.95)',
    },
});


