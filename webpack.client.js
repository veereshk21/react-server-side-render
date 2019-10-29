const path = require('path');
module.exports = {
    entry: './src/client/client.js',
    //__dirname is the current folder we are working in 
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'public')
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