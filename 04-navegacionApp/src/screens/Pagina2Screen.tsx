import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const Pagina2Screen = () => {
  
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  
  
  return (
    <View style={ styles.globalMargin } >
      <Text style={styles.title}>Pagina 2</Text>

      <Button 
        title='Ir a pagina 3'
        onPress={ ()=> navigator.navigate('Pagina3Screen') }
      />

    </View>
  )
}
