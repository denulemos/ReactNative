import axios from 'axios';
import { Service } from 'axios-middleware';

// const _path = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json';
// const _pathInst = 'https://pokemon-go1.p.rapidapi.com/'; //URL Base, la API puede traer varias otras cosas mas alla de pokemones
// const _headers = {
// 	'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
// 	'x-dapidapi-key': '', //Tu Key
// 	useQueryString: true,
// };

const base = 'https://us-central1-postapp-20372.cloudfunctions.net/'; //GOOGLE CLOUD FUNCTION PATH

class Register {
	constructor() {
		//Singleton
		//Si ya esta instanciado, devolver la instancia ya hecha
		if (typeof Register.instance === 'object') return Register.instance;
		//Si no esta instanciado
		Register.instance = this;
	}

	onResponse(response) {
		// solo devolvemos la data del response, no el resto
		const res = JSON.parse(response.data);
		
		return res;
	}
}
class Request {
	constructor(url, baseURL) {
		this.url = url;
		this.baseURL = baseURL || base; //Si no le llega nada, toma _pathInst
this.request = axios.create({ baseURL: this.baseURL});
		//Implementamos middleware
		const service = new Service(this.request);
		//Instanciamos register
		service.register(new Register());
	}

	get() {
		return this.request({ url: this.url });
	}
	getOne(id) {
		return this.request({ url: this.url + '/' + id });
	}

	//---------------LA API DE PRUEBA DE RAPIDAPI SOLO SOPORTA GET----------------
	post(value) {
		console.log(this.url)
		return this.request({ url: this.url, data: value, method: 'post' });
	}

	put(value, id) {
		return this.request({
			url: this.url + '/' + id,
			data: value,
			method: 'put',
		});
	}
	delete(id) {
		return this.request({ url: this.url + '/' + id, method: 'delete' });
	}
}

export default Request;
