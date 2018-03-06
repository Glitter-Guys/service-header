const express = require('express');
const morgan = require('morgan');
const path = require('path');
const DbHelper = require('../db');
const dbHelper = new DbHelper();
const fs = require('fs');

const app = express();

// for logging
app.use(morgan('dev'));

var publicPath;


if (process.env.NODE_ENV !== 'production') {
    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.
    const webpack = require('webpack');
    const wbHotMiddleware = require('webpack-hot-middleware');
    const wbDevMiddleware = require('webpack-dev-middleware');
    const config = require('../webpack.config.js');
    const compiler = webpack(config);

    app.use(wbHotMiddleware(compiler));
    app.use(wbDevMiddleware(compiler, {
        publicPath: '/'
    }))

} else {
    app.get(/\/event\/.*\/bundle.js/, function(req, res) {
        fs.readFile('./client/dist/bundle.js', 'utf-8', function (err, data) {
            if (err) console.log(err);
            res.status(200);
            res.end(data);
        })
    })

    app.use(/\/event\/.*\/.*/, function(req, res, next) {
        console.log('REQ url: ', req.url);
        console.log('REQ url: ', req.baseUrl);
        publicPath = req.baseUrl.split('/').slice(0,3).join('/') + '/';
        var eventId = req.baseUrl.split('/')[2];


        //db query goes here
        dbHelper.retrieveEvent(eventId, function(err, event) {
            if (err) {
                res.status(401);
                res.end('Database Err' + err);
                return;
            }
            //script tag
            var scriptTag = '<script> window.data = ' + JSON.stringify(event) + '</script>';

            //readHTML and add it to the html script
            fs.readFile('./client/dist/index.html', 'utf-8', function(err, data) {
                if (err) console.log(err);
                var re = /<\/head>/;
                var ans = re.exec(data);
                console.log('lastindex', ans.index);
                var str = data.slice(0, ans.index) + scriptTag + data.slice(ans.index, data.length);
                console.log(str);
                //return html script + template
                res.status(200);
                res.end(str)
            })
        })
    })
    
    //app.use(express.static(path.resolve(__dirname, '../client/dist')));
}




app.set('port', 8080);

app.listen(app.get('port'), function () {
    console.log('Listening to port ' + app.get('port'));
})