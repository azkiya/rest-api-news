var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Topic = require('./api/models/topicModel'),
  News = require('./api/models/newsModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://fany:irfana@ds235860.mlab.com:35860/api-fany');
  mongoose.connection.once('open', () => {
    console.log('connected to database')
  });

  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(bodyParser.json());

  var topic = require('./api/routes/topicRoutes');
  var news = require('./api/routes/newsRoutes');

  topic(app);
  news(app);



app.listen(port);

console.log('RESTful API server started on: ' + port);
