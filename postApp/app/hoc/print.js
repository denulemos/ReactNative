import React from 'react';

function printHOC(WrappedComponent) {
	return class NewComponent extends React.Component {
		//Devolvemos un componente de clase}
        print = param => console.log({ param });
        
        render(){
            //Al componente le pasamos la funcion de arriba.
            return <WrappedComponent print={this.print}/> 
        }
	};
}

export default printHOC;