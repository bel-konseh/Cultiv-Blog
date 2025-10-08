
import supabase from "../config/supabase.config.js";

export async function createNewComment(req, res){

    const {article_id, text} = req.body

    if(!article_id || !text.trim()){
        return res.status(400).json({
            success:false,
            message: `Please ensure that an article Id and a text for the comment have been provided`
        })

    }
    try{
        const {data,error} = await supabase.from("comments")
                                         .insert({"article_id": article_id, "text": text, "user_id": req.user.id})
                                         .select()
                                         .single()

        if(error){
            return res.status(500).json({
              success:false,
              message: error.message      
            })
        }

        return res.status(201).json({
            success:true,
            comment: data 
        })

        }catch(error){
            return res.status(500).json({
              success:false,
              message: error.message      
            })
        }

}

export async function getPostComments(req, res){

    const {article_id} = req.params;

    if(!article_id){
        return res.status(400).json({
            success:false,
            message: `Cannot get article ID ${article_id}`
        })
    }
    try {
        
        const {data,error} = await supabase.from('comments').select().eq("article_id", article_id);

        if(error){
            return res.status(500).json({
              success:false,
              message: error.message      
            })
        }

        return res.status(200).json({comments: data});
    } catch (error) {
       return res.status(500).json({
           success:false,
           message: error.message
       }) 
    }

}


export async function updateComment(req, res){

    const {comment_id} = req.params;
    const {text} = req.body;

    if(!comment_id){
        return res.status(400).json({
            success:false,
            message: `Cannot get comment ID ${comment_id}`
        })
    }
    try {
        
        const {data,error} = await supabase.from('comments').update({"text": text}).eq("comment_id", comment_id).select();

        if(error){
            return res.status(500).json({
              success:false,
              message: error.message      
            })
        }

        return res.status(200).json({comments: data});
    } catch (error) {
       return res.status(500).json({
           success:false,
           message: error.message
       })
    }
}

export async function deleteComment(req, res){

    const {comment_id} = req.params;

    if(!comment_id){
        return res.status(400).json({
            success:false,
            message: `Cannot get comment ID ${comment_id}`
        })
    }
    try {
        
        const {data,error} =await supabase.from('comments').delete().eq("comment_id", comment_id).select();

        if(error){
            return res.status(500).json({
              success:false,
              message: error.message      
            })
        }

        return res.status(200).json({comments: data});
    } catch (error) {
       return res.status(500).json({
           success:false,
           message: error.message
       })
    }
}