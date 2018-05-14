const mongoose = require('mongoose');

Topic = mongoose.model('Topic');

exports.list = () => async(req, res) => {
  try{
    const topicData = await Topic.find();
    return res.json(topicData);
  } catch(err){
    return res.send(err);
  }
};

exports.create = () => async(req, res) => {
  try{
    const createTopic = await new Topic(req.body);
    createTopic.save(() => {
      res.json(createTopic);
    });

  } catch(err){
    return res.send(err);
  }
};

exports.show = () => async(req, res) => {
  try{
    const topicData = await Topic.findById(req.params.topicId);
    return res.json(topicData);
  } catch(err){
    return res.send(err);
  }
};

exports.update = () => async(req, res) => {
  try{
    const topicData = await Topic.findOneAndUpdate({_id: req.params.topicId}, req.body, {new: true});
    return res.json(topicData);
  } catch(err) {
    return res.send(err)
  }
};

exports.removeById = () => async(req, res) => {
  try{
    const topicData = await Topic.remove({ _id: req.params.topicId });

    return res.json({ message: 'Topic successfully deleted' });
  } catch(err){
    return res.send(err);
  }
};

