var yo = require('yo-yo');
var layout = require('../layout');
var translate = require('../translate').message;

module.exports = function (user) {
	var el = yo`<div class="container user-page">
		<div class="row">
			<div class="col s12 m10 offset-m1 l8 offset-l2 center-align heading">
				<div class="row">
					<div class="col s12 m10 offset-m1 l3 offset-l3 center">
						<img src="${user.avatar}" class="responsive-img circle">
					</div>
					<div class="col s12 m10 offset-m1 l6 left-align">
						<h2 class="hide-on-large-only center-align">${user.username}</h2>
						<h2 class="hide-on-med-and-down left-align">${user.username}</h2>
					</div>
				</div>
			</div>
			<div class="row">
				${user.pictures.map(function (picture) {
					return yo`<div class="col s12 m6 l4">
						<div class="picture-container">
							<img src="${picture.src}" class="materialboxed picture" data-caption="${translate('likes', { likes: picture.likes })}">
							<div class="likes"><i class="fa fa-heart"></i> ${picture.likes}</div>
						</div>
						<div id="modal${picture.id}" class="modal modal-fixed-footer">
							<div class="modal-content">
						    	<img src="${picture.src}">
							</div>
							<div class="modal-footer">
								<div class="btn btn-flat likes"><i class="fa fa-heart"> </i>${translate('likes', { likes: picture.likes })}</div>
							</div>
						</div>
					</div>`;
				})}
			</div>
		</div>
		<div class="carousel">
    		<a class="carousel-item" href=""><img src="http://lorempixel.com/400/340/city/1"></a>
			<a class="carousel-item" href=""><img src="http://lorempixel.com/400/340/city/2"></a>
			<a class="carousel-item" href=""><img src="http://lorempixel.com/400/340/city/3"></a>
			<a class="carousel-item" href=""><img src="http://lorempixel.com/400/340/city/4"></a>
			<a class="carousel-item" href=""><img src="http://lorempixel.com/400/340/city/5"></a>
 	 	</div>
	</div>`;

	return layout(el);
}

//http://www.fandompost.com/wp-content/uploads/2016/07/Zestiria_5a.jpg//https://66.media.tumblr.com/5bd6c7bdc00c70c6996e3557a9633487/tumblr_nijgt8opO71u7889mo1_500.gif
//http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code=
/*
<a href="/${user.username}/${picture.id}" class="picture-container">
							<img src="${picture.src}" class="picture">
							<div class="likes"><i class="fa fa-heart"></i> ${picture.likes}</div>
						</a>
https://projects.lukehaas.me/css-loaders/
token usado en los formularios usar https //letsencrypt.org para implementar el https //encriptar las contraseñas por eso en django es mas chido tye lo encripta solo
json web tokens //jwt.io para leer un poco mas sobre enviar datos encriptados del servidor al cliente siendo el servidor poder rescatar los datos
de esa manera no necesitas guardar en las cookies los datos del usuario y cada que haces un request no tener que levantar los daqtos de la base de datos
class Persona {
  constructor(nombre = '', amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  saludar(extra = '') {
    alert(`Hola Mundo mi nombre es ${this.nombre} y ${extra}`)
  }

  listarAmigos() {
    this.amigos.forEach(amigo => {
      alert(`Hola soy ${this.nombre} y soy amigo de: ${amigo.nombre}`)
    })
  }
}

const dario = new Persona('Dario')
const alain = new Persona('Alain')
const sacha = new Persona('Diego', [dario, alain])
//sacha.listarAmigos()
//fn.call
//fn.apply
dario.saludar.call(alain, 'le gane a ash')
dario.saludar.apply(alain, ['le gane a ash ketchup'])
*/