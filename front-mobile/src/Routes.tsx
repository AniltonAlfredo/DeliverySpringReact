import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Orders from './Orders';

const Stack = createNativeStackNavigator();

function Routes() {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        // cardStyle: {
                        //     backgroundColor: '#fff'
                        // }
                    }}
                >
                   <Stack.Screen name="Home" component={Home} />
                   <Stack.Screen name="Orders" component={Orders} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes;