var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Topic = mongoose.model('Topic', topicSchema);

var NewsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: 'filled the title'
  },
  content: {
    type: String,
    required: 'filled the content'
  },
  author: type: String,
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