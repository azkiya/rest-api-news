const mongoose = require('mongoose');
const Topic = require('./topicModel.js');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: String,
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['draft', 'deleted', 'publish']
    }],
    default: ['draft']
  },
  topic: [{type : mongoose.Schema.ObjectId, ref : 'Topic'}]
});

module.exports = mongoose.model('News', NewsSchema);