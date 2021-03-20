const functions = require('firebase-functions');
//Importamos createUser.js
const createUser = require('./createUser');
//Herramienta instalada con firebase
const admin = require('firebase-admin'); //Acceder a la info de la BD de firebase.
const serviceAccount = require('./config/postapp-20372-firebase-adminsdk-itrw1-ac819b05f8.json'); //clave privada, OCULTA POR GIT.

//Settings => Cuentas de servicios => NodeJS, tambien genero la clave privada, y la guardo en config (ARCHIVO IGNORADO POR GIT)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://postapp-20372.firebaseio.com"
});


//EJEMPLO FUNCTION
//Function => createUser de createUser.js
  exports.createUser = functions.https.onRequest(createUser);

