
import './Comment.css'

import React from 'react'

const Comment = ({comment_author, comment_text}) => {
  return (
    <div id='div'>
        <p id='commenter'>{comment_author?comment_author:"user"}</p>  
        <p id='comment'>{comment_text}</p>
        
    </div>
  )
}

export default Comment