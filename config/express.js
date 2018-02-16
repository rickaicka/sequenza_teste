var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');


module.exports = function(){
    var app = express();
    //configuração de ambiente
    app.use(express.static('./'));
    app.set('port',2020);
    return app;
};
