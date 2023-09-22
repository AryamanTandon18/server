import jwt from 'jsonwebtoken';

export const sendCookie=(res,user,message)=>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

    res.status(200).cookie("Token" ,token ,{
        httpOnly:true,
        maxAge:15*60*1000,
        sameSite: process.env.node_env ==="Development"?"lax": "none",               
        secure:process.env.node_env ==="Development"? false: true,           
    }).json({
        sucess:true,
        message,    
    })
};

 //bcoz our server and frontend runs on different URI
   //sameSite :"none" requires secure:true