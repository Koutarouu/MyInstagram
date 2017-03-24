var express = require('express');
var multer = require('multer');
var ext = require('file-extension');
var cool = require('cool-ascii-faces');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');
var app = express();//es una funcion
//lo utiliza como meddleware
//define una variable ala cual le asignamos el valor de buscar dentro de node_modules el que se llame express y express tambien tiene un archivo
//main y va a regresar lo qu esporte ese main
app.set('view engine', 'pug');//que utilize pug para renderizar antes ,motor de vistas

app.use(express.static('public'));
//le da un middleware y de est manera le indicamos anuestro servido nombrado como app que se sirva de manera estatica
//asi se sirve archivos estaticos con express//index el que va a ser usado //res.send('Hola mundo!');
//todavia no le decimos que la app public no la hemos definido aqui para mandarla llamar
//si la ruta no existe o no esta definida pues me da cannot get/no-existe
/*function restric (req, res, next) {
	if (req.user) return next();//Si existe el usuario pues pasa
	res.redirect('/signup');
}
        	, restric
*/
app.get('/', function (req, res){
	res.render('index', { title: 'Platzigram'});
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Platzigram - Signup'});
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Platzigram - Signin'});
})

app.get('/api/pictures', function (req, res, next) {
	var pictures = [
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
	];
	setTimeout(function () {
		res.send(pictures);
	}, 2000)
});

app.post('/api/pictures', function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			return res.send(500, "Error uploading file");
		}
		res.send('File uploaded');
	})
})

app.get('/api/user/:username', function(req, res) {
	const user = {
		username: 'slifszic',
		avatar: 'https://66.media.tumblr.com/5bd6c7bdc00c70c6996e3557a9633487/tumblr_nijgt8opO71u7889mo1_500.gif',
		pictures: [
			{
				id: 1,
				src: "http://pa1.narvii.com/6149/9b3d3380fe9c42e4c3bcfe89a7ea559891ef77a0_hq.gif",
				likes: 10
			},
			{
				id: 2,
				src: "http://www.fandompost.com/wp-content/uploads/2016/07/Zestiria_5a.jpg",
				likes: 20
			},
			{
				id: 3,
				src: "https://lh3.googleusercontent.com/-htHCFcE7r4M/VhvIZlcyi7I/AAAAAAAAG3I/Xy-tO7nebB4/w506-h750/tumblr_njptfwksRG1tjrgk5o1_500.gif",
				likes: 30
			},
			{
				id: 4,
				src: "http://pa1.narvii.com/6322/585de67e739cfe6da5967c5cf8bf1ee76cd8f6fe_hq.gif",
				likes: 33
			},
			{
				id: 5,
				src: "http://pa1.narvii.com/5845/63366f0e1bc7e19f31e35ba1b52c8a2290ae66ed_hq.gif",
				likes: 77
			},
			{
				id: 6,
				src: "https://66.media.tumblr.com/a15e55490bb85d3de9383d48ee7cbda1/tumblr_myfmk5tLUr1scaz74o1_500.gif",
				likes: 100
			},
			{
				id: 7,
				src: "http://38.media.tumblr.com/dbfb79c6e909809bea455956f2737b03/tumblr_nvcorqyK9m1t89rpeo1_500.gif",
				likes: 88
			}
		]
	}

	res.send(user);
})

app.get('/:username', function (req, res) {
	res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.get('/:username/:id', function (req, res) {
	res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(3000, function(err) {
	if (err) return console.log("Hubo un error"), process.exit(1);//algo distinto de 0

	console.log("Platzigram escuchando en el puerto 3000");
})

//si fuera una dentro de otra ya se pondria el next dentro del cuerpo de la funcion
//setTimeout(function () {//funcion anonima
//}, 2000)//milisegundos osea 2 segundos
//https://docs.npmjs.com/misc/scripts para agregar comandos en el json estan todas las dependencias
//vamos a depender de la libreria express que es para servidores web de manera sencilla
//lanzamos el servidor //bower.io y duojs.org y npmjs de cajon ya esta muy predominante son gestores de paketes fundamentales hay que parender a publicar asi como recibimos para conertirnos
//en mejores profesionales
//ensambladores de paketes browserify.org otro es webpack.github.io por que esta creciendo mucho y se lleva muy bien con reactjs cada que hagas un required lo transforma de alguna
//manera el se da cuenta que es un archivo .cofee y nos lo transforma a javascript.
//tambien existen los automatizadores que puedes utilizar gruntjs.com y otro automatizador es Gulp.com es decir dentro de google vamos a usar browserify para esto de tal manera los
//archivos png copialos en tal lugar y asi repartir el codigo por partes 
//procesadores de estilos sass-lang.com nos hacen la vida mas facil al moemnto de no escribir tanto codigo puedes meter variables al css otro es lesscss.org y otro stylus-lang.com
//semver npm install y que lo agrega a tu json pues se ve en semver
/*-v: --version
-h, -?, --help, -H: --usage
-s, --silent: --loglevel silent
-q, --quiet: --loglevel warn
-d: --loglevel info
-dd, --verbose: --loglevel verbose
-ddd: --loglevel silly
-g: --global
-C: --prefix
-l: --long
-m: --message
-p, --porcelain: --parseable
-reg: --registry
-f: --force
-desc: --description
-S: --save
-D: --save-dev
-O: --save-optional
-B: --save-bundle
-E: --save-exact
-y: --yes
-n: --yes false
ll and la commands: ls --long
para aplicaciones grandes auth0.com

*/