import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
class Button extends Component {



  render() {
    //Traer de this.props el label del boton y la accion a realizar
    const {label, action} = this.props;

    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    );
  }
}


//Valores de propiedades por defecto, en el caso de no mandar nada desde el padre
Button.defaultProps = {
  label: 'Button',
  action: () => null,
};

//Una forma de usar los proptypes
Button.proptypes = {
  //Es obligatorio, no acepta un Undefined
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
};


const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7675',
  },
  btnText: {
    fontSize: 25,
    color: '#d63031',
    fontWeight: 'bold',
  },
});

export default Button;
