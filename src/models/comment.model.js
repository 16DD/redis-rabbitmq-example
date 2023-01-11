const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	postId: {
		type: Number,
		require,
	},
	id: {
		type: Number,
		require,
	},
	name: {
		type: String,
		require,
	},
	email: {
		type: String,
		require,
	},
	body: {
		type: String,
		require,
	},
});

module.exports = mongoose.model("comments", CommentSchema);
