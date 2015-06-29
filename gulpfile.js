var gulp = require('gulp'),
  notify = require('gulp-notify'),
  path = require('path'),
  gls = require('gulp-live-server'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  source = require('vinyl-source-stream'),
  rename = require('gulp-rename');

var CONF = {
  COMPONENT_PATH: 'components/',
  DIST_PATH: 'public/'
};

gulp.task('develop', function () {
  var server = gls.new('bin/www.js');
  server.start();
  gulp.watch(CONF.COMPONENT_PATH + '**/*.jsx', ['browserify']);
  gulp.watch('app.js', server.start.bind(server));
});

gulp.task('browserify', function () {
  var files = [
    'app.jsx'
  ];
  files.map(function (entry) {
    browserify('./' + CONF.COMPONENT_PATH + 'bundles/' + entry)
      .transform(babelify)
      .bundle()
      .on('error', function (e) {
        console.log(e.message);
        this.emit('end');
      })
      .pipe(source(entry))
      .pipe(rename({
        extname: '.js'
      }))
      .pipe(gulp.dest(CONF.DIST_PATH + 'scripts/bundles/'));
  });
});

gulp.task('default', ['styles', 'scripts']);

