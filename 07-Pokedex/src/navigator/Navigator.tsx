// This was replace for Tabs.tsx on this app
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon, color: string};
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="PokemonScreen" component={ PokemonScreen } />

    </Stack.Navigator>
  );
}