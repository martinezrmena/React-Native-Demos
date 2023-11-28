import React, { useContext, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import {  } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import styles from '../themes/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { darkTheme } from '../context/themeContext/themeReducer';

export const PullToRefreshScreen = () => {

  const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);
  const { top } =useSafeAreaInsets();

  const [ refreshing, setRefreshing] = useState(false);
  const [ data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo')
    }, 1500);
  }

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0
      }}
      refreshControl={
        <RefreshControl 
          refreshing={ refreshing }
          onRefresh={ onRefresh }
          progressViewOffset={ 10 }
          progressBackgroundColor={ dividerColor } // Android
          colors={ [ colors.text ] } // Android
          // style={{ backgroundColor: '#5856D6' }} //iOS
          // tintColor="white" //iOS
          title='Refreshing' //iOS
          titleColor={ dark ? 'white' : 'black' } //iOS
        />
      }
    >
      <View style={ styles.globalMargin }>
        <HeaderTitle title="Pull to refresh" />
        {
          data && <HeaderTitle title={ data } />
        } 
      </View>
    </ScrollView>
  )
}