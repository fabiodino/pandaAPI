var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Sequelize = require('sequelize');
var mysql = require('mysql');

/**
* @todo Colocar em um arquivo separado.
*/
var sequelize = new Sequelize (process.env.PANDA_DB_NAME, process.env.PANDA_DB_USERNAME, process.env.PANDA_DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

/**
* @todo: Colocar em um novo arquivo.
*/
var Chest = sequelize.define('chest', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
});

/**
* Middlewares.
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));

/**
* @todo Remover essa rota.
*/
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function (req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

/**
* Pega todos os baús.
*/
app.get('/chests', function (req, res) {
  Chest.findAll().then(function (chests) {
    res.json(chests);
  },function (err) {
    res.status(500).json({error: err});
  })
});

/**
* Insere um baú.
*/
app.post('/chests', function (req, res) {
  Chest.create({
    name: req.body.name,
    description: req.body.description
  }).then(function (chest) {
    res.status(200).json();
  }, function (err) {
    res.status(500).json({error: err});
  })
});

/**
* Inicia o servidor.
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
