const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const redis = require("./config/redis.config");
const route = express.Router();
const RouteComment = require("./routes/comment.route");
const connectDB = require("./config/db.config");
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
connectDB();
redis.connect();

app.use("/", RouteComment);

app.use(route);
app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
