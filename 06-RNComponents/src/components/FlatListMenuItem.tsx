import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { MenuItem } from '../interfaces/appInterfaces';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem }: Props) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { theme: { colors } } = useContext( ThemeContext );

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate( menuItem.component as any )}
        >
            
            <View style={ styles.container }>
                <Icon 
                    name={ menuItem.icon }
                    color={ colors.primary }
                    size={ 23 }
                />

                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                  }}
                  >
                    { menuItem.name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon 
                    name="chevron-forward-outline"
                    color={ colors.primary }
                    size={ 23 }
                />

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
        color: 'black'
    }
});

export default FlatListMenuItem;
