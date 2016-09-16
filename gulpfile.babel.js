import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';

const paths = {
  js: {
    src: [ './src/**/*.js' ],
    dist: './dist'
  },
  swig: {
    src: [ './src/views/**/*.swig' ],
    dist:  './dist/views'
  },
  bin: './dist/boot.js'
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

let express_server;

gulp.task('server', () => {
  express_server = server.new(paths.bin);
  express_server.start();
});

gulp.task('restart', () => {
  express_server && express_server.start && express_server.start.bind(express_server)();
});

gulp.task('watch', () => {
  return watch(paths.js.src.concat(paths.swig.src), () => {
    gulp.start('build');
  })
});
