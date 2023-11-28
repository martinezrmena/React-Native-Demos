import { useRef, useState } from 'react';

enum Operadores{
  sumar, restar, mutiplicar, dividir
}

export const useCalculadora = () => {
  
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = ()=> {
    setNumero('0');
    setNumeroAnterior('0');
  }

  const armarNumero = ( numeroTexto: string ) => {

    // No aceptar doble punto
    if ( numero.includes('.') && numeroTexto === '.' ) return;

    if ( numero.startsWith('0') || numero.startsWith('-0') ) {
      
      // Primer punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      }
      //Evaluar si es otro cero y hay un punto
      else if ( numeroTexto === '0' && numero.includes('.') ) {
        setNumero(numero + numeroTexto);
      }
      //Evaluar si es diferente de cero y no tiene un punto 
      else if ( numeroTexto !== '0' && !numero.includes('.') ) {
        setNumero(numeroTexto);
      }
      //Evaluar 000.0
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero ( numero );
      }else{
        setNumero( numero + numeroTexto );
      }

    }else{
      setNumero( numero + numeroTexto );
    }
  }

  const positivoNegativo = () =>{
    if ( numero.includes('-') ) {
      setNumero( numero.replace('-', '') );
    }else{
      setNumero( '-' + numero);
    }
  }

  const btnDelete =() =>{
    let negativo = '';
    let numeroTemp = numero;

    if ( numero.includes('-') ) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if(numeroTemp.length > 1){
      setNumero(negativo + numeroTemp.slice(0, -1));
    }else{
      setNumero('0');
    }

  }

  const cambiarNumPorAnterior = ()=>{
    
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1));
    }else{
      setNumeroAnterior(numero);
    }
  
    setNumero('0');
  }

  const btnDivir= () =>{
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  }

  const btnMutiplicar= () =>{
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.mutiplicar;
  }

  const btnRestar= () =>{
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  }

  const btnSumar= () =>{
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  }

  const calcular =() => {
    const number1 = Number(numero);
    const number2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero( `${ number1 + number2 }`  );
        break;
      case Operadores.mutiplicar:
          setNumero( `${ number1 * number2 }`  );
        break;
      case Operadores.restar:
          setNumero( `${ number2 - number1 }`  );
      break;
        case Operadores.dividir:
          setNumero( `${ number2 / number1 }`  );
        break;
    }

    setNumeroAnterior('0');
  }

  return {
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
  }
}