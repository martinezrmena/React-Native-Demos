import React, { useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams{
//   id: number,
//   nombre: string,
// }

// interface Props extends StackScreenProps<any, any>{};
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ({ navigation, route } : Props) => {

  // const params = route.params as RouterParams;
  const params = route.params;
  const { changeUsername } = useContext( AuthContext );

  useEffect(() => {
    
    navigation.setOptions({
      title: params.nombre
    })

  }, [])

  useEffect(() => {
    changeUsername( params.nombre );
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }> 
        { JSON.stringify(params, null, 3) }
      </Text>

    </View>
  )
}
