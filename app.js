
/**
 * Module dependencies.
 */

//compulsory modules
var express = require('express');
var http = require('http');
var path = require('path');
var cons = require('consolidate')

//import all lib stuff
var routes = require('./lib/routes');

var app = express();



// all environments if needed
app.set('port', process.env.PORT || 3000);

app.engine("html",cons.ejs); //uses the consolidate module to force express to use html as rendering engine
app.set('view engine', 'html'); // sets view engine to plain html
app.set('views', path.join(__dirname, 'public')); //sets the public directory as view folder which res.render() uses
app.use(express.favicon("public/favicon.ico")); //this is crucial or else it will use the favicon of connect module
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('ourpretutidesecretpassword'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); //uses the public directory to serve static content

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//this is where you should add all route definitions
app.get('/', function(req,res){res.render('index')});

http.createServer(app).listen(app.get('port'), function(){
  console.log('starting Preptitude App......listening on port ' + app.get('port'));
});
