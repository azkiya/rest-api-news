import { protect } from '../middleware/authMiddleware';
import topic from '../controller/topic';

module.exports = function(app) {

  // topic Routes
  app.route('/topics')
    .get(topic.list())
    .post(protect, topic.create());


  app.route('/topics/:topicId')
    .get(topic.show())
    .put(protect, topic.update())
    .delete(protect, topic.removeById());
};