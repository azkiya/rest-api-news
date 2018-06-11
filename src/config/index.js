import convict from 'convict';
import _ from 'lodash';
import AppConfig from './appConfig';
import AuthConfig from './authConfig';

const config = convict(_.extend(AppConfig, AuthConfig));
const env = process.env.NODE_ENV || 'development';
const configFiles = [`${__dirname}/environment/${env}.json`];



config.loadFile(configFiles);
config.validate({ allowed: 'strict' });

export default config;
