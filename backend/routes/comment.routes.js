import express from 'express';
import { createNewComment, getPostComments, updateComment, deleteComment } from '../controllers/comment.controller.js';

const commentRouter = express.Router()

commentRouter.get("/:article_id", getPostComments);
commentRouter.post("", createNewComment);
commentRouter.put("/:comment_id", updateComment);
commentRouter.delete("/:comment_id", deleteComment);





export default commentRouter