const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './app/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  externals: [nodeExternals()],
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['yarn run:dev'],
        parallel: true
      }
    })
  ]
}
