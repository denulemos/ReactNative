/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Importamos componente de afuera
import Viewer from './src/view'
//Crear un componente
const Hola = () => <Text>Hola, soy denu! Y soy un componente </Text>;

//Componente de clase
//class App extends Component
const App: () => React$Node = () => {
  return (
   

    <View
      style={styles.container}>
      <Hola style={{fontSize: '60'}}/>
      <Viewer></Viewer>
    </View>
  );
};

const styles = StyleSheet.create({
  //Podemos poner aca los estilos y luego referenciarlos en style={styles.nuestrosEstilos}
  container:{
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
