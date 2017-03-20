var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

//middleware la de header
//funcion anonima
//https://github.com/babel/babel/tree/master/packages/babel-preset-es2016//http://babeljs.io/docs/plugins/http://babeljs.io/docs/usage/polyfill/
//utilizando estas librerias obtenemos los datos del servidor existen mas librerias como estas y esto de los datos es de manera asincronica

page('/', header, loading, asyncLoad, function (ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');//obtenemos el main container

	empty(main).appendChild(template(ctx.pictures));//template(pictures
})

//jquery poara hacer request //

function loading(ctx, next) {
  	var container = document.createElement('div');
  	var loadingEl = document.createElement('div');
  	container.classList.add('loader-container');
  	loadingEl.classList.add('loader');
  	container.appendChild(loadingEl);
  	var main = document.getElementById('main-container');
  	empty(main).appendChild(container);
  	next();
}

function loadPictures(ctx, next) {
	request
		.get('/api/pictures')//err de si es error 404 500 2000 y res para la respuesta del contenido que envia el servidor en este caso los pictures 
		.end(function (err, res) {
			if (err) return console.log(err);

			ctx.pictures = res.body;//en este caso las pictures//context va cargando datos atravaez de los middlewares
			next();//si lo ponemos por fuera y no se va a ejecutar el callback y no va a acargar nada
		})
}

function loadPicturesAxios(ctx, next) {
  	axios
    	.get('/api/pictures')
    	.then(function (res) {
      		ctx.pictures = res.data;
      		next();
    	})
    	.catch(function (err) {
      		console.log(err);
    	})
}

function loadPicturesFetch(ctx, next) {
	fetch('/api/pictures')
		.then(function (res) {
			return res.json();
		})
		.then(function (pictures) {
			ctx.pictures = pictures;
      		next();
		})
		.catch(function (err) {
			console.log(err);
		})
}

async function asyncLoad(ctx, next) {
	try {
		ctx.pictures = await fetch('/api/pictures').then(res => res.json());
		next();
	} catch (err) {
		return console.log(err);
	}
}

//return json una promesa el await para pasar cuando se pasen las 2 promesas es una cadena  de promesas
//carga de arriba para abajo
/* npm un instalador de paketes acutualizacion de librerias con un spinner
function loadPicturesAxioss(ctx, next) {
	axios
		.get('/api/pictures')//err de si es error 404 500 2000 y res para la respuesta del contenido que envia el servidor en este caso los pictures 
		.then(function (res) {
			ctx.pictures = res.data;//en este caso las pictures//context va cargando datos atravaez de los middlewares
			var pic = ctx.pictures[0];
			return axios.get('/api/pictures/${pic.id}')//nos devuelve una promesa
		})
		.then(function (res) {
			ctx.pictures[0] = res.data;//esta la respues de la anterior promesa todo el detalle de la primer foto
			next();
		})
		.catch(function (err) {
			console.log(err);
		})
}*/

//https://github.com/visionmedia/superagent
//una cadena de funciones de middlewares por ejemplo ssi queremos redireccionar acceder ala home y no esta logeado te rediregige al signin y solo tendriamos que mandar bueno
//esto es backend le entiendo mas
/*	var pictures = [
		{
			user: {
				username: 'slifszic',
				avatar: 'us.jpg'
			},
			url: 'office.jpg',
			likes: 11,
			liked: false,
			createdAt: new Date().getTime()
		},
		{
			user: {
				username: 'slifszic',
				avatar: 'us.jpg'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}
	];*/
/*var page = require('page');
var title = require('title');

page('/', function (ctx, next){
	title('Platzigram');
	var main = document.getElementById('main-container')
	main.innerHTML = '<a href="/signup">Signup</a>'
})*/
//nuevo template
//http://materializecss.com/color.html
//browserify muy usado en esta parte
//para cambiar la fecha al new date
//http://fontawesome.io/icons/
//	margin: 30px auto;
/*footer.site-footer
          .container
            .row
              .col.s12.l3.center-align
                // Dropdown Trigger
                a.dropdown-button.btn.btn-flat(href='#', data-activates='dropdown1') Idioma
                // Dropdown Structure
                ul#dropdown1.dropdown-content
                  li
                    a(href='#!') Español
                  li
                    a(href='#!') Ingles
              .col.s12.l3.push-l6.center-align
                | © 2016 Platzigram*/