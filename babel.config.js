/* eslint-disable */
module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['jsx-control-statements', 'transform-react-inline-elements'],
  };
};
