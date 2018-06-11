import * as Constants from '../config/constants';
import config from '../config';
import { AuthenticationError, AuthorizationError } from '../lib/error';
import mongoose from 'mongoose';

const User = mongoose.model('User');


/**
 * Protect API endpoint using auth token
 * @param req
 * @param res
 * @param next
 */
export const protect = async (req, res, next) => {

  const token = req.header(config.get(Constants.TOKEN_HEADER));

  if (!token) {
    next(new AuthenticationError(`Header ${config.get(Constants.TOKEN_HEADER)} should be present`));
  }


  let person;

  try {
      person = await User.findById(req.session.userId).exec();
  } catch (err) {
    next(new AuthenticationError('Invalid token', err));
  }

  if (!person) {
    next(new AuthenticationError('Unknown error'));
  }

  req.user = req.person = person;
  next();
};
