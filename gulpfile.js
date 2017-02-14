const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
gulp.task('styles', () => {
    gulp.src('dev/styles/**/*.scss')
    .pipe(sass().on ('error', sass.logError))
    .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))    
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/styles'))
    .pipe(reload({stream:true}));
    });
gulp.task('scripts', () => {
    gulp.src('./dev/scripts/**/*.js')
    .pipe(plumber())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/scripts'))
    .pipe(reload({stream:true}));
    });
gulp.task('browser-sync', () => {
    browserSync.init({
        server: './'
        })
});
gulp.task('watch', () => {
    gulp.watch('dev/styles/**/*.scss', ['styles']);
    gulp.watch('./dev/scripts/**/*.js', ['scripts']);
    gulp.watch('./*.html', reload);
    });
gulp.task('default', ['browser-sync', 'styles', 'scripts', 'watch']);