const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PUBLIC_PATH = {
  development: '/',
  production: './',
};

module.exports = (env) => {
  const { development: isDev } = env;
  const mode = isDev ? 'development' : 'production';
  const publicPath = PUBLIC_PATH[mode];

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist/static'),
      publicPath,
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],

    devServer: {
      port: 3000,
      hot: true,
      open: true,
    },
  };
};
