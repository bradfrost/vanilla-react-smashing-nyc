const path = require('path');
const scssToJson = require('scsstojson');

var variableItems = [
  {
    src: './src/css/scss/abstracts/_variables.scss',
    dest: './src/data/brand-colors.json',
    lineStartsWith: '$color-brand-',
    allowVarValues: false
  },
  {
    src: './src/css/scss/abstracts/_variables.scss',
    dest: './src/data/neutral-colors.json',
    lineStartsWith: '$color-neutral-',
    allowVarValues: false
  },
  {
    src: './src/css/scss/abstracts/_variables.scss',
    dest: './src/data/utility-colors.json',
    lineStartsWith: '$color-utility-',
    allowVarValues: false
  },
  {
    src: './src/css/scss/abstracts/_variables.scss',
    dest: './src/data/font-sizes.json',
    lineStartsWith: '$font-size-',
    allowVarValues: false
  }
];

scssToJson(variableItems, {}, function() {});

module.exports = ({ config, mode }) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'vanilla-react': path.resolve(__dirname, `../src/index`)
      }
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../')
        }
      ]
    }
  };
};
