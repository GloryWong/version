import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  input: './index.js',
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}