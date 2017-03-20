var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate').message;
var request = require('superagent');


module.exports = function (pictures) {
	var el = yo`<div class="container timeline">
		<div class="row">
			<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
				<form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
					<div id="fileName" class="fileUpload btn btn-flat cyan">
						<span><i class="fa fa-camera-retro" aria-hidden="true"></i> ${translate('upload-picture')}</span>
						<input name="picture" id="file" type="file" class="upload" onchange=${onchange}>
					</div>
					<button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
					<button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-ban" aria-hidden="true"></i></button>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10 offset-m1 l6 offset-l3">
				${pictures.map(function (pic) {
					return picture(pic);
				})}
			</div>
		</div>
	</div>`;

	function toggleButtons() {
		document.getElementById('fileName').classList.toggle('hide');
		document.getElementById('btnUpload').classList.toggle('hide');
		document.getElementById('btnCancel').classList.toggle('hide');
	}

	function cancel () {
		toggleButtons();
		document.getElementById('formUpload').reset();
	}

	function onchange () {
		toggleButtons();
	}
	
	function onsubmit (ev) {
		ev.preventDefault();

		var data = new FormData(this)
		request
			.post('/api/pictures')
			.send(data)
			.end(function (err, res) {
				console.log(arguments);
			})
	}
	return layout(el);
}

//facebook muchos programadores por que amedida que crece uno quiere dividir las partes por ejemplo timeline de facebook y por eso se divide en areas el producto
//tambien hay ciertas empresas que hacen investigaciones y sacaron react otra para sacar los datos de react y contrata a gente que crea librerias 
//google tiene un monton de productos google drive y cada una de esas tecnologias tienen varios equipos dividiendose las tareas cada compañia se organiza de manera
//diferente hay equipos por tecnologia dentro de cada hardware hay responsables de cada cosa,la parte de seguridad /escalar el video es para saber como se organiza spotify
//mejor fuente para saber conrespecto a tecnologia web seria conocer el nombre de los autores de las librerias//tengo que seguir a gente en twitter
//jwt.io es como un login de usuarios muy sencillo para las applicaciones / json web tokens nos ahorramos ese acceso ala base de datos del usuario etc
//es muy recomendable como mejora la perfomance del sitio/babeljs parte del stack/browserify/gulp pero pudimos aver trabajo con webpack que es mas avanzado
//en lugar de content le puse picture con la funcion map que lo que hace es por cada uno de los elementos va a ejecutar algo/base de datos dentro del stack
//makefy como package json en unix muy usado/amazon s3 para llevar a produccion/docker muy buena herramienta por si tenemos un monton de imagenes y seutiliza en
//produccion beigrant/webcamjs/passportjs.org login con redes sociales de manera muy sencilla
//webrst que lo que permite es establecer un contacto entre 2 compus sin pasar por un servidor primero 
//https://www.npmjs.com/package/multer
//gulp assets/gulp styles
//gulp watch/gulp

//module.exports = template;//le pasamos de parametro el box