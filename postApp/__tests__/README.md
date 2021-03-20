# Testing 🚀️

**Correr los tests** => `npm run test` (En raiz del proyecto)


# TDD (Test Driven Dev) 👀️

* La idea es que la menor cantidad de bugs posibles lleguen a produccion. Los test ayudan a analizar posibles errores tenidos en cuenta.
* TDD es una metodologia, un flujo de trabajo, esto va a ser aplicado, en este proyecto, para el Front-End. Primero se hace el test (que van a fallar ya que lo que estamos testeando, no existe), lo hacemos pasar y luego refactorizamos.
* Vamos a necesitar 2 herramientas**Jest** (Ya viene por defecto con react native) y**Enzyme** (Test interaccion). Tambien**React Dom**
* **Test rendering** (Render componentes y estilo) y**Tipo interaccion** (Cuando apreto un boton, ¿qué envio?)
* Instalamos Enzyme =>`npm i --save-dev enzyme` (Documentacion con React:[https://enzymejs.github.io/enzyme/docs/installation/react-16.html](https://))
* Instalamos React y React DOM =>`npm i --save react@16 react-dom@16`
* Instalamos Adapters =>`npm i --save-dev enzyme enzyme-adapter-react-16`
* Instamos jest-enzyme (Puente ambas librerias) =>`npm i --save-dev jest-enzyme`
* Crear setup-tests.js y copiar el codigo de la siguiente documentacion =>[https://enzymejs.github.io/enzyme/docs/guides/react-native.html](https://)
* Agregamos la siguiente linea al array de`package.json` de jest =>`"setupFilesAfterEnv": ["<rootdir>/setupTests.js"]`

