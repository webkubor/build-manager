import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'path/to/your/module.js',
  output: {
    name: 'MyModule',
    file: 'path/to/output/bundle.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    uglify()
  ]
};
