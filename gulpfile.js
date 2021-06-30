const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
var sourcemaps = require('gulp-sourcemaps');

function imgSquash() {
  return gulp.src(["./images/**/*"])
    .pipe(imagemin(
      imagemin(
        [
          imageminPngquant({
            speed: 1,
            floyd: 1,
            strip: true,
            quality: 40
          })
        ]
      )
    ))
    .pipe(gulp.dest(["./imgs/"]));
}


gulp.task('default', function () {
  return gulp.src('sass/*')
    .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      sourceComments: 'map'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});
gulp.task('min-sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed',
      sourceComments: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('asass', function () {
  return gulp.watch(
    ['sass/*.scss', 'sass/**/*.scss'],
    gulp.parallel('sass'),
    gulp.watch(["./images/**/*"], imgSquash)
  );
});


// gulp.task('dep', ['minify-css', 'minify-js', 'copy']);
