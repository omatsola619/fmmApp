import {View, StyleSheet, Text, Platform, TextInput} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Dp from "../assets/dp.svg";
import Feather from "@expo/vector-icons/Feather";
import {StatusBar} from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function Home2 () {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.intro}>
                        <View style={styles.headerLeft}>
                            <Text style={styles.greet}>Good Morning</Text>
                            <Text style={styles.name}>Omatsola Sunday</Text>
                        </View>

                        <View style={styles.headerRight}>
                            <View>
                                <Dp width={50} height={50} />
                            </View>
                        </View>
                    </View>


                    {/*search box here */}
                    <View style={[styles.searchBox, {
                        paddingVertical: Platform.OS === 'android' ? 3 : 10,
                    }]}>

                        <View style={styles.searchInputBox}>
                            <TextInput
                                style={styles.searchInput}
                                placeholderTextColor="white"
                                placeholder={'Search'}
                                onChangeText={(text: string) => console.log(text)}
                                selectionColor="white"
                            />
                        </View>

                        <View>
                            <Feather name="search" size={24} color="#fff" />
                        </View>

                    </View>
                </View>

                {/*recent task here */}
                <View style={styles.recent}>
                    <MaterialCommunityIcons name="pin" size={35} color="white" />
                    <View style={styles.recentContent}>
                        <Text style={styles.recentHeader}>Recent Task</Text>
                        <Text style={styles.recentInfo}>Request edit and writing access to docs</Text>
                    </View>
                </View>

                {/*features section here */}
                <View style={styles.features}>
                    <Text style={styles.boardIntroTxt}>Board Features</Text>
                </View>
            </View>
        </View>
    )
}

export default Home2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    wrapper: {
        // paddingHorizontal: 20,
    },
    header: {
        marginBottom: 30,
        backgroundColor: "#00008a",
        paddingTop: 70,
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    intro: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {

    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    notifIcon: {
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#808080',
    },
    greet: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    searchBox: {
        backgroundColor: 'rgba(255,255,255,0.24)',
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    searchInputBox: {
        flex: 1,
        marginLeft: 10,
    },
    searchInput: {
        fontSize: 16,
        color: '#444757',
    },
    recent: {
        marginHorizontal: 20,
        backgroundColor: '#00008a',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 16,
    },
    recentContent: {

    },
    recentHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    recentInfo: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'semibold',
    },
    boardIntroTxt: {
        color: '#404040',
        fontSize: 16,
        fontWeight: 'bold',
    },
    features: {
        marginTop: 30,
        paddingHorizontal: 20
    }
})
