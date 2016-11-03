import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';


const paths = {
  js:['./src/**/*.js'],
  destination:'./app'
};

gulp.task('default', (callback) => {
  run('build','watch',callback);
});

gulp.task('build', (callback) => {
  run('clean','flow','babel',callback);
});

gulp.task('clean', (callback) => {
  rimraf(paths.destination,callback);
});

gulp.task('flow', shell.task(['flow'],{ignoreErrors:true})); //add this option to prevent gulp from crashing.

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

let express;

gulp.task('server',() => {
console.log('server');
  express = server.new(paths.destination);
});

gulp.task('restart',() => {
  express.start.bind(express)(); // self invoke function ()
});

gulp.task('watch',() => {
  return watch(paths.js, () => {
    gulp.start('build');
  });
});
