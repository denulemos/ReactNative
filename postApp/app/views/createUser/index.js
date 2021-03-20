//PANTALLA ADD USER
//Hooks => Nos proporcionan funcionalidades de react en componentes de funcion, que no poseen estado. Para eso, importo useState
import React, { Component, useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
//IMPORTAMOS HOC
import printHOC from '../../hoc/print';

//Importamos el nuevo documento con las funciones
import createUser from '../../api/user';

class CreateUser extends Component{
	constructor(props) {
		super(props);
		this.state = {
			Email: null,
			Pass: null,
			Phone: null,
		};
	}



	componentDidMount(){
		const {print} = this.props;
		print('createUser');
	}

	render() {
		const { Email, Pass, Phone } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.text}
					value={Email}
					//El valor de nuestro text input se va a guardar en Email
					// onChangeText={val => setEmail(val)}/>
					onChangeText = {val => this.setState({Email: val})}/>
					
				
				<Text style={styles.title}>Password:</Text>
				<TextInput
					//Realizar Cifrado de password. Aplica formato de puntos.
					secureTextEntry
					style={styles.text}
					value={Pass}
					//onChangeText={val => setPass(val)}	/>
					onChangeText = {val => this.setState({Pass: val})}/>
					
			
				<Text style={styles.title}>Phone:</Text>
				<TextInput
					style={styles.text}
					value={Phone}
					//onChangeText={val => setPhone(val)}/>
					 onChangeText = {val => this.setState({Phone: val})}/>
					
				
				<TouchableOpacity
					style={styles.btn}
					onPress={
						//DEBUG
						() => {
							console.log({ Email, Pass, Phone });

							//Creamos un objeto user con todos los datos ingresados
							const usr = {
								email : Email, password: Pass, phoneNumber: Phone, displayName: 'TestPersona',
							}

							//Hacemos llamada POST a la API con el objeto user y resolvemos la promise para ver que devuelve el server
							//Promise
							createUser.post(usr).then(rows => {
								auth().signInWithEmailAndPassword(Email, Pass).then((user) => {
									console.log({user, usr});
									this.props.navigation.navigate('Posts') //Navegamos hacia Post
								}).catch(err => console.log({err}));
							});
						}
					}>
					<Text style={styles.title}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}
}



export default printHOC(CreateUser);
