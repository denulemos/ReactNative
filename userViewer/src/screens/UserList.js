import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import UserService from '../services/UserService';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Generamos un array de usuarios para luego renderizarlos
      users: null,
      isLoading: true,
    };

    //BIND
    //this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    // this.getUserData();
    UserService.getUsers()
      .then((results) => {
        // Si existen estos 3 campos de response, guardamos los results en el array del state
        if (results && results.data && results.data.results) {
          this.setState({
            users: results.data.results,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log('Paso algo :( ', err);
      });
  }

  // getUserData(){
  //   axios.get('https://randomuser.me/api/').then((response) => {
  //     if (response && response.data && response.data.results){
  //       if(response.data.results.length > 0){
  //         this.setState({
  //           user: response.data.results[0]
  //         });
  //       }
  //     }
  //   }).catch(function (error){
  //     console.log(error);
  //   });
  // }

  render() {
    //PANTALLA LOADING
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      //iteracion por usuario
      <View>
        <FlatList
          data={this.state.users}
          renderItem={({item}) => {
            // console.log(item)
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('UserDetails', {user: item},);
                }}
                style={[
                  styles.itemContainer,
                  item.gender == 'male' ? styles.male : styles.female,
                ]}>
                <Image
                  style={styles.itemImage}
                  source={{uri: item.picture.medium}}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.itemTitle}>
                    {item.name.title} {item.name.first} {item.name.last}
                  </Text>
                  <Text style={[styles.itemTitle, {fontSize: 13}]}>
                    Click para mas detalles :){' '}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}
