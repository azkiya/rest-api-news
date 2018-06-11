import mongoose from 'mongoose';

const News = mongoose.model('News');
const User = mongoose.model('User');


exports.list =  () => async(req, res) => {
  try{

    const newsData = await News.find({}).exec();

    return res.json(newsData);

  } catch(err){
    return res.send(err);
  }
  
};

exports.findByTopic = () => async(req, res) => {
  try {
    const newsData = await News.find({ topic : req.params.topicId }).populate('topic').exec();

    return res.json(newsData);
  } catch(err){
    return res.send(err);
  }

};

exports.findByStatus = () => async(req, res) => {
  try{
    const status = await req.params.statusNews;
    const newsData = await News.find({ status : {$in: status }}).populate('topic').exec();

    return res.json(newsData);
  } catch(err){

    return res.send(err);
  }
};

exports.create = () => async(req, res) => {
  const author = await User.findById(req.session.userId);
  const topics = await req.body.topics;
  const createNews = await new News(req.body);

  topics.forEach((topic) => {
    createNews.topic.push(topic);
  });
  createNews.author.push(author);
  try{
    createNews.save(() => {
      res.json(createNews)
    });
  }catch(err){

    return res.send(err);
  }
};


exports.show = () => async(req, res) => {
  const newsData = await News.findById(req.params.newsId)
  try{
    return res.json(newsData);
  } catch(err){
    return res.send(err);
  }
};


exports.update = () => async(req, res) => {
  const newsData =  await News.findOneAndUpdate({ _id: req.params.newsId }, req.body, { new: true })
  try{
    return res.json(newsData);
  } catch(err){
    return res.send(err);
  }
};


exports.removeById = () => async(req, res) => {
  try{
    const newsData = await News.remove({ _id: req.params.newsId });
     
    res.json({ message: 'News successfully deleted' });

  } catch(err){
    return res.send(err);
  }
};

