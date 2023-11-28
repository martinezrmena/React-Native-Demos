import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  
  const { top:marginTop } = useSafeAreaInsets();

  useEffect(() => {
    
    console.log('Tab1Screen')
    
  }, [])
  
  
  return (
    <View style={{
        ...styles.globalMargin,
        marginTop
      }}>
      <Text style={styles.title}>Tab 1</Text>
      
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  )
}
