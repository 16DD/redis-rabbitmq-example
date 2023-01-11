const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const { MONGO_URL } = process.env;

function connectDB() {
	mongoose
		.connect(MONGO_URL, { useNewUrlParser: true })
		.then(() => {
			console.log(`Database connected `);
		})
		.catch((error) => {
			console.log("errorDB: ", error.message);
		});
}
module.exports = connectDB;
