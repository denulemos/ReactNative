// Dependencies
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import auth from '@react-native-firebase/auth';

import userImg from '../../assets/iconos/usuario.png';

//IMPORTAMOS HOC
import printHOC from '../../hoc/print';

//IMPORTAMOS LOADING
import Loading from '../../components/loading';
import Button from '../../components/button';
import Input from '../../components/input';
//ESTILO
import { styles } from './styles';

class Login extends Component {
	constructor(props) {
		super(props);

		//Inicializacion de estados de campos de login
		this.state = {
			Email: null,
			Password: null,
			loading: true
		};
	}

	componentDidMount(){
		// Hay una sesion iniciada?
		auth()
		.onAuthStateChanged((usr) => {
			console.log({usr});
			if (usr){
				//Si esta logeado nos manda a otra pontalla
this.setState(
	() => ({loading : false}), 
	() => this.props.navigation.navigate("Posts")
)
			} else {
				//Si no existe es null
this.setState({loading : false});
			}
		})
	}
	// componentDidMount() {

	// 	//USAMOS LA FUNCION DE HOC
	// 	const {print} = this.props;
	// 	print('login');

	//     //CHEQUEO DE CONFIGURACIONES FIREBASE AUTH
	//     //  auth()
	//      //Crea usuario de test
	// 	//  	.createUserWithEmailAndPassword('sarah.lane@gmail.com', 'SuperSecretPassword!')
	// 	//  	.then(() => {
	// 	// 		console.log('User account created & signed in!');
	// 	//  	})
	// 	// 	.catch(error => {
	// 	// 		if (error.code === 'auth/email-already-in-use') {
	// 	// 		console.log('That email address is already in use!');
	// 	//  		}

	// 	// 	if (error.code === 'auth/invalid-email') {
	// 	// 		console.log('That email address is invalid!');
	// 	// 		}

	// 	//  		console.error(error);
	//  	// });
	// }

	render() {
		const { Email, Password , loading} = this.state; //Traemos las inicializaciones desde el state
		return (
			<Loading loading={loading}>
				<View style={styles.container}>
					<View style={styles.subcontainer}>
						<Image
							//source={uri}
							source={userImg}
							style={styles.img}
						/>
					</View>

					<View style={styles.subcontainer}>
					

						<Input
							title="Email"
							custom={{
								value:{Email},
							onChangeText:em => this.setState({ Email: em }),
							}}
						/>
					
						<Input
							title="Password"
							custom={{
								value: { Password },
								onChangeText: psw =>
									this.setState({ Password: psw }),
								secureTextEntry: true,
							}}
						/>
					

						<Button
							title="Login"
							action={() => {
								this.props.navigation.navigate('CreateUser', { ID: 1 });
								// auth()
								// 	.signInWithEmailAndPassword(Email, Password)
								// 	.then(usr =>
								// 		this.props.navigation.navigate(
								// 			'CreateUser',
								// 			{ ID: 1 },
								// 		),
								// 	) //Navegamos a CreateUser si el login es correcto
								// 	.catch(err => console.log({ err }));
							}}
						/>

						<TouchableOpacity
						onPress={() => this.props.navigation.navigate('CreateUser')}>
							<Text style={{color: '#FFF', fontWeight: 'bold', marginTop: 10}}>Crear una Cuenta</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Loading>
		);
	}
}

//USAMOS EL HOC
//export default printHOC(Login);
export default Login;
