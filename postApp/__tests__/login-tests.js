//Uso de componentes
import React from 'react';

//Libreria Enzyme, representa al componente
import { shallow } from 'enzyme';

//Importar componente a testear
import Login, { styles } from '../app/views/login';

const props = {
	cont: 'box',
	click: jest.fn(),
};

describe('Rendering', () => {
	//Encapsula al componente a testear
	let wrapper;

	//Este hook permite setear configuraciones antes de aplicar los casos de prueba
	beforeEach(() => {
		//Le pasamos a wrapper la representacion del componente
		wrapper = shallow(<Login></Login>);
	});

	//Pruebas a realizar
	//Contar la cantidad de textInput dentro del componente, deberian ser 2
	it('Testing TextInput', () => {
		//.find, busca componentes dentro del componente padre, esto devuelve un arreglo de componentes
		expect(wrapper.find('TextInput')).toHaveLength(2);
	});
	it('Testing TouchableOpacity', () => {
		expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
	});
	it('Label Text', () => {
		//Buscar tag de text que posea el texto "Email", si existe, devuelve un true.
		expect(wrapper.find('Text').contains('Email')).toBe(true);
		expect(wrapper.find('Text').contains('Password')).toBe(true);
	});
	it('Style', () => {
		//La propiedad Styles debe tener el estilo que yo estoy pasando, en este caso, que View tenga una propiedad de estilo llamada container
		expect(wrapper.find('View').prop('style')).toEqual(styles.container);
	});
	let _wrapper;
	beforeEach(() => {
		_wrapper = shallow(<Login cont="box" />);
	});
	it('Type Style', () => {
		expect(_wrapper.find('View').prop('style')).toEqual(styles.box);
	});
});

describe('Interaction', () => {
	let wrapper;
	beforeEach(() => {
		//Mock de una funcion
		wrapper = shallow(<Login {...props} />);
	});
	it('Click Button', () => {
		wrapper.find('TouchableOpacity').prop('onPress')();
		//La funcion debe ser llamada al menos 1 vez
		expect(props.click).toHaveBeenCalledTimes(1);
	});
});
