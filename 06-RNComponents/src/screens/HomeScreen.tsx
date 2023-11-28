import React from 'react'
import { FlatList, View } from 'react-native'

import { menuItems } from '../data/menuItems';
import { ItemSeparator } from '../components/ItemSeparator';
import styles from '../themes/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú" />  }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            /> 

        </View>
    )
}

export default HomeScreen;
