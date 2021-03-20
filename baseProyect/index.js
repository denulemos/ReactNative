/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Entry point de la aplicacion

//Registro de componentes
AppRegistry.registerComponent(appName, () => App);
