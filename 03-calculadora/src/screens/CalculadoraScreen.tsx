import { Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen'

import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { useEffect } from 'react';

const CalculadoraScreen = () => {

  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDivir,
    btnMutiplicar,
    btnSumar,
    btnRestar,
    armarNumero,
    calcular
  } = useCalculadora();


  useEffect(() => {
    SplashScreen.hide();
    
  }, [])
  


  return (
    <View style={ styles.calculadoraContainer }>

      {
        (numeroAnterior !== '0') && (
          <Text style={ styles.resultadoPequeno }> { numeroAnterior } </Text>
        )
      }

      <Text 
        style={ styles.resultado }
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        { numero } 
      </Text>

      <View style={ styles.fila }>
        {/* Fila de botones */}
        <BotonCalc text="C" color="#9B9B9B" action={ limpiar }/>
        <BotonCalc text="+/-" color="#9B9B9B" action={ positivoNegativo }/>
        <BotonCalc text="del" color="#9B9B9B" action={ btnDelete }/>
        <BotonCalc text="/" color="#FF9427" action={ btnDivir }/>
      </View>

      <View style={ styles.fila }>
        {/* Fila de botones */}
        <BotonCalc text="7" action={ armarNumero }/>
        <BotonCalc text="8" action={ armarNumero }/>
        <BotonCalc text="9" action={ armarNumero }/>
        <BotonCalc text="X" color="#FF9427" action={ btnMutiplicar }/>
      </View>

      <View style={ styles.fila }>
        {/* Fila de botones */}
        <BotonCalc text="4" action={ armarNumero }/>
        <BotonCalc text="5" action={ armarNumero }/>
        <BotonCalc text="6" action={ armarNumero }/>
        <BotonCalc text="-" color="#FF9427" action={ btnRestar }/>
      </View>

      <View style={ styles.fila }>
        {/* Fila de botones */}
        <BotonCalc text="1" action={ armarNumero }/>
        <BotonCalc text="2" action={ armarNumero }/>
        <BotonCalc text="3" action={ armarNumero }/>
        <BotonCalc text="+" color="#FF9427" action={ btnSumar }/>
      </View>

      <View style={ styles.fila }>
        {/* Fila de botones */}
        <BotonCalc text="0" ancho action={ armarNumero }/>
        <BotonCalc text="." action={ armarNumero }/>
        <BotonCalc text="=" color="#FF9427" action={ calcular }/>
      </View>

    </View>
  )
}

export default CalculadoraScreen;

