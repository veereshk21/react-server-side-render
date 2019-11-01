const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack that we're building a bundle
    //for nodeJS than for browser
    target:'node',
    //tell webpack the root file of our
    //server application
    entry: './src/index.js',
    //__dirname is the current folder we are working in 
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals: [webpackNodeExternals()]
};
module.exports = merge(baseConfig, config);