require("babel-polyfill");

var page = require('page');

require('./homepage');
require('./signup');
require('./signin');
require('./user-page');
require('./footer');

page();
//require('./header');//de esta manera usamos superagent para separar bien todo y poner el header en el index del homepage solamente //nos permite usar request tipo http

//https://github.com/mzabriskie/axios basados en promesas requests
/*funcionan asi las basadas en promesas : get y que ruta quiere lee o post y el parametro tenemos muchas formas de pasarle datos,nos permite lo mismo que superagent pero en promesas
tienen un metodo llamada.then y en caso de haber un error en cualquiera de los thens va a acaer en le try catch  .puedes poner un console.log(mandando el error)
https://github.com/github/fetch
es muy parecido alos anteriores 2 superagent y axion*/
//var moment = require('moment');
//require('moment/locale/es');//con esto le cambio el idioma a español ala fecha
//moment.locale('es');
//http://formatjs.io/github/https://github.com/yahoo/intl-messageformat
//es por español
//var yo = require('yo-yo');
//var empty = require('empty-element');
//Nombre del modulo
//main.innerHTML = 'Home <a href="/signup">Signup</a>';

//diga home//main.innerHTML = 'Signup2<a href="/">Homee</a>';

//page.start();
//diga signup
