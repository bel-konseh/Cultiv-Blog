
import express from 'express'
import { createNewBlogPost, deleteBlogPost, getBlogPosts, getPostById, updateBlogpost } from '../controllers/blogpost.controller.js'

const postRouter = express.Router()

postRouter.get("", getBlogPosts);
postRouter.get("/:articleId", getPostById)
postRouter.post("", createNewBlogPost);
postRouter.put("/:id", updateBlogpost)
postRouter.delete("/:id", deleteBlogPost);


export default postRouter