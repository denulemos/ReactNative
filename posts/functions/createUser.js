const admin = require("firebase-admin");
// const twilio = require("./twilio/twilio");

module.exports = function (req, res) {
  //Por default es un POST

  //Todo ok y devuelvo el body que fue recibido en el request
  // res.status(200).send(req.body);

  //Lo que quiero recibir por el body
  const { email, phoneNumber, password, displayName } = req.body;

  //Validar campos que necesito
  if (!email || !phoneNumber || !password || !displayName)
    return res.status(404).send({ err: "Faltan datos!" });

  //Documentacion https://firebase.google.com/docs/auth/admin/manage-users?hl=es#create_a_user
  //Crear usuario si todo es correcto
  //Esto devuelve una Promise


  admin.auth()
    .createUser({
      email,
      emailVerified: false,
      phoneNumber,
      password,
      displayName : 'pepito',
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    }).then(usr => res.status(200).send(usr))
    .catch((error) => res.status(501).send({err: 'algo salio mal! :( ' , error}));



    //------------CON TWILIO , ENVIO DE MENSAJE DE VERIFICACION --------------------

    //Resolucion promise
    // .then((usr) => {
    //   //CONFIGURACION MENSAJE DE CODIGO 
    //   const code = Math.floor(Math.random() * 9999); //Generamos numero random
    //   return client.messages.create({
    //     body: 'Soy un mensaje de prueba, tu codigo es ' + code,
    //     from: '+153453432',
    //     to: '+14523452335' //Se recomienda poner numero de telefono personal para probar
    //   }).then(res.status(200).send(usr));
    // })
    // //Catch
    // .catch((error) =>
    //   res.status(501).send({ err: "Algo salio mal! :(", error })
    // );


  /*BODY TEST (POST)
    Si mando el mismo body 2 veces, a la segunda dara error por usuario repetido.
    
    {
        "email":"user@example.com",
        displayName: "Usuario Test",
        "phoneNumber": "+12345678934",
        "password": "secreto"

    }
    
    */

  //Devolver datos nuevo usuario
};
