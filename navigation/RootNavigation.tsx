import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Home2 from "../screens/Home2";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={BottomTabs} />
                <Stack.Screen name="Home2" component={Home2} />
            </Stack.Navigator>
    );
}
