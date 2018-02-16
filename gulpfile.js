var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlReplace = require('gulp-html-replace'),
    autoPrefixer = require('gulp-autoprefixer'),
    cssMin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    useMin = require('gulp-usemin'),
    inject = require('gulp-inject');

var paths = {
    sassSrcPath: ['./src/sass/**/*.scss'],
    sassDestPath: './src/css/',
    appJs : [
        './application/**/*.module.js',
        './application/**/*.config.js',
        './application/**/*.service.js',
        './application/**/*.dataService.js',
        './application/**/*.provider.js',
        './application/**/*.controller.js',
        './application/**/*.directive.js',
        '!./application/**/appConfig.provider.js'
    ]
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    gulp.src(paths.sassSrcPath)
        .pipe(sass())
        .pipe(autoPrefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.sassDestPath));
});

gulp.task('css',['sass'], function(){
  return gulp.src('./**/*.html')
      .pipe(htmlReplace({
          'css':'src/css/style.min.css'
      }));
});

gulp.task('minify', ['css'], function(){
    gulp.src(paths.sassDestPath+'**/style.css')
        .pipe(cssMin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});

gulp.task('index', function(){
    return gulp.src('index.html')
        .pipe(
            inject(
                gulp.src(paths.appJs, {read: false}),
                {relative: true, starttag: '<!-- inject:appJs:{{ext}} -->'}
            )
        )
        .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
    gulp.watch(paths.sassSrcPath, ['minify']);
});

gulp.task('default', ['sass','watch']);
