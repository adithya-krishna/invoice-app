var postcssImport = require('postcss-import');
var postcssPresetEnv = require('postcss-preset-env');
var postcssMixins = require('postcss-mixins');
var postcssEach = require('postcss-each');
var postcssApply = require('postcss-apply');
var postcssNesting = require('postcss-nesting');
var postcssReporter = require('postcss-reporter');

const reactToolboxVariables = require('./css-overrides');

module.exports = ctx => ({
	syntax: 'postcss-scss',
	sourceMap: true,
	plugins: [
		postcssImport({
			addModulesDirectories: ['node_modules', 'app']
		}),
		postcssMixins(),
		postcssEach(),
		postcssApply(),
		postcssNesting(),
		postcssPresetEnv({
			stage: 0,
			features: {
				'custom-properties': {
					preserve: false,
					variables: reactToolboxVariables
				}
			},
			browserslist: ['last 2 versions', 'ios >= 8'],
			autoprefixer: {
				grid: true
			}
		}),
		postcssReporter({
			clearMessages: true
		})
	]
});
