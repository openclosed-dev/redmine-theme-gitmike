'use strict';

import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import gulpAutoPrefixer from 'gulp-autoprefixer'
import browserSync from 'browser-sync'

const bs = browserSync.create()
const gs = gulpSass(dartSass)

function sass(env) {
  var nodeSassOption = {
    outputStyle: 'expanded',
    sourceComments: env === 'development'
  };
  // sourceComments
  return gulp.src('./sass/*.scss')
    .pipe(gs(nodeSassOption).on('error', gs.logError))
    .pipe(gulpAutoPrefixer({
      cascade: true
    }))
    .pipe(gulp.dest('stylesheets'))
    .pipe(bs.stream())
    ;
}

gulp.task('sass:prod', function () {
  return sass('production');
});

gulp.task('sass:dev', function () {
  return sass('development');
});

gulp.task('browser-sync', function (done) {
  bs.init({
    port: 3001,
    proxy: '127.0.0.1:3000'
  });
  done();
});

gulp.task('debug', gulp.series('sass:dev', 'browser-sync', function () {
  gulp.watch('sass/**/*.scss', gulp.task('sass:dev'));
}));

gulp.task('default', gulp.series('sass:prod'));
