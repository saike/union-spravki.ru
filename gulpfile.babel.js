import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import forever from 'forever-monitor';
import path from 'path';

const paths = {
  js: {
    src: [ './src/**/*.js' ],
    dist: './dist'
  },
  swig: {
    src: [ './src/views/**/*.swig' ],
    dist:  './dist/views'
  },
  bin: 'boot.js'
};

const UID = 'union-spravki.ru';

const FOREVER_CONFIG = {
  env: process.env,
  args: process.argv,
  // watch: true, // can pass if you set any watch option, for example watchIgnorePatterns
  // watchIgnorePatterns:  ['.*', 'node_modules/**', 'public/**', 'temp/**'],
  silent: true,
  uid: UID
};

gulp.task('default', (callback) => {
  run("build", "server", "watch", callback);
});

gulp.task('build', (callback) => {
  run('clean', 'babel', 'templates', 'restart', callback);
});

gulp.task('clean', (callback) => {
  rimraf(paths.js.dist, callback);
});

gulp.task('babel', shell.task([
  'babel src --out-dir dist'
]));

gulp.task('templates', () => {
  gulp.src(paths.swig.src)
    .pipe(gulp.dest(paths.swig.dist));
});

let server;

gulp.task('server', () => {

  server = new (forever.Monitor)(path.join(paths.js.dist, paths.bin), FOREVER_CONFIG);

  server.on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.file + ' changed');
  });

  server.on('restart', function() {
    console.error('Forever restarting script for ' + server.times + ' time');
  });

  server.on('exit:code', function(code) {
    console.error('Forever detected script exited with code ' + code);
  });

  server.start();

});

gulp.task('restart', () => {
  if(server){
    server.restart();
  }
});

gulp.task('watch', () => {
  return watch(paths.js.src.concat(paths.swig.src), () => {
    gulp.start('build');
  })
});
