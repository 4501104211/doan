import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FilterScreen from '../screens/FilterScreen';
import { HeaderFilter } from '../shared/header';

const Stack = createStackNavigator();

export default function FilterStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
                options={{
                    headerTitle: () => <HeaderFilter drawerNavigation={navigation}></HeaderFilter>
                }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}
