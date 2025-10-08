
import express from 'express'
import postRouter from './routes/post.routes.js'
import commentRouter from './routes/comment.routes.js'
import authRouter from './routes/auth.routes.js';
import cors from 'cors';


 const server = express();
 const PORT = process.env.PORT || 8000
server.use(cors());
server.use(express.json());


server.use("/api/posts/", postRouter);
server.use("/api/auth/", authRouter);

server.use("/api/comments/", commentRouter);



 server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
 })