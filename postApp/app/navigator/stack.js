import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//PANTALLAS MEDIANTE STACKROUTES QUE DEVUELVE AMBAS PANTALLAS
import Routes from './stackRoutes';
import back from '../assets/iconos/arrow.png';

const getButton = ({ navigation }) => (
	<TouchableOpacity
		style={{ flexDirection: 'row' }}
		onPress={() => navigation.goBack()}
	> 
	<Image source={back} style={{width: 15, height: 15, tintColor: '#FFF', marginLeft: 5, marginRight: 5}}/>
	<Text style={{color: '#fff'}}>Volver </Text>
		 </TouchableOpacity>
);

const Stack = createStackNavigator();

//El orden de los componentes dentro de Stack.Navigator SI afecta, ya que es el orden de pila.
function AppStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={Routes.Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CreateUser"
					component={Routes.CreateUser}
					options={(nav) => ({ //Options es un prop al que le puedo mandar un objeto, o una funcion que retorne un objeto. Esa funcion recibe como parametros props de la navegacion
						headerStyle: {
							backgroundColor: 'pink',
						},
						headerTintColor: 'white',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerLeft: () => getButton(nav),
					})}
				/>
					<Stack.Screen
					name="Posts"
					component={Routes.Posts}
					options={(nav) => ({ //Options es un prop al que le puedo mandar un objeto, o una funcion que retorne un objeto. Esa funcion recibe como parametros props de la navegacion
						headerStyle: {
							backgroundColor: 'pink',
						},
						headerTintColor: 'white',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerLeft: () => getButton(nav),
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppStack;

/*
OPTIONS =>
Es un parametro que recibe Stack.Screen para manejar el header que Navigation nos pone automaticamente por pantalla. 
options={{title: 'Titulo que queremos que tenga el header'}}
options= {{headerShown: false}} => No queremos que esta pagina tenga header
*/
