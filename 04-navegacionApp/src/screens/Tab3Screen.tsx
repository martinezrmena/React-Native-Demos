import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab3Screen = () => {
  
  useEffect(() => {
    
    console.log('Tab1Screen')
    
  }, [])
  
  return (
    <View>
      <Text>Tab 3</Text>
    </View>
  )
}
