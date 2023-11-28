import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';

interface Props{
  title: string,
  position?: 'br' | 'bl'
  onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'br' } : Props) => {

  const iOS = () => {
    return (
      <TouchableOpacity
        activeOpacity={ 0.75 }
        style={[
          styles.fabLocation,
          ( position == 'bl' ) ? styles.left : styles.right
        ]}
        onPress={ onPress }
      >
      <View style={ styles.fab }>
        <Text style={ styles.fabText }>{ title }</Text>
      </View>
    </TouchableOpacity>
    )
  }

  const Android = () => {
    return (
      <View 
        style={[
          styles.fabLocation,
          ( position == 'bl' ) ? styles.left : styles.right
        ]}
      >
        <TouchableNativeFeedback
          onPress={ onPress }
          background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
        >
          <View style={ styles.fab }>
            <Text style={ styles.fabText }>{ title }</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS == 'ios' ? iOS() : Android();

};

const styles = StyleSheet.create({
  fabLocation:{
    position: 'absolute',
    bottom: 25,
  },
  right:{
    right: 25, 
  },
  left:{
    left: 25, 
  },
  fab:{
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
