import { TOKEN_HEADER } from './config';
import { AuthenticationError, AuthorizationError } from '../lib/error';

const User = mongoose.model('User');


/**
 * Protect API endpoint using auth token
 * @param req
 * @param res
 * @param next
 */
export const protect = async (req, res, next) => {
  const token = req.header(config.get(TOKEN_HEADER));

  if (!token) {
    next(new AuthenticationError(`Header ${config.get(TOKEN_HEADER)} should be present`));
  }

  let person;
  try {
    if(req.session.token == token){

      return await await User.findOne({ _id: req.session.userId }).exec();
      
    }
  } catch (err) {
    next(new AuthenticationError('Invalid token', err));
  }

  if (!person) {
    next(new AuthenticationError('Unknow error'));
  }

  req.user = req.person = person;
  next();
};
