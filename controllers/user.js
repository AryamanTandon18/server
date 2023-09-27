import { Users } from "../models/user.js"
import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { sendCookie } from "../utils/features.js";

export const register = async(req,res,next)=>{
   try {
    const {name,email,password} = req.body;
    let user = await Users.findOne({email})
  
    if(user){
      return res.status(404).json({
        message:"User already exist",
        success: false,
      })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    user = await Users.create({name,email,password:hashedPassword});
 
   sendCookie(res,user,"Registered Successfully")
   } catch (error) {
    next(error)
   }

}

export const Login = async(req,res,next)=>{
 try {
  const {email,password} = req.body;
  let user = await Users.findOne({email}).select("+password");

  if(!user){
    return res.status(404).json({
      success:false,
      message: "User does not exist ",
    })
  }
  const isMatch= await bcrypt.compare(password,user.password);
  if(!isMatch){
    return res.status(404).json({
    success:false,
    message: "invalid password or email"})
  };
  sendCookie(res,user,`Welcome Back, ${user.name}`)
  
 } catch (error) {
  next(error)
 }
};
export const getMyProfile = (req,res)=>{
   res.status(201).json({
        success : true,
        user:req.user,
    })
};
export const logout = (req,res) => {
    res.status(200).cookie("Token","",{
      expires: new Date(Date.now()),
      sameSite: process.env.node_env === "Develpoment" ? "lax" : "none",
      secure: process.env.node_env === "Develpoment" ? false : true,          
 })
    .json({
      success:true,
      user:req.user,
      message:"Logged out successfully",
    })
}
 

// console.log(req.params);