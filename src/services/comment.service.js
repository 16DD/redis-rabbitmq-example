const Comment = require("../models/comment.model");
require("isomorphic-fetch");

module.exports = {
	allComment: async () => {
		const resp = await Comment.find({});
		return resp;
	},
	addComment: async (data) => {
		const cmt = new Comment(data);
		const newCmt = await cmt.save();
		return newCmt;
	},
};
