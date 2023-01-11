const CommentService = require("../services/comment.service");
const redis = require("../config/redis.config");
const rb = require("../config/rabbitmq.config");

module.exports = {
	all: async (req, res, next) => {
		try {
			//--Get commnents
			const result = await CommentService.allComment();
			//--Add redis
			await redis.client.setEx("comments", 3600, JSON.stringify(result));
			return res.send({ status: "success", data: result });
		} catch (error) {
			next(error);
		}
	},
	add: async (req, res, next) => {
		try {
			//--Add comment
			const data = { ...req.body };
			const result = await CommentService.addComment(data);
			//--Update redis
			const commnents = await CommentService.allComment();
			await rb.sendMessage("CommentUpdate", JSON.stringify(commnents));

			return res.send({ data: result });
		} catch (error) {
			next(error);
		}
	},
};
