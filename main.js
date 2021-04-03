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
shell.cp(current_dir + '/dist/workbench.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/workbench.min.js.map', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/*options.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/*options.min.js.map', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/workshift-mobile.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/workshift-mobile.min.js.map', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/exam.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/exam.min.js.map', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/learning.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/learning.min.js.map', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/survey.min.js', 'dist/accjs-workbench-plus/js/');
shell.cp(current_dir + '/dist/survey.min.js.map', 'dist/accjs-workbench-plus/js/');

//workgbench files
shell.cp(current_dir + '/node_modules/mousetrap/mousetrap.min.js', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/workbench.min.js', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/workbench.min.js.map', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/options.min.js', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/options.min.js.map', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/hotkey-options.min.js', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/hotkey-options.min.js.map', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/workshift-mobile.min.js', 'dist/accjs-workbench/js/');
shell.cp(current_dir + '/dist/workshift-mobile.min.js.map', 'dist/accjs-workbench/js/');

//alicert files
shell.cp(current_dir + '/node_modules/mousetrap/mousetrap.min.js', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/exam.min.js', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/exam.min.js.map', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/learning.min.js', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/learning.min.js.map', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/survey.min.js', 'dist/accjs-alicert/js/');
shell.cp(current_dir + '/dist/survey.min.js.map', 'dist/accjs-alicert/js/');


//shell.cd(current_dir);
shell.echo('done');
