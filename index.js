import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';

import config from './config';
import Topic from './api/models/topic';
import News from './api/models/news';
import User from './api/models/user';


  const app = express();
  const port = process.env.PORT || 3000;
  app.set('secretKey', config.secretKey);

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://admin:test@ds235860.mlab.com:35860/api-fany');
  mongoose.connection.once('open', () => {
    console.log('connected to database')
  });

  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(bodyParser.json());

  // use morgan to log requests to the console
  app.use(morgan('dev'));


  const topic = require('./api/routes/topic');
  const news = require('./api/routes/news');
  const user = require('./api/routes/user');


  topic(app);
  news(app);
  user(app);




app.listen(port);

console.log('RESTful API server started on: ' + port);