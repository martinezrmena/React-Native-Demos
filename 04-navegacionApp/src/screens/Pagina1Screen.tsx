// import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

  useEffect(() => {
    
    navigation.setOptions({
      headerLeft: () => (

        <TouchableOpacity 
          onPress={ () => navigation.toggleDrawer() }
          style={{
            margin: 10,
          }}>
          <Icon name="menu-outline" size={30} color={ colores.primary } />
        </TouchableOpacity>

      )
    });

  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={styles.title}>Pagina 1</Text>

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
      }}
      >
        Navegar con argumentos
      </Text>
      
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate('PersonScreen', {
            id: 1,
            nombre: 'Pedro'
          }) }
        >
          <Icon name="body-outline" size={30} color='white' />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate('PersonScreen', {
            id: 2,
            nombre: 'Maria'
          }) }
        >
          <Icon name="woman-outline" size={30} color='white' />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
      </View>

      <Button 
        title='Ir a pagina 2'
        onPress={ ()=> navigation.navigate('Pagina2Screen') }
      />
    </View>
  )
}
