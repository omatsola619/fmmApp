import {StyleSheet, View, Text, TextInput, Platform} from "react-native";
import Dp from "../assets/dp.svg";
import Feather from '@expo/vector-icons/Feather';
import {useState} from "react";
import Features from "../components/Features";
import {SafeAreaView} from "react-native-safe-area-context";

function Home() {
    const [search, setSearch] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.greet}>Good Morning</Text>
                        <Text style={styles.name}>Omatsola Sunday</Text>
                    </View>

                    <View style={styles.headerRight}>
                        <View style={styles.notifIcon}>
                            <Feather name="bell" size={18} color="black" />
                        </View>
                        <View>
                            <Dp width={38} height={38} />
                        </View>
                    </View>
                </View>

                {/*search box here */}
                <View style={[styles.searchBox, {
                    paddingVertical: Platform.OS === 'android' ? 5 : 10,
                }]}>
                    <View>
                        <Feather name="search" size={24} color="#808080" />
                    </View>
                    <View style={styles.searchInputBox}>
                        <TextInput
                            style={styles.searchInput}
                            placeholderTextColor="Black"
                            placeholder={'Search'}
                            onChangeText={(text: string) => console.log(text)}
                            selectionColor="black"
                        />
                    </View>

                </View>

                <View style={styles.features}>
                    <Features />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#f7fbfd",
    },
    wrapper: {
        paddingHorizontal: 16
    },
    header: {
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
        color: '#808080',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#444757',
    },
    searchBox: {
        backgroundColor: '#fff',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f3f3f3',
    },
    searchInputBox: {
        flex: 1,
        marginLeft: 10,
    },
    searchInput: {
        fontSize: 16,
        color: '#444757',
    },
    features: {
        marginTop: 30
    }
})
