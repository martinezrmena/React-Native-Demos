import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const { height, width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      // screenOptions={{ // Menú modo horizontal
      //   headerShown: false  // Oculta la hamburguesa
      // }}
      screenOptions={ 
        (width >= 768) ? {
          drawerType:'permanent'
        }:
        {
          drawerType:'front'
        }
      }
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}}  component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}