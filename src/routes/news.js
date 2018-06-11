import news from '../controller/news';
import { protect } from '../middleware/authMiddleware';

module.exports = function(app) {

  // news Routes
  app.route('/news')
    .get(news.list())
    .post(protect, news.create());


  app.route('/news/:newsId')
    .get(news.show())
    .put(protect, news.update())
    .delete(protect, news.removeById());

  app.route('/news/topic/:topicId')
    .get(news.findByTopic());

  app.route('/news/status/:statusNews')
    .get(news.findByStatus());
};