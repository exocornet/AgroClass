const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const globImporter = require('node-sass-glob-importer');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
    open: true
    // hot: true,
    // historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        // use: ['pug-loader']
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }
          }
        ]
      },
      // {
      //     test: /\.css$/i,
      //     use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader?url=false",
          {
            loader: "sass-loader",
          }
        ],
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name(file) {
      //           if (process.env.NODE_ENV === 'development') {
      //             return 'assets/images/[hash].[ext]';
      //           }
      //
      //           return 'assets/images/[name].[ext]';
      //         },
      //       }
      //     }
      //   ]
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/pug/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "driving-school.html",
      template: './src/pug/driving-school.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "training-specequipment.html",
      template: './src/pug/training-specequipment.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "extra-education.html",
      template: './src/pug/extra-education.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "about-company.html",
      template: './src/pug/about-company.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "category-card.html",
      template: './src/pug/category-card.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "shares.html",
      template: './src/pug/shares.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "news.html",
      template: './src/pug/news.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "card-news.html",
      template: './src/pug/card-news.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "contacts.html",
      template: './src/pug/contacts.pug'
    }),
    new MiniCssExtractPlugin({
      // filename: "[name].css"
      filename: "css/style.css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/public',
          to: './'
        }
      ]
    })
  ]
}

