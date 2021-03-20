//CONJUNTO DE FUNCIONES

const axios = require('axios');

var UserService ={
    //GET
    getUsers : function(){
        //Devuelve una promise
        return axios.get('https://randomuser.me/api/?results=120');
    }
}

export {UserService as default}