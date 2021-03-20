import {styles} from './styles';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function Button({ title, action }) {
    return(	<TouchableOpacity style={styles.btn} onPress={action}>
		<Text style={styles.title}>{title}</Text>
	</TouchableOpacity>);

}

export default Button;
