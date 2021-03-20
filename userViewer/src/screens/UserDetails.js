import React, {Component} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './styles';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    console.log(this.props.route.params.user)
    this.setState({
      user: this.props.route.params.user //Tomamos los parametros del otro activity
    });
  }
  render() {
    const {user} = this.state;
    //user es unos segundos null, conviene poner un loading
    if (this.state.user == null) {
      return <ActivityIndicator />;
    }
    return (
      <View style={[styles.container , this.state.user.gender == 'male' ? styles.male : styles.female]}>
        <Image 
        style={styles.itemImageDet}
        source={{uri: this.state.user.picture.large}}
        />
        
         <Text style={styles.itemText}>{this.state.user.name.first} {this.state.user.last}</Text>
        <Text style={styles.itemText}>{this.state.user.email}</Text>
        <Text style={styles.itemText}>{this.state.user.location.city} </Text> 
      </View>
    );
  }
}
