const Redis = require("redis");
const rb = require("./src/config/rabbitmq.config");

// Connect redis
const client = Redis.createClient({ url: "redis://localhost:6000" });
client
	.connect()
	.then(() => {
		console.log("Redis connected");
	})
	.catch((error) => {
		console.log("Redis Error:", error.message);
	});

// Receive message and update db
rb.receiveMessage("CommentUpdate", async (msg) => {
	const comments = JSON.parse(msg);
	console.log("Total comment::::::: ", comments.length);
	await client.setEx("comments", 3600, msg);
});
