import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () =>{
  return Platform.OS == 'ios'
    ? <TabsIOS/> 
    : <TabsAndroid/> 
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled = { true }
      barStyle = {{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
          fontSize: 15,
        },
        tabBarIcon: ( { color, focused } ) =>{
          
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
            break;
            case 'TopTabNavigator':
              iconName = 'baseball-outline';
            break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
            break;
          }

          return <Icon name={ iconName } size={30} color={ colores.primary } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title : 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title : 'Tab2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title : 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
          fontSize: 15,
        },
        tabBarIcon: ( {color, focused, size} ) =>{
          
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
            break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
            break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
            break;
          }

          return <Icon name={ iconName } size={30} color={ colores.primary } />
        }
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title : 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title : 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title : 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}