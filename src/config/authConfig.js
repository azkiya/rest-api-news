import * as Constants from './constants';

const AuthConfig = {};

AuthConfig[Constants.TOKEN_HEADER] = {
  doc: 'Token header name that contain auth token',
  default: Constants.TOKEN_HEADER,
  format: String,
};

export default AuthConfig;
