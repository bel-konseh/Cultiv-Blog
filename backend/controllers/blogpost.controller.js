import supabase from "../config/supabase.config.js";

export async function createNewBlogPost(req, res){
   
    const {title,body, articleImgUrl} = req.body;

    if(title.trim().length===0 || body.trim().length===0 || articleImgUrl.trim().length === 0){
        return res.status(400).json({
            success:false,
            message: `Please fill out all fields`,
        });
    }
    const blogPost = {
        title: title.trim(),
        body: body.trim(),
        image_url: articleImgUrl.trim(),
        author_id: req.user.id
    }

    const {data,error} = await supabase.from("articles").insert([{...blogPost}]).select().single();

    if(error){
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ blogPost: data });
}

export async function getBlogPosts(req, res){

    try {

        const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });
    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ blogPosts: data });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
        
}


export async function updateBlogpost(req, res){


    const { id } = req.params;
    const { title, body, articleImgUrl } = req.body;

    if (!id || !title?.trim() || !body?.trim() || !articleImgUrl?.trim()) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const updates = {
        title: title.trim(),
        body: body.trim(),
        image_url: articleImgUrl.trim(),
    };

    try {
        const { data, error } = await supabase
            .from("articles")
            .update(updates)
            .eq("article_id", id)
            .eq("author_id", req.user.id)
            .select()
            .single();

        if (error) throw error;

        return res.status(200).json({ updatedPost: data });
    } catch (error) {
        console.error("Update blog post error:", error);
        return res.status(500).json({ error: error.message });
    }

}

export async function deleteBlogPost(req, res){

    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Missing blog post ID." });
    }

    try {
        const { error } = await supabase
            .from("articles")
            .delete()
            .eq("article_id", id)
            .eq("author_id", req.user.id);

        if(error){
        console.log(error);
        return res.status(500).json({ error: error.message });
    }

        return res.status(200).json({ message: "Blog post deleted successfully." });
    } catch (error) {
        console.error("Delete blog post error:", error);
        return res.status(500).json({ error: error.message });
    }

}