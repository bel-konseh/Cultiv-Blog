import supabase from "../config/supabase-config.js";

export const isLoggedInMiddleware = async (req, res, next) => {

    const authHeader = req.headers['authorization'] || req.headers.authorization;

    if( !authHeader || !authHeader.startsWith("Bearer ")){

        return res.status(401).json({ error: "Unauthorized: no valid token provided" });
    }
    const token = authHeader.split(" ")[1];

    const {data,error}= await supabase.auth.getUser(token);

    if(error){
        return res.status(401).json({ error: "Unauthorized: invalid token" });
    }
    req.user = data.user;
    next();
}