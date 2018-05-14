module.exports = function(app) {
  var news = require('../controller/newsController');

  // news Routes
  app.route('/news')
    .get(news.list())
    .post(news.create());


  app.route('/news/:newsId')
    .get(news.show())
    .put(news.update())
    .delete(news.removeById());

  app.route('/news/topic/:topicId')
    .get(news.findByTopic());

  app.route('/news/status/:statusNews')
    .get(news.findByStatus());
};