const compressing = require('compressing');
const fs = require('fs');
const shell = require('shelljs');
const current_dir = __dirname;
shell.echo("clean the dist dir");
shell.rm('-rf', 'dist/*');
shell.echo("compile the scripts");
shell.exec("rollup -c --config:minify");
shell.echo("copy files");
//template
shell.cp('-rf', current_dir + '/template/accjs-workbench-plus', 'dist/');
shell.cp('-rf', current_dir + '/template/accjs-workbench', 'dist/');
shell.cp('-rf', current_dir + '/template/accjs-alicert', 'dist/');

//workbench-plus files
shell.cp(current_dir + '/node_modules/mousetrap/mousetrap.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/workbench.min.*', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/*options.min.*', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/workshift-mobile.min.*', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/exam.min.*', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/learning.min.*', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/survey.min.*', 'dist/accjs-workbench-plus/js/');


//workgbench files
shell.cp(current_dir + '/node_modules/mousetrap/mousetrap.min.js', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/workbench.min.*', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/*options.min.*', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/workshift-mobile.min.*', 'dist/accjs-workbench/js/');


//alicert files
shell.cp(current_dir + '/node_modules/mousetrap/mousetrap.min.js', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/exam.min.*', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/learning.min.*', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/survey.min.*', 'dist/accjs-alicert/js/');

shell.echo('compressing the files');
compressing.zip.compressDir(current_dir + '/dist/accjs-workbench-plus', current_dir + '/dist/accjs-workbench-plus.zip').then(() => {
console.log('accjs-workbench-plus has compressed.');
});
compressing.zip.compressDir(current_dir + '/dist/accjs-workbench', current_dir + '/dist/accjs-workbench.zip').then(() => {
console.log('accjs-workbench has compressed.');
});
compressing.zip.compressDir(current_dir + '/dist/accjs-alicert', current_dir + '/dist/accjs-alicert.zip').then(() => {
console.log('accjs-alicert has compressed.');
});
