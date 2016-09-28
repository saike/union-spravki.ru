import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';
import less from 'gulp-less';
import concat from 'gulp-concat';

const paths = {
  js: {
    src: [ './src/**/*.js' ],
    dist: './dist'
  },
  twig: {
    src: [ './src/views/**/*.twig' ],
    dist:  './dist/views'
  },
  less: {
    src: [ './src/views/**/*.less' ],
    dist:  './public/css'
  },
  bin: './dist/boot.js'
};

gulp.task('default', (callback) => {
  run("build", "server", "watch", callback);
});

gulp.task('build', (callback) => {
  run('clean', 'babel', 'templates', 'less', 'restart', callback);
});

gulp.task('clean', (callback) => {
  rimraf(paths.js.dist, callback);
});

gulp.task('babel', shell.task([
  'babel src --out-dir dist'
]));

gulp.task('templates', () => {
  gulp.src(paths.twig.src)
    .pipe(gulp.dest(paths.twig.dist));
});

gulp.task('less', () => {
  gulp.src(paths.less.src)
    .pipe(less({
      paths: ['node_modules', 'src/views']
    }))
    .pipe(concat('union-spravki.css'))
    .pipe(gulp.dest(paths.less.dist));
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
  return watch(paths.js.src.concat(paths.twig.src).concat(paths.less.src), () => {
    gulp.start('build');
  })
});
