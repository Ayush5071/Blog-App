// t5emporary data 
import { unstable_noStore } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import {unstable_noStore as noStore} from "next/cache";

// const users = [
//     {id:1,name:'One'},
//     {id:2,name:'two'},
// ];

// const posts = [
//     {id:1,title:"Post 1",body:".......",userId:1},
//     {id:2,title:"Post 2",body:".......",userId:2},
//     {id:3,title:"Post 3",body:".......",userId:2},
//     {id:4,title:"Post 4",body:".......",userId:2},
// ];
// const mongoUri = "mongodb+srv://ayusht5071:Ayush123@blogapp.ddpi4hy.mongodb.net/"

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("UNable to fetch Post data");    
    }
}
export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("UNable to fetch Post data");    
    }
}

export const getUsers = async()=>{
try {
        connectToDb();
        const users = await User.find();
        return users;
} catch (error) {
    throw new Error('Error finding the user by Id')    
}
}
export const getUser = async(id)=>{
    noStore();
try {
        connectToDb();
        const user = await User.findById(id);
        return user;
} catch (error) {
    throw new Error('Error finding the user by Id')    
}
}

