var gulp = require('gulp'),
  notify = require('gulp-notify'),
  path = require('path'),
  gls = require('gulp-live-server'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  source = require('vinyl-source-stream'),
  rename = require('gulp-rename'),
  nodemon = require('gulp-nodemon');

var CONF = {
  COMPONENT_PATH: 'app/components/',
  DIST_PATH: 'public/'
};

gulp.task('develop', function () {
  nodemon({
      script: 'bin/www.js',
      watch: [
        'app/**/*.jsx',
        'app/**/*.js',
      ],
      tasks: function (changedFiles) {
        var tasks = [];
        changedFiles.forEach(function (file) {
          if (path.extname(file) === '.jsx' && !~tasks.indexOf('browserify')) tasks.push('browserify');
        });
        return tasks;
      },
      env: {
        "NODE_ENV": "development"
      }
    }
  )
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('develop2', function () {
  //var server = gls.new(['--harmony', 'bin/www.js']);
  var server = gls('bin/www.js', {env: {NODE_ENV: 'development'}});

  server.start();
  gulp.watch(CONF.COMPONENT_PATH + '**/*.jsx', ['browserify']);
  gulp.watch('app.js', server.start.bind(server));
});

gulp.task('browserify', function () {
  var files = [
    'client.jsx'
  ];
  files.map(function (entry) {
    browserify('./app/' + entry)
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
      .pipe(gulp.dest(CONF.DIST_PATH + 'scripts/'));
  });
});

gulp.task('default', ['styles', 'scripts']);

