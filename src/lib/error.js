import status from 'http-status';
import ExtendableError from 'es6-error';
import config from '../config';


/**
 * APIError
 */
export class APIError extends ExtendableError {
  /**
   * APIError constructor
   *
   * @param message
   * @param httpStatus
   * @param previousError
   */
  constructor(message, httpStatus, previousError) {
    /* eslint-disable no-param-reassign */
    if (message instanceof Error) {
      previousError = message;
      message = previousError.message;
    }

    super(message);
    this.httpStatus = httpStatus || status.INTERNAL_SERVER_ERROR;
    this.previousError = previousError;
  }

  /**
   * Send error to express response
   *
   * @param res
   */
  send(res) {
    res.status(this.httpStatus);
    const body = { message: this.message };
    if (config.get('debug')) {
      body.previousError = this.previousError;
    }
    res.send(body);
  }
}

/**
 * AuthorizationError
 */
export class AuthorizationError extends APIError {
  constructor(message, previousError) {
    super(message, status.UNAUTHORIZED, previousError);
  }
}

/**
 * AuthenticationError
 */
export class AuthenticationError extends APIError {
  constructor(message, previousError) {
    super(message, status.FORBIDDEN, previousError);
  }
}


export default {
  APIError,
  AuthorizationError,
  AuthenticationError,
};
