module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@*': '.src/*',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@libraries': './src/libraries',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@reduxhooks': './src/redux/hooks.ts',
          '@slice': './src/redux/slice',
        },
      },
    ],
  ],
};
