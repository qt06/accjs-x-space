import minimist from 'minimist';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

let argv = minimist(process.argv.slice(2));
let minify = argv['config:minify'];
const build = (filename) => {
return {
  input: 'src/' + filename + '.js',
  output: {
    file: minify ? 'dist/' + filename + '.min.js' : 'dist/' + filename + '.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    minify ? terser() : {}
  ]
}};
export default [
build('workbench-plus'),
build('workbench-full'),
build('workbench'),
build('options'),
build('hotkey-options'),
build('workshift-options'),
build('workshift'),
build('exam'),
build('survey'),
build('learning'),
];
