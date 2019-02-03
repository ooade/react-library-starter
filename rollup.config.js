import babel from 'rollup-plugin-babel';

let pkg = require('./package.json');

export default {
	input: 'src/index.js',
	external: ['react', 'prop-types'],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	],
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true
		},
		{
			name: 'custom-button',
			file: pkg.umd,
			format: 'umd',
			sourcemap: true,
			globals: {
				react: 'react',
				'prop-types': 'prop-types'
			}
		}
	]
};
