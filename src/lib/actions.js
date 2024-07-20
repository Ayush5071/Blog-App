"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt  from "bcryptjs"
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
        return {error : "Something went wrong"};        
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

  export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
export const login = async(formData) => {
    const {username,password} = Object.fromEntries(formData);
    try {
        await signIn("credentials",{username,password})
    } catch (error) {
        console.log(error);
        return{error: "something went wrong"};
        
    }
}