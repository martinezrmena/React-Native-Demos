import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab2Screen = () => {
  
  useEffect(() => {
    
    console.log('Tab1Screen')
    
  }, [])
  
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  )
}
