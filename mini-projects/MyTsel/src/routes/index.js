import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen, LoginScreen, ConfirmLoginScreen} from '../screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottom} from '../components';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ConfirmLoginScreen"
          component={ConfirmLoginScreen}
        />
        <Stack.Screen name="TabBottom" component={TabBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
