'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gulpFilter = require('gulp-filter'),
    plumber = require('gulp-plumber');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'public/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'public/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'public/style/main.scss',
        img: 'public/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'public/fonts/**/*.*',
        backend: 'backend/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'public/**/*.html',
        js: 'public/js/**/*.js',
        style: 'public/style/**/*.scss',
        img: 'public/img/**/*.*',
        fonts: 'public/fonts/**/*.*',
        server: 'backend/**/*.*'
    },
    clean: './build',
    backend: {
        src: 'backend/**',
        build: 'build',
        views: 'backend/views'
    },
    app: 'backend/app.js'
};

gulp.task('backend:build', function () {
  var filter = gulpFilter('**/*.js');

  return gulp.src([path.backend.src, path.app], { base: './' })
    .pipe(plumber())
    .pipe(filter)
    .pipe(gulp.dest(path.backend.build));
});

gulp.task('watch', function(){
    watch([path.watch.server], function(event, cb) {
        gulp.start('backend:build');
    });
});


gulp.task('default', ['watch']);