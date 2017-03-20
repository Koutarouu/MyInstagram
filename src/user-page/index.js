var page = require('page');
var header = require('../header');
var title = require('title');
var empty = require('empty-element');
var template = require('./template');

page('/:username', header, loadUser, function (ctx, next) {
	var main = document.getElementById('main-container');
	title(`Platzigram - ${ctx.params.username}`);
	empty(main).appendChild(template(ctx.user));
	$('.materialboxed').materialbox();
	$(document).ready(function(){
    	$('.carousel').carousel();
    });
});

page('/:username/:id',  header, loadUser, function (ctx, next) {
	var main = document.getElementById('main-container');
	title(`Platzigram - ${ctx.params.username}`);
	empty(main).appendChild(template(ctx.user));
	$('.materialboxed').materialbox();
});
//clousure
//es lo mismo que escribir una funcion lo de .then => ahorramos mucho codigo
async function loadUser (ctx, next) {
	try {
		ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())//sabemos que se va a resolver en algun momento
		next();//el fetch que es una promesa
	} catch (err) {
		console.log(err);
	}
}
//inner html es para poder setearlo pero yo-yo es mejor no tienes que modificar tanto y lo renderiza el yo-yo ,react hace algo parecido
//la libreria que estabamos usando era webcamjs lo que nos permitia era
/*$(`#modal${ctx.params.id}`).modal({
		ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      	},
		complete: function () {
			var path = `/${ctx.params.username}`;
			page(path)
		}
	});*/