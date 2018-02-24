const express = require('express');
const morgan = require('morgan');
const path = require('path');



const app = express();

// for logging
app.use(morgan('dev'));

if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const wbHotMiddleware = require('webpack-hot-middleware');
    const wbDevMiddleware = require('webpack-dev-middleware');
    const config = require('../webpack.config.js');
    const compiler = webpack(config);

    app.use(wbHotMiddleware(compiler));
    app.use(wbDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }))
}



// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.


// app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.set('port', 3000);

app.listen(app.get('port'), function () {
    console.log('Listening to port ' + app.get('port'));
})