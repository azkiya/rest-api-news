import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import logger from 'morgan';
import session from 'express-session';
import dotenv from 'dotenv';

import config from './src/config';
import { CONFIG_SECRET } from './src/config/constants';
import Topic from './src/models/topic';
import News from './src/models/news';
import User from './src/models/user';


  const app = express();
  dotenv.config();
  const port = process.env.PORT || 3001;
  app.set('secretKey', CONFIG_SECRET);

  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DB_DROPLET, {useUnifiedTopology: true});
  mongoose.connection.once('open', () => {
    console.log('connected to database')
  });

  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(bodyParser.json());

// use morgan to log requests to the console
if (config.get('debug')) {
  app.use(logger('dev'));
}
  //use sessions for tracking logins
  app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));


  const topic = require('./src/routes/topic');
  const news = require('./src/routes/news');
  const user = require('./src/routes/user');


  topic(app);
  news(app);
  user(app);




app.listen(port);

console.log('RESTful API server started on: ' + port);
