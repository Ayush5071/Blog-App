"use server"
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async(formData) =>{
    "use server";
    // const title = data.get("title")
    // const desc = data.get("desc")
    // const slug = data.get("slug")
    // const userId = data.get("userId")

    const {title,desc,slug,userId} = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        revalidatePath('/blog');
        console.log("post saved  to Db") ;    
    } catch (error) {
        console.log(error);
        throw new Error("Something Went wrong")        
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn('github');
  }
export const handleLogout = async () => {
    "use server"
    await signOut();
  }