import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{
        borderBottomWidth: 1,
        marginVertical: 8,
        borderBottomColor: theme.dividerColor
      }}
    />
  )
}
