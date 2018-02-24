const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const wbMiddleware = require('webpack-dev-middleware');


const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(wbMiddleware(compiler, {
    publicPath: config.output.publicPath
}))
// for logging
//app.use(morgan('dev'));

// app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.set('port', 3000);

app.listen(app.get('port'), function () {
    console.log('Listening to port ' + app.get('port'));
})