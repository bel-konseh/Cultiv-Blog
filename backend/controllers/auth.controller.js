
import supabase from "../config/supabase.config.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ session: data.session });
}

export const signUpUser = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(201).json({user: data.user });
}