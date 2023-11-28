import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {

  const { logout, authState: { isLoggedIn } } = useContext( AuthContext );

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Album</Text>

      <Text style={ styles.title }>AlbumsScreen</Text>
        {
          isLoggedIn && <Button title="LogOut" onPress={ logout } />
        }

    </View>
  )
}
