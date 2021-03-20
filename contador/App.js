

import React, {Component , PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


import Button from './componentes/button';
import ActionButtons from './componentes/actionButtons';

//Extendemos de PureComponent
class App extends PureComponent {
  //El constructor es lo primero del ciclo de vida. Se ejecuta solo 1 vez, y nos sirve para instanciar los valores de nuestras variables, tambien sirve para crear un scope de las funciones del componente.
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log('Constructor');

    this.suma = this.suma.bind(this);
    this.resta = this.resta.bind(this);
    this.reset = this.reset.bind(this);
    this.sumarDiez = this.sumarDiez.bind(this);
  }

  sumarDiez(){
    const {counter: ct} = this.state;
    this.setState({counter: ct + 10});
  }

  //Modificar estados
  suma() {
    //Obtengo valor actual de counter con un alias
    const {counter: ct} = this.state;
    //Le sumo uno y se lo seteo al state con el nuevo valor
    this.setState({counter: ct + 1});
  }
  resta() {
    const {counter: ct} = this.state;
    //Podemos ejecutar un callback para actualizar el counter al valor que yo quiera, como cero.
    //this.setState({counter : ct - 1}), () => this.setState({counter : 0}));
    this.setState({counter: ct - 1});
  }

  reset() {
    this.setState({counter: 0});
  }

  //Se ejecuta cada vez que hay un cambio en el componente. Renderiza al componente.
  render() {
    console.log('Renderizado');
    //Tomo del objeto estado la propiedad counter
    const {counter} = this.state;
    //eL nombre de los props que mando debe ser igual a como los recibo (label y action)
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Button label="-" action={this.resta}></Button>

          <View style={styles.counterContainer}>
            <Text style={styles.contador}>{counter}</Text>
          </View>

          <Button label="+" action={this.suma}></Button>
        </View>
        <View style={styles.subcontainerReset}>
        <ActionButtons reset={this.reset} plus={this.sumarDiez}></ActionButtons>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Totalidad pantalla
    backgroundColor: '#fab1a0', //https://flatuicolors.com/palette/us
    justifyContent: 'center',
  },
  subcontainer: {
    height: 50,
    width: '100%', //Todo el ancho del dispositivo
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  btnreset: {
    height: 50,
    width: '80%',
    backgroundColor: '#ff7675',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainerReset: {
    height: 50,
    width: '100%', //Todo el ancho del dispositivo
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contador: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default App;
