import mongoose from 'mongoose';
import Topic from './topic';
import User from './user';



const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: [{ type : ObjectId, ref: 'User' }],
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
  topic: [{ type : ObjectId, ref : 'Topic' }]
});

module.exports = mongoose.model('News', NewsSchema);