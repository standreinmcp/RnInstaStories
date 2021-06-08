import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { roots } from './roots';
import { MainScreen } from '../features/MainScreen';
import { Story } from '../components/Story';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={roots.mainScreen} component={MainScreen} />
                <MainStack.Screen name={roots.storiesScreen} component={Story} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

