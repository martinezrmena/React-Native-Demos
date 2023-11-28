import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={ styles.container }>
      <Text>Dimensiones Screen</Text>
      <View style={{
          ...styles.cajaMorada,
          width: width * 0.8,
        }}/>
      <View style={ styles.cajaNaranja }/>
      <Text>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height: 600,
      backgroundColor: 'red',
    },
    cajaMorada:{
      backgroundColor: '#5856D6',
      width: '50%',
      height: '50%'
    },
    cajaNaranja:{
      backgroundColor: '#F0A23B',
      width: 50,
      height: 50
    }
});
