var yo = require('yo-yo');
var translate = require('../translate');

///var moment = require('moment');

module.exports = function pictureCard(pic) {
	var el;

	function render(picture) {
		return	yo`<div class="card ${picture.liked ? 'liked' : ''}">
		    <div class="card-image">
		    	<img class="activator" src="${picture.url}" ondblclick=${like.bind(null, null, true)} >
		    	<i class="fa fa-heart like-heart ${ picture.likeHeart ? 'liked' : ''}"></i>
		    </div>
		    <div class="card-content">
		    	<a href="/${picture.user.username}" class="card-title">
		    		<img src="${picture.user.avatar}" class="avatar" >
		    		<span class="username">${picture.user.username}</span>
		    	</a>
		    		<small class="right time">${translate.date.format(picture.createdAt)}</small>
		    	<p>
		    		<a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
		    		<a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
		    		<span class="left likes">${translate.message('likes', { likes : picture.likes })}</span>
		    	</p>
		    </div>
		</div>`
	}

	function like(liked, dblclick) {
		if (dblclick) {
			pic.likeHeart = pic.liked = !pic.liked;
			liked = pic.liked;
		} else {
			pic.liked = liked;
		}
		pic.likes += liked ? 1 : -1;//es como un if else undefined es false

		function doRender() {
			var newEl = render(pic);
			yo.update(el, newEl);
		}

		doRender();

		setTimeout(function () {
			pic.likeHeart = false;
			doRender();
		}, 1500)

		return false;
	}

	el = render(pic);
	return el;
}

//para fechas moment.js//https://momentjs.com/npm i --save moment//moment(picture.createdAt).fromNow()//${picture.likes} I liked
/*
//el null es por que no hay ningun this creo//bind para cambiar this osea//hace refencia ala funcion like
like.bind cambia el this dentro de el objeto desde cual se esta llamando si estuvieramos en un entorno de backend seria diferente  hace una referencia ala funcion
a diferencia de los otros likes
function dislike() {
	pic.liked = false;
	pic.likes--;
	var newEl = render(pic);
	yo.update(el, newEl);
	return false;
}*/
//obtenemos el el que es ele elemento inicial
//pic.likes++pic.likes + 1
//en lugar de cargar la imagen asi src="office.jpg" esta la sentencia de llamado
//http://materializecss.com/cards.html
//https://www.npmjs.com/package/yo-yo
//picture solo se llama asi dentro de la funcion pero cuando la exportemos sera pic