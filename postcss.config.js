var postcssImport = require('postcss-import');
var postcssPresetEnv = require('postcss-preset-env');
var postcssMixins = require('postcss-mixins');
var postcssEach = require('postcss-each');
var postcssApply = require('postcss-apply');
var postcssNesting = require('postcss-nesting');
var postcssReporter = require('postcss-reporter');
var path = require('path');
const reactToolboxVariables = require('./css-overrides');

module.exports = ctx => ({
	sourceMap: true,
	plugins: [
		postcssImport({
			addModulesDirectories: [
				path.join(__dirname, 'node_modules/react-toolbox'),
				'app'
			]
		}),
		postcssMixins(),
		postcssEach(),
		postcssApply(),
		postcssNesting(),
		postcssPresetEnv({
			stage: 0,
			browserslist: ['last 2 versions', 'ios >= 8'],
			features: {
				'custom-properties': {
					preserve: false,
					variables: reactToolboxVariables
				}
			},
			autoprefixer: {
				grid: true
			}
		}),
		postcssReporter({
			clearMessages: true
		})
	]
});
