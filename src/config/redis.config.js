const Redis = require("redis");

class RedisClient {
	constructor() {
		this.client = null;
	}

	connect() {
		try {
			this.client = Redis.createClient({ url: process.env.REDIS_URL });
			this.client
				.connect()
				.then(() => {
					console.log("Redis connected");
				})
				.catch((error) => {
					console.log("Redis Error:", error.message);
				});

			this.client.on("error", () => console.log("Redis error"));
			return this.client;
		} catch (error) {
			console.log(error.message);
		}
	}
}

module.exports = new RedisClient();
