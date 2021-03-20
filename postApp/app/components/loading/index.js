import React from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignItems: 'center',
	},
});

function Loading({ loading, children }) {
	if (loading) { //Si esta cargando, mostrar la ruedita que gira
        <View style={styles.container}>
<ActivityIndicator size="large" color="#000"/> 
        </View>
    }
    
    //De lo contrario mostra el componente correspondiente
    return children;
}

export default Loading;