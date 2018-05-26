
module.exports = function(app) {
  const user = require('../controller/user');

  // resigter new user Routes
  app.route('/register')
    .post(user.create());

  // login user Routes
  app.route('/login')
    .post(user.authenticate());

};