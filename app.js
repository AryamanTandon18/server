import express from 'express';
import userRouter from'./routes/user.js'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';
import {router} from './routes/task.js'
import { errorMiddleWare } from './middleWares/error.js';
export const app = express();
import cors from 'cors'

config({
    path:"./data/config.env",
});

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.frontend_uri],
    method:["GET",'POST','PUT','DELETE'],
    credentials:true,
}))

app.use("/users",userRouter);
app.use("/task",router);

app.get("/",(req,res)=>{
    res.send("Nice Working"); 
})

app.use(errorMiddleWare);







// put the dynamic route at the last bcoz JS(express) code is executed from top to bottom 
// /users/:id  is a dynamic url
// /users/asdf  here id is asdf
// console.log(req.params)  -> {id : 'asdf'}

//  app.get("/userid",async(req,res)=>{
//     const {id} = req.query;
//     const user = await Users.findById(id);
//     res.json({
//         success:"True",
//         user
//     })
// })
