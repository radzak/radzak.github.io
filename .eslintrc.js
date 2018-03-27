process.env.NODE_ENV = 'development';

module.exports = {
  env: {
    browser: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'react-app'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.dev.js'
      }
    }
  },
  rules: {
    'comma-dangle': ['warn', 'never'],
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ]
  }
};
