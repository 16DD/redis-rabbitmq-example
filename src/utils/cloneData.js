require("isomorphic-fetch");
const Comment = require("../models/comment.model");
const connectDB = require("../config/db.config");

const makeDataComment = async () => {
	comments = await fetch("https://jsonplaceholder.typicode.com/comments").then((response) => response.json());

	for (i in comments) {
		const data = comments[i];
		const cmt = new Comment({
			postId: data.postId,
			id: data.id,
			name: data.name,
			email: data.email,
			body: data.body,
		});
		await cmt.save();
		i === 499 ? process.exit : "";
	}
};

connectDB();
makeDataComment();
