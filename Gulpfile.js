var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('styles', function() {
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

gulp.task('assets', function() {
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})
//clousure poder jugar con el alcance de las variables de las demas funciones//La funcion se ejecuta junto al error

function compile(watch) {
	var bundle = browserify('./src/index.js');//cada que llamemos a compile 

	if (watch) {
		bundle = watchify(bundle);
		bundle.on('update', function() {   //cada que genere eventos de update se va a ejecutar rebundle();
			console.log('--> Bundling...');
			rebundle();	
		});//le mandamos un evento
	}

	function rebundle() {
		bundle
			.transform(babel, { presets: ['es2016'], plugins: ['syntax-async-functions', 'transform-regenerator']})
			.bundle()
			.on('Error', function(err){ console.log(err); this.emit('end') })
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('public'));
	}
	
	rebundle();
}
//var hola=0
//console.log(hola)//solo existe dentro de rebundle

gulp.task('build', function () {
	return compile();
});


gulp.task('watch', function () {
	return compile(true);
});

gulp.task('default', ['styles','assets', 'build']);
//al scripts lo cambien por build
//ahora si ya son accesibles a todos los usuarios y se genero app.css y la imagen
//pagejs nos permite hacer cambiar la vista sin tener que recargar https://github.com/visionmedia/page.js aqui dice todas las caracterisiticas