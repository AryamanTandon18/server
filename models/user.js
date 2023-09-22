import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
     },
     email: {
         type: String,
         unique: true,
         required: true,
     },
     password: {
         type: String,
         select: false,
         required: true,    
     },
     createdAt:{
         type:Date,
         deafault: Date.now,
     },
    
})
export const Users = mongoose.model("user",schema);

