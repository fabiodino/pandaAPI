var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function (req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/chests', function (req, res) {
	var chests = {
		id: 1,
		name: 'Carteira',
		description: 'Meu precioso dinheiro!'
	}
	res.json(chests);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


