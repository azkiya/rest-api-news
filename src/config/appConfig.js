import * as Constants from './constants';

const AppConfig = {};

AppConfig[Constants.CONFIG_APP_NAME] = {
  doc: 'Application name identifier, mostly will be used for logging',
  default: 'news-api',
  format: String,
};

AppConfig[Constants.CONFIG_ENV] = {
  doc: 'Environment running on, this will load specific configuration under `environment/environment-name.json`',
  default: 'development',
  format: ['production', 'development'],
};

AppConfig[Constants.CONFIG_DEBUG] = {
  doc: 'Turn debugging on/off',
  default: true,
  format: Boolean,
};

export default AppConfig;
