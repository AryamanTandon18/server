import { Users } from "../models/user.js";
import jwt from 'jsonwebtoken';
 
export const isAuthenticated = async(req,res,next)=>{
    const { Token } = req.cookies;
    // console.log(Token);
    if(!Token){
        return res.status(404).json({
            success:false,
            message: "Login First",
          })
    }

    const decoded = jwt.verify(Token,process.env.JWT_SECRET);

    req.user = await Users.findById(decoded._id);
    next();
}