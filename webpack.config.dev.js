var path = require('path');
var webpack = require('webpack');

module.exports =
  { devtool: 'cheap-module-source-map'
  , entry:
    [ 'react-hot-loader/patch'
    , 'webpack-hot-middleware/client'
    , './src/index'
    ]
  , externals:
    { 'react/addons': 'react'
    , 'react/lib/ExecutionEnvironment': 'react'
    , 'react/lib/ReactContext': 'react'
    }
  , output:
    { path: path.join(__dirname, 'dist')
    , filename: 'bundle.js'
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
        , loaders:
          [ 'babel-loader' ]
        , include: path.join(__dirname, 'src')
        }
      ]
    }
  , plugins:
    [ new webpack.HotModuleReplacementPlugin()
    , new webpack.DefinePlugin(
        { 'process.env':
          { 'NODE_ENV': JSON.stringify('development')
          }
        }
      )
    ]
  };
