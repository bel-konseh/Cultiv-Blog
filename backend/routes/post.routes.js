
import express from 'express'
import { createNewBlogPost, deleteBlogPost, getBlogPosts, updateBlogpost } from '../controllers/blogpost.controller.js'

const postRouter = express.Router()

postRouter.get("", getBlogPosts);
postRouter.post("", createNewBlogPost);
postRouter.put("/:id", updateBlogpost)
postRouter.delete("/:id", deleteBlogPost);


export default postRouter