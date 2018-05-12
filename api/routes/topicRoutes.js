module.exports = function(app) {
  var topic = require('../controllers/topicController');


  // topic Routes
  app.route('/topics')
    .get(topic.list)
    .post(topic.create);


  app.route('/topics/:topicId')
    .get(topic.show)
    .put(topic.update)
    .delete(topic.removeById);
};