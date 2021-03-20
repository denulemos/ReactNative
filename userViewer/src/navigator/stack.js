import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//PANTALLAS MEDIANTE STACKROUTES QUE DEVUELVE AMBAS PANTALLAS
import Routes from './stackRoutes';

const Stack = createStackNavigator();

//El orden de los componentes dentro de Stack.Navigator SI afecta, ya que es el orden de pila.
function AppStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="UserList" component={Routes.UserList} options= {{headerShown: false}}/>
				<Stack.Screen name="UserDetails" component={Routes.UserDetails} options= {{headerShown: false}}/>
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