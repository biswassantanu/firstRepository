var express = require('express');

var app = express();
var express = require('express');

var app = express();

// set up handlebars view engine
// set up handlebars view engine 
var handlebars = require('express-handlebars') 
	.create({ defaultLayout:'main' }); 
	app.engine('handlebars', handlebars.engine); 
	app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req,res){
	res.type('text/plain');
	res.send('This is about');
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.send('404 - Not found');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.send('500 - Server Error ');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
