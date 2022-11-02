/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unreachable */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeScreen} from '../../screen';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{height: '10%'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return <Icon name="home" size={20} color={tintColor} />;
              break;
            case 'Riwayat':
              return <Icon name="history" size={20} color={tintColor} />;
              break;
            case 'Bantuan':
              return <Icon name="question" size={20} color={tintColor} />;
              break;
            case 'Inbox':
              return <Icon name="envelope" size={20} color={tintColor} />;
              break;
            case 'Akun':
              return <Icon name="user" size={20} color={tintColor} />;
              break;

            default:
              break;
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Riwayat"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bantuan"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Inbox"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akun"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabBottom;
