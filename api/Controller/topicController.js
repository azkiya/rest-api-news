var mongoose = require('mongoose'),
  Topic = mongoose.model('Topic');

exports.list = function(req, res) {
  Topic.find({}, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};




exports.create = function(req, res) {
  var createTopic = new Topic(req.body);
  createTopic.save(function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};


exports.show = function(req, res) {
  Topic.findById(req.params.topicId, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};


exports.update = function(req, res) {
  Topic.findOneAndUpdate({_id: req.params.topicId}, req.body, {new: true}, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};


exports.removeById = function(req, res) {
  Topic.remove({
    _id: req.params.topicId
  }, function(err, topic) {
    if (err)
      res.send(err);
    res.json({ message: 'Topic successfully deleted' });
  });
};

