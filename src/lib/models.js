import mongoose, {  model, models, Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,

    },
    img:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true,
});

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String
    },
    userId:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true
})

export const User = models?.User || model("User",userSchema);
export const Post = models?.Post || model("Post",postSchema);
