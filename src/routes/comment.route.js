const express = require("express");
const route = express.Router();
const CommentController = require("../controllers/comment.controller");
const CommentMiddleware = require("../middlewares/comment.middleware");

route.get("/comments", CommentMiddleware.checkCache, CommentController.all);

route.post("/comments", CommentController.add);
module.exports = route;
