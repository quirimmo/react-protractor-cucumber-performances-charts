/**
 * Transpiles TypeScript to JavaScript code.
 *
 * @link https://github.com/facebook/jest/blob/master/examples/typescript/preprocessor.js
 * @copyright 2004-present Facebook. All Rights Reserved.
 */
const tsc = require('typescript');
const tsConfig = require('./../tsconfig.json');
var babelJest = require('babel-jest');

module.exports = {
	process(src, path) {
		// if (path.match(/\.[css|less|scss]/)) {
		//     return '';
		// }
		// return babelJest.process(src, path);

		// return babelJest.process(src, path).replace(/require\(\'[^\']+\.css\'\);/gm, '');

		if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
			return tsc.transpile(src, tsConfig.compilerOptions, path, []);
		}

		return src;
	}
};
