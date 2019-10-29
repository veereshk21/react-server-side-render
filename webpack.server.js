const path = require('path');
module.exports = {
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
    //tell weback to run babel file it runs through
    module:{
        rules: [
            {
             test: /\.js?$/,
             loader:'babel-loader',
             exclude: /node_modules/,
             options: {
                 presets:[
                     'react',
                     'stage-0',
                     ['env',{targets: {browsers:['last 2 versions']}}]
                 ]
             }
            }
        ]
    }
};