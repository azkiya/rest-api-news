module.exports = function(app) {
  var news = require('../controllers/newsController');

  // news Routes
  app.route('/news')
    .get(news.list)
    .post(news.create);


  app.route('/news/:newsId')
    .get(news.show)
    .put(news.update)
    .delete(news.removeById);
};