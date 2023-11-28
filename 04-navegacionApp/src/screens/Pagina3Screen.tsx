import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={styles.title}>Pagina 3</Text>

      <Button 
        title='Regresar'
        onPress={ ()=> navigation.pop() }
      />

      <Button 
        title='Regresar to menu'
        onPress={ ()=> navigation.popToTop() }
      />
    </View>
  )
}
