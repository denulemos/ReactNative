# React Native 🚀️

## ¿Qué es React Native?

* Es una biblioteca de JS desarollada por Facebook e Instagram para realizar aplicaciones nativas para Android e iOS, solo nos preocupamos en la logica de negocio y maquetacion. Siempre son mejores las aplicaciones nativas.
* Desarolla una app con rendimiento nativo con los beneficios del desarollo web. Tambien posee muchas librerias y paquete.
* Da a la rapida actualizacion de componentes para ver los cambios de manera casi instantanea.
* Usa JS y JSX.
* Es una innovacion generada a partir de ReactJS. Funciona con NodeJS, y NPM. Es de facil adaptacion para alguien que viene del Stack Web.
* **Redux** -> Persiste informacion en un "arbol". (Redux Developer Tools)

### Fuentes

Apuntes basados en el siguiente curso de Youtube: [https://www.youtube.com/watch?v=xQpHaKWHdFI&list=PLUlw6638d2QZFbQfC3sB5mKWJUWr2HEkc&index=14](https://www.youtube.com/watch?v=xQpHaKWHdFI&list=PLUlw6638d2QZFbQfC3sB5mKWJUWr2HEkc&index=14)

Y tambien en el siguiente curso de Udemy (Tiene las instalaciones un poco outdated, recomiendo mas el canal de youtube): [https://www.udemy.com/course/introduccion-a-react-native-con-react-navigation-y-axios/](https://)

Probablemente vaya sumando mas cursos en el futuro (Siempre gratuitos de ser posible 😄).

## ¿Qué hay en este repositorio? 😕

Hago estos repositorios a manera de "Documentacion" para mi misma (Tambien para practicar el formato .md que utiliza git para los README), y para los demas. La idea es hacer un codigo claro, comentado, y con la documentacion necesaria para entender los pasos para setear todo (React Native for Dummies, Basically).
La idea es que este repositorio vaya creciendo a medida que voy haciendo aplicaciones cada vez mas complejas con esta tecnologia. Espero que les sirva!.

* **baseProyect** => Primer proyecto base
* **contador** => Aplicacion basica, un contador de numeros mediante botones.
* **Posts** => Google Cloud Functions para PostApp (Con Twilio)
* **PostApp** => Una pequeña aplicacion funcional de prueba (Axios, Hooks). Consta de un log in. Si el login es correcto, se procedera a la pantalla de Registro, de lo contrario, se imprimira un console.log con el error por parte de firebase.
* **UserViewer =>** En esta aplicacion vamos a usar mucho Axios para consumir una API (randomuser) que traiga una lista de usuarios ficticios, de los cuales, podremos ver el detalle de cada uno si hacemos click en alguno, y para esto, utilizaremos navigation.

**¿Qué es React Native y como funciona?**

* Un mismo codigo fuente puede exportar a iOS y Android.
* Es una tecnologia desarollada por Facebook con mucha comunidad detras de la misma.
* Funciona por componentes, son "pedacitos" de la aplicacion. Podemos reutilizar componentes.
* Para iOS necesito si o si XCode para buildear.
* Se trabaja con JSX (Extension de JS creada por Facebook) y EcmaScript6.

**Uso JSX**

* Podemos crear componentes de la siguiente forma: `const Componente = <p> Hola! </p>`
* Y referirlo de la siguiente forma: `<Componente/>`
* Es el uso de componentes a traves de tags
* Siempre debe tener un solo return, devolver un solo elemento

JSX Valido

```
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

JSX Invalido ya que devuelve mas de un elemento

```
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

## Instalacion (Windows) y Creación del Proyecto 🎉️

* Instalar NVM para el manejo de versiones
* Instalar JDK. Configurar JAVA_HOME en las variables de entorno del sistema.
* Instalar Android Studio (Y configurar un emulador de dispositivo)
* Instalar node y npm => `nvm install --lts`
* Instalar react-native-cli => `npm install -g react-native-cli`
* Crear proyecto => `react-native init reactNativeGithub`
* Correr Metro (Servidor local) =>` react-native start`
* Correr aplicacion (Con telefono conectado o emulador corriendo) => `react-native run-android`
* Personalmente, para que el comando `run-android` me anduviera correctamente, tuve que abrir el proyecto en Android Studio y dejar que Gradle se configure solo junto con el SDK. **Recomiendo hacer el build en Android Studio, al menos una sola vez.**
* `npm i prop-types` => Instalar libreria prop-types, para manejar tipos de datos
* Si queres usar este mismo repositorio, recomiendo instalar el SDK 29, de lo contrario, no se podra levantar el proyecto.

## Estructura Base 👀️

* **__ tests __** : Carpeta de UnitTesting
* Carpetas android y iOS con el codigo nativo de cada uno.
* **index.js** : Entry point de la aplicacion

## Estructura del Proyecto 🚀️ (PostApp)

* **Tests:** Contenera todos los tests de la aplicacion, la crea el CLI de React native.
* **Mocks:** Para poner datos de prueba en nuestra aplicacion, como datos falsos para llamadas a la API.
* **App:** Va a contener todo lo relacionado con la aplicacion. Muchos folders.
  **Esta carpeta contenera los siguientes folders =>**
* **API:** Configuraciones de librerias, etc.. (Dentro de app)
* **Assets:** Iconos, estilos, imagenes.
* **Components**: Componentes reusables de la aplicacion.
* **Settings:** Configs. de la aplicacion. Identificadores de selects, etc..
* **Navigator:** Configuracion de react navigation.
* **Libs:** Archivos JS con funciones custom.
* **Views:** Cada modulo, o pantallas para trabajar. (Login, Home, etc..).
* **Store:** Configuracion de redux.

## Componentes 👀️

* Son "pedacitos" de la aplicacion.
* `<View></View>` posee una similutud con los div de HTML.
* Los componentes dentro del render() deben ir SI O SI encapsulados. No puede devolver mas de un componente al mismo nivel. `<View> </View> <Hola> </Hola>` = No es correcto. `<View><Hola/></View>` = Si es correcto
* Se recomienda ver **Flexbox** para poner mejores estilos a nuestros componentes.
* Al crear un componente siempre se deben hacer los siguientes imports

``   import React from 'react';``

``   import {-Según lo que necesitemos-} from 'react-native';``

* Para que el componente pueda ser importado por otros componentes, debe ser exportado

`   export default nombreComponente`

* **Props:** Se usan para pasarle informacion de un componente a otro.
* Un componente hijo (importado), idealmente, no podria modificar el estado del componente padre (el que lo importa). Si necesito hacerlo, le mando una accion al hijo desde el padre, donde se modifique el estado. (caso suma() y resta() de contador)
* Un componente pose **fases** desde que se monta hasta que se va, a esto se le dice **Ciclo de vida** y pueden ser manejados por React.
  Montaje => Actualizacion => Desmontaje.
  Constructor => **ComponentwillMount** (Util para, por ejemplo, obtener la medida de la pantalla antes de cualquier otra cosa) *DEPRECADO 👎*  UNSAFE => **Render** (no puedo hacer this.setState en el mismo, ya que setState llama al render, y se daria un loop infinito) => **ComponentDidMount** (Util para peticiones asincronas, aunque puede llevar a problemas de performance ya que debe llamar de vuelta al Render(), aca si se puede usar el setState).
* El componente padre NO termina de renderizarse hasta que no se terminen de renderizar todos sus hijos.
* Crear un componente -> `const Hola = () => Hola, soy denu! Y soy un componente ;`

  ## Ciclo de vida del Componente 👀️
* **componentWillReceiveProps** : Se ejecuta cuando hay actualizacion de alguna prop, o se modifica alguna prop.

```
componentWillReceiveProps() {
    console.log('Props');
  }
```

* **componentWillMount**: Se ejecuta antes del montaje del componente. Esto sera deprecado a futuro.

```javascript
componentWillMount() {
    console.log('Antes del montaje');
  }
```

* **componentDidMount** : Se ejecuta luego de que el componente fue renderizado.

```javascript
componentDidMount() {
    console.log('Montado');
  }
```

* **shouldComponentUpdate:** Nos permite decidir si debemos ejecutar de vuelta, o no, el render. Muestra con que valores se va a realizar la actualizacion.

```
shouldComponentUpdate(nextProps, nextState) {
    console.log({nextProps, nextState});
    return true;
  }
```

* **componentWillUpdate:** Ya esta a punto de correr el render(). Nos ayuda a setear valores globales justo antes del render.  *DEPRECADO*  👎 UNSAFE

```
componentWillUpdate() {
    console.log('Component will update');
  }
```

* **componentDidUpdate:** Luego del renderizado.*DEPRECADO 👎 * UNSAFE
* **componentWillUnmount:** El componente esta a punto de ser desmontado de la pantalla. No existe un **didUnmount** ya que el componente no existe mas, no se puede hacer mas nada con el mismo.

```
componentWillUnmount(){
    console.log("Will Unmount");
  }
```

## Hooks - UseEffect 👀️

En los componentes de funcion, existe un Hook que nos permite acceder a propiedades de los ciclos de vida del componente (cuando se monta, updatea y se esta a punto de desmontar el componente), este Hook es **useEffect**, es como decir que vamos a usar un "efecto colateral", cualquiera que modifique que algo dentro del componente (O Side Effects).

El uso del useEffect se puede ver en `postApp/app/views/posts/index.js`.

* UseEffect recibe una funcion como parametro. Pero si no recibe nada, por defecto, actua como un **componentDidMount**.

**¿Cómo lo uso?**

* Actua como un componentDidMount y un componentDidUpdate

`useEffect(() => {   console.log('Update'); });`

* Actua como un componentDidMount

` useEffect(() => {   console.log('Mount'); }, []);`

* Update de un state

  `useEffect(() => {   console.log('Update State'); }, [state]);`

## Pure Component 👀️

* Al importarla, en lugar de extender de Component, extendemos de PureComponent.
* Nos permite trabajar el "shouldcomponentupdate" (activar render o no dependiendo de valor del counter)
* Optimizamos los componentes que necesitan comprobar si realmente el render() es necesario
* Reemplaza lo siguiente:

```
shouldComponentUpdate(nextProps, nextState) {
     const {counter} = this.state;
     //Si el valor a cambiar es el mismo valor del actual, no renderizar
     if (nextState.counter === counter) return false;
     //De lo contrario, renderizar
     return true;
  }
```

## Componentes Fragmentados 👀️

* Los componentes deben devolverse dentro de un solo < View> </ View>, pero a veces se necesitan retornar 2 componentes sin un contenedor en comun. Para esto esta el Fragment
* Importamos fragment junto con React => ``import React, {Component, Fragment} from 'react';``
* Usamos fragment en lugar de View, para no luchar con los estilos =>

```
<Fragment>
            <TouchableOpacity style={styles.btnreset} onPress={reset}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.btnreset} onPress={reset}>
            <Text style={styles.btnText}>+ 10</Text>
          </TouchableOpacity></Fragment>
```

* Tambien se puede declarar de forma "anonima" de la siguiente manera => `<> </>`

## ¿Hay un usuario logeado?

```javascript
componentDidMount(){
// Hay una sesion iniciada?
auth()
.onAuthStateChanged((usr) => {
console.log({usr});
if (usr){
//Si esta logeado nos manda a otra pontalla
this.setState(
() => ({loading : false}),
() => this.props.navigation.navigate("Post")
)
} else {
//Si no existe es null
this.setState({loading : false});
}
})
}
```

# Listas con metodo Map

Esto es muy util por si queremos poner un elemento por cada objeto de un array
Por ejemplo, tenemos un array llamado `arr`
Genera un boton con el atributo 'name' de cada elemento del array.

```javascript
<ScrollView>
{
arr.map(i => {
<Button 
title = {i.name}
action = {() => console.log(i.name)}
/>
))
}
</ScrollView>
```

# PostApp - API 🚀️

### Tipos de autenticaciones 👀️

**Email / password:** Se ingresa correo y contraseña de un modo cifrado, Backend chequea si el usuario existe y manda una respuesta en consecuencia. Es la mas comun de todas.

**OAuth:** Se verifica la identidad con librerias de terceros (Facebook, Google, etc..) , todo esto mediante un token hecho por la misma libreria.

**OTP**: El usuario da un numero de telefono, complementa la autenticacion en 2 pasos (2FA: Comprueba que el usuario exista mediante un elemento que solo el usuario puede tener).

### Flujo de Login 👀️

1. Usuarios ingresan sus datos.
2. Se cifran datos capturados.
3. Se envian datos.
4. Se verifica el registro.
5. Se genera un token.
6. Se envia el token.
7. Se guarda el token.

### Flujo de 2FA 👀️

1. Teclear datos.
2. Enviar registro.
3. Comprobar que sea nuevo el registro.
4. Generar codigo para que sea enviado al celular o a donde sea.
5. Enviar codigo.
6. Teclear codigo.
7. Devolver codigo.
8. Verificar codigo.
9. Crear registro.

### Google Cloud Functions 👀️

Se usan para no montar un servidor como tal para manejar cosas como login, etc..

* **No hay procesos eternos:** No se esta ejecutando constantemente como en un servidor NodeJS. Solo se ejecutan cuando son llamadas.
* **No estan instanciados en un servidor:** No estan almacenadas como en AWS.
* **No pertenecen a un backend completo:** Son simplemente funciones.
* **Las acciones son solo funciones:** Podemos tener las funciones disponibles en cualquier lado.
* **Sin metodo de ruteo:** No hay ruteos complejos. El mismo servicio proporciona las rutas especificas.
* **Cada funcion cumple un solo proposito:** Todo tiene una sola orden, una sola funcion, no es multitarea.

### Configuracion Firebase / Google Functions🚀️

Se necesita tener plan Blaze en Firebase (Pago por uso) para que esto se pueda hacer!!! 😕

1. Crear una cuenta en **Firebase**.
2. Crear nuevo proyecto en Firebase.
3. Instalar dependencias necesarias:` npm i -g firebase-tools.`
4. Iniciar una Firebase functions.
5. Creamos una carpeta para las funciones Firebase. (/posts)
6. Hacemos `firebase login`. Nos logeamos con nuestra cuenta de Google.
7. Una vez logeados, hacemos `firebase init` para configurar el proyecto. Seteamos Functions, con el proyecto ya existente. Las funciones seran escritas con JS, en este caso, aunque tambien podemos seleccionar Typescript.
8. El paso anterior nos habra generado un firebase.json, y un directorio de functions, donde estara todo lo necesario. (/posts/functions). Dentro de functions poseemos una carpeta node_modules, podemos instalar dependencias. En index.js vamos a tener las funciones para exportar, hay un ejemplo comentado.
9. Para que las funciones esten en Firebase, deben ser **deployadas**. Para eso nos paramos en la carpeta functions y hacemos un `firebase deploy`
10. Es necesario crear una carpeta "config" dentro de "functions" donde este la clave privada generada por firebase!.

**Configuracion**

* Auth Sign-in Method: Correo y Contraseña.

# Twilio 🚀️

Es una plataforma que, entre todas las herramientas que puede dar, nos puede dar la posibilidad de crear un servicio de mensajeria de forma facil. **Para que mi google cloud function pueda acceder a Twilio, debo tener plan Blaze.**

1. Registrarse
2. Menu -> Phone Numbers -> Get Started (si no hay nada creado) -> Get your first Twilio Phone Number -> Aceptamos el numero ->
3. Podemos ver nuestras llaves en la home del dashboard. `(/console)`.
4. Api Explorer -> Rutas API para crear mensajes, borrar mensajes, servicios, etc.. `(/console/api-explorer/voice)`. Desde esta misma herramienta se pueden probar los endpoints.
5. Instalar libreria de Twilio en posts/functions => `npm i twilio`
6. Creamos un archivo twilio.js dentro de functions, y copiamos lo que dice la documentacion de twilio con nuestras keys. (Se recomienda trabajar con variables de entorno).
7. Documentacion para el envio de mensajes de twilio => https://www.twilio.com/docs/sms/quickstart/php. (Configuracion completa en `createUser.js`).

# PostApp

## Estructura del Proyecto 🚀️

* **Tests:** Contenera todos los tests de la aplicacion, la crea el CLI de React native.
* **Mocks:** Para poner datos de prueba en nuestra aplicacion, como datos falsos para llamadas a la API.
* **hoc:** Componentes de alto orden (High Order Components). Son funciones que devuelven un componente. Tenemos uno de prueba con una funcion.
* **App:** Va a contener todo lo relacionado con la aplicacion. Muchos folders.**Esta carpeta contenera los siguientes folders =>**
* **API:** Configuraciones de librerias, etc.. (Dentro de app)
* **Assets:** Iconos, estilos, imagenes.
* **Components**: Componentes reusables de la aplicacion.
* **Settings:** Configs. de la aplicacion. Identificadores de selects, etc..
* **Navigator:** Configuracion de react navigation.
* **Libs:** Archivos JS con funciones custom.
* **Views:** Cada modulo, o pantallas para trabajar. (Login, Home, etc..).
* **Store:** Configuracion de redux.

# Axios 🚀️

* Instalamos Axios => `npm i axios`.
* Apagamos el Metro Bundler en el caso de tenerlo corriendo.
* Importamos axios => `import axios from 'axios'`.
* Volver a correr Metro Bundler.
* Ejemplo axios con Pokemon Go RapidApi

  ```
  componentDidMount(){

  //CONSTANTES
  const _path = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json';
  const _pathInst = 'https://pokemon-go1.p.rapidapi.com/'; //URL Base, la API puede traer varias otras cosas mas alla de pokemones
  const _headers = {
  "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
  "x-dapidapi-key": "cd14fb2c68msh0d4d25d53c61133p1b6c38jsn5e7d7fb7a9f7",
  "useQueryString" : true,
  };

  //PETICIONES GET
  axios.get(_path ,{
  headers: _headers
  //Esto devuelve una promise
  }).then(res1 => console.log({res1}));


  //OTRA SINTAXIS DE GET
  axios({
  method: 'get', //Si dejo esto vacio, por defecto, es GET
  headers: _headers,
  url: _path
  }).then(res2 => console.log({res2}));

  //SINTAXIS MAS RECOMENDADA, con instancias de Axios
  //axios.create nos crea una instancia de axios
  const instAxios = axios.create({
  baseURL: _pathInst, //Path base
  headers: _headers
  });

  instAxios({
  method: 'get',
  url: 'pokemon_stats.json' //hago que la url base apunte acá
  }).then(res3 => console.log({res3}));
  }
  ```

# Axios Middleware 🚀️

* Instalacion =>`npm i axios-middleware` (Actualizar Metro Bundler).
* Importamos el servicio del middleware =>`import {Service} from 'axios-middleware'`

# Firebase 🚀️

* Instalamos el cliente de Firebase para React Native =>`npm install --save @react-native-firebase/app`.
* Registramos a la App desde firebase. (Al nombre del proyecto, debemos ponerle com.(nombre), en este caso, es com.postapp).
* Instalamos libreria de auth =>`npm install --save @react-native-firebase/auth`
* Importar tu google-services.json, si no el proyecto no funcionara.

# Navegacion 🚀️

* **Stack** => Colocar las pantallas en una pila, podemos ir regresando de pantalla en pantalla.
* **Drower** => Es un menu (boton, menu lateral, etc) que tiene una serie de botones que nos posiciones en otra pantalla como tal. Tambien suelen tener un log out en si.
* **Tabs** => Es el mas comun de todos, es un menu inferior (android) o superior (iOS), a traves de ese menu, navegamos entre pantallas.
* Libreria de **React Navigation** => `npm install @react-navigation/native`
* Dependencias de React Navigation (Manejar animaciones, gestos, opciones de pantalla, etc..) (**Dependency Hell? 👎**) => `npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`
* Si estas usando iOS se debe correr tambien => `npx pod-install ios`
* Como vamos a usar la navegacion **stack** => `npm install @react-navigation/stack`
* Luego de instalar todo esto, es necesario borrar cache del Metro Bundler (Detenido) =>` npm start -- --reset-cache`
* y linkear la nueva libreria => `npx react-native link`
* Configuracion navegacion => `app/navigator`

# Loading 🚀️

* Esto funciona con el componente **Activity Indicator** de React native.
* Es un espiral que da vueltas, y nos puede servir para la insterseccion entre paginas, cargas, llamadas APIs (Espera del response), etc..
* La configuracion del mismo se encuentra en `app/components/loading`.
* Recibe un componente para mostrar luego del loading. Tambien recibe un prop que indica si la carga finalizó o no.
