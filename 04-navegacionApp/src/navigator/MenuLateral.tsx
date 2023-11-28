import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//   return(
//     <Stack.Navigator>
//       <Stack.Screen 
//         name='SettingsScreen'
//         component={ SettingsScreen }
//       />
//     </Stack.Navigator>
//   );
// }

export const MenuLateral = () => {

  const { height, width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      // screenOptions={{ // Menú modo horizontal
      //   headerShown: false  // Oculta la hamburguesa
      // }}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false  // Oculta la hamburguesa
      }} 
      drawerContent={ (props) =>  <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation } : DrawerContentComponentProps) =>{

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Opciones de Menu */}
      <View style={ styles.menuContainer }>
        
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ ()=> navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={30} color={ colores.primary } />
          <Text style={ styles.menuTexto }>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ ()=> navigation.navigate('SettingsScreen')}
        >
          <Icon name="cog-outline" size={30} color={ colores.primary } />
          <Text style={ styles.menuTexto }>Settings</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}