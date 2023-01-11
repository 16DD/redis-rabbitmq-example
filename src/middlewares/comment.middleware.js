const redis = require("../config/redis.config");

module.exports = {
	checkCache: async (req, res, next) => {
		try {
			const value = await redis.client.get("comments");
			if (value) {
				return res.send({ data: JSON.parse(value) });
			}
			next();
		} catch (error) {
			next(error);
		}
	},
};
