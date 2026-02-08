import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if(userExists){
            return res.status(400).json({ message: 'User already Exists' });
        }

        const user = await User.create({ name, email, password });
        
        res.status(201).json({
            message: 'User registered successfully',
            token: generateToken(user._id),
            user,
        });
    }catch(error){
        res.status(500).json({ message: "Server Error" })
    }
};


export const loginUser = async(req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(user && (await user.matchPassword(password))){
            res.json({
                message: "login successful",
                token: generateToken(user._id),
                user,
            });
        }else{
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
}