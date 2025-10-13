import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from 'react'
import './BlogPost.css'
import AddComment from "../../components/AddComment/AddComment";
import Comment from "../../components/Comment/Comment";

function BlogPost() {
  const  API_URL = 'https://cultiv-blog-backend.onrender.com/api'
  const [article,setArticle] = useState({})
  const [comments,setComments] = useState([])
  const [loadingArticle,setLoadingArticle] = useState(false)
  const [loadingComments,setLoadingComments] = useState(false)
  const { articleId } = useParams();
  const fetchArticle = async ()=>{
    setLoadingArticle(true)
      try {
        const response = await fetch(`${API_URL}/posts/${articleId}`);
        const data = await response.json()
        setArticle(data.article)
      } catch (error) {
       console.error(error) 
      }finally{
        setLoadingArticle(false)
      }
  }
  const fetchComments = async ()=>{
    setLoadingComments(true)
      try {
        const response = await fetch(`${API_URL}/comments/${articleId}`);
        const data = await response.json()
        setComments(data.comments)
        // console.log(data)
      } catch (error) {
       console.error(error) 
      }finally{
        setLoadingComments(false)
      }
  }
  
  useEffect(() => {
    fetchArticle()
    fetchComments()
  }, [])
  return (
    <>
      <div className="blog-post-container">
      {loadingArticle ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div >
          <p>Written by : {article.author_name?article.author_name:"user"}</p>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <img src={article.image_url} className="article-image" alt={article.title} />

         
        </div>
      )}


          {
      loadingComments ? (
        <p className="loading-text">Loading comments...</p>
      ) : (
        <div>
          <h2>Comments</h2>
           <AddComment articleId={articleId} /> 
            {comments.map((comment) => (
              <div key={comment.comment_id}>
                 <Comment key={comment.comment_id} comment_author={comment.author_name} comment_text={comment.text} />
              </div>
            ))}
           
        </div>
      )
    }
    </div>

    </>
    
  )
}

export default BlogPost