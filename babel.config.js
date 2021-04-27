module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@app': './src/App',
          '@': './',
        },
      },
    ],
    'jest-hoist',
    'macros',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
