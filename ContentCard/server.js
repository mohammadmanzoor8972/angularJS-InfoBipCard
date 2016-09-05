  // List of nodeJS Dependencies
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var flash = require('connect-flash');
  var server = require('http').Server(app);
  var path = require('path');
  var port = "4030";
  var seeder = require('./store/data')
  server.listen(port);


  app.get('/', function(req, res) {
      res.sendfile('index.html');
  });

  app.get('/api', function(req, res) {
      res.end("Welcome to API")
  });

  app.get('/api/getcardItemlist', function(req, res) {
      res.end(JSON.stringify(seeder.populateDB.initilizeData()));
  });

  app.get('/api/getcardItemlistbyId', function(req, res) {
      console.log("helo*****")
      var itemId = req.query.id;
      if (itemId) {
          res.end(JSON.stringify(seeder.populateDB.getCardItembyId(itemId)));
      } else {
          res.end("Please provide card Id")
      }
  });

  app.use(express.static(path.join(__dirname, '/')));

  app.use(function(req, res, next) {
      var err = new Error(res);
      err.status = 404;
      next(err);
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(flash());

  console.log('Server listening on port ' + port);