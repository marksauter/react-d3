var path = require('path');
var webpack = require('webpack');

module.exports =
  { devtool: 'source-map'
  , entry:
    { main:
      [ './src/index'
      ]
    , vendor:
      [ 'fela'
      , 'react'
      , 'react-dom'
      , 'react-fela'
      , 'redux'
      ]
    }
  , externals:
    { 'react/addons': 'react'
    , 'react/lib/ExecutionEnvironment': 'react'
    , 'react/lib/ReactContext': 'react'
    }
  , output:
    { path: path.join(__dirname, 'build')
    , filename: '[name].[chunkhash].js'
    , chunkFilename: '[name].[chunkhash].chunk.js'
    , publicPath: '/static/'
    }
  , stats:
    { chunks: true
    }
  , resolve:
    { extensions:
      [ '.js'
      , '.jsx'
      ]
    , alias:
      { components: path.join(__dirname, 'src/components')
      , containers: path.join(__dirname, 'src/containers')
      }
    }
  , module:
    { rules:
      [ { test: [ /\.js$/, /\.jsx$/ ]
        , loader: 'babel-loader'
        , include: path.join(__dirname, 'src')
        }
      ]
    }
  , plugins:
    [ new webpack.optimize.OccurenceOrderPlugin()
    , new webpack.DefinePlugin(
        { 'process.env':
          { 'NODE_ENV': JSON.stringify('production')
          }
        }
      )
    , new webpack.optimize.CommonsChunkPlugin(
        { name: 'vendor'
        , children: true
        , minChunks: 2
        , async: true
        }
      )
    , new webpack.optimize.UglifyJsPlugin(
        { compressor:
          { warnings: false
          }
        , sourceMap: false
        }
      )
    ]
  };
