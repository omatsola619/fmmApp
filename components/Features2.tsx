import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

function Features2() {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => navigation.navigate('Home2')}>
                <View style={styles.iconBox}>
                    <MaterialIcons name="event-note" size={40} color="#00008a" />
                    <SimpleLineIcons name="options-vertical" size={16} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Mes rendez-vous</Text>
            </TouchableOpacity>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Entypo name="flash" size={30} color="#00008a" />
                    <SimpleLineIcons name="options-vertical" size={16} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Mes tâches</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="tools" size={40} color="#00008a" />
                    <SimpleLineIcons name="options-vertical" size={16} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Mes dérangements</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Ionicons name="chatbox-ellipses-outline" size={40} color="#00008a" />
                    <SimpleLineIcons name="options-vertical" size={16} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Messagerie</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.iconBox}>
                    <Ionicons name="documents-outline" size={40} color="#00008a" />
                    <SimpleLineIcons name="options-vertical" size={16} color="#808080" />
                </View>
                <Text style={styles.cardTxt}>Données</Text>
            </View>
        </View>
    )
}

export default Features2;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 5
    },
    card: {
        width: '49%',
        marginBottom: 16,
        backgroundColor: '#eff3fe',
        padding: 15,
        borderRadius: 10
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60
    },
    cardTxt: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '700',
        color: '#00008a',
    },
});


