import React, {Component, Fragment} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class ActionButtons extends Component{
    render(){
        const {reset , plus} = this.props;
        return(
            <Fragment>
            <TouchableOpacity style={styles.btnreset} onPress={reset}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.btnreset} onPress={plus}>
            <Text style={styles.btnText}>+ 10</Text>
          </TouchableOpacity></Fragment>
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
      width: 100,
      marginHorizontal: 5,
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

  export default ActionButtons;