//Ecmascript 2016
import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send(200, diego.friendsList());
})

class Persona {
	constructor(name, friends) {
		this.name = name;
		this.friends = friends;
	}

	friendsList() {
		var str = `Mis amigos son: ${ this.friends.join(', ') }`;//Literal string
		console.log(str);
		return str;
	}
}

var diego = new Persona('diego',['Alan', 'Dario', 'Noc']);

app.listen(3000);//se ejecute en el puerto 3000//http://babeljs.io/docs/usage/cli/