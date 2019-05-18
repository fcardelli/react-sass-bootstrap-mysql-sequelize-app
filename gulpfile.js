'use strict';
//Install Gulp dependecies 
//npm i gulp gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed --save-dev
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
sass.compiler = require('node-sass');

gulp.task('default', watch);
gulp.task('sass', compilaSass);

function compilaSass(){
    return gulp
            .src('./src/scss/**/*.sass')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./src/css'));
}

function watch(){
    gulp.watch('./src/scss/**/*.sass', compilaSass);
}






