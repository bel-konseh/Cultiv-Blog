import { useState } from 'react'

import './AddComment.css'

const AddComment = ({articleId}) => {
    const BASE_URL = "https://cultiv-blog-backend.onrender.com/api"
    const [comment,setComment] = useState("");
    const postNewComment = async(articleId)=>{
        const token = localStorage.getItem("token");
        if(!comment.trim()){
            return
        }
        try {
            const response = await fetch(`${BASE_URL}/comments`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    article_id: articleId,
                    text: comment,
                })
            })
            const data = await response.json()
            // console.log(data)
        } catch (error) {
            console.error(error)
        }finally{
            setComment("")
        }
    }
  return (
    <div className='add-comment-container'>
        <input className="add-comment-input" type="text" name="comment" value={comment} placeholder='Type your comment in here' onChange={(e)=>setComment(e.target.value)} id="" />
        <button className='add-comment-button' onClick={()=>postNewComment(articleId)}>Add Comment</button>
    </div>
  )
}

export default AddComment