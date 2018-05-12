var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema ({
	_id : Schema.Types.ObjectId,
	name: String
});

module.exports = mongoose.model('Topic', TopicSchema);
