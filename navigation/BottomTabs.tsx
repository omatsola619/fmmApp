import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import {Platform} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#00008a',
            tabBarInactiveTintColor: '#808080',
            tabBarItemStyle: {
                paddingBottom: Platform.OS === 'android' ? 8 : 0,
            },
            tabBarStyle: {
                padding: 20,
                height: Platform.OS === 'android' ? 70 : 90,
                backgroundColor: 'white',
                borderTopColor: '#808080',
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: 'sf-reg'
            }
        }}>
            <Tab.Screen name="Index" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => focused ? <Entypo name="home" size={24} color="#00008a" /> : <Entypo name="home" size={24} color="#808080" />
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => focused ? <AntDesign name="search1" size={24} color="#00008a" /> : <AntDesign name="search1" size={24} color="#808080" />
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => focused ? <AntDesign name="user" size={24} color="#00008a" /> : <AntDesign name="user" size={24} color="#808080" />
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;
