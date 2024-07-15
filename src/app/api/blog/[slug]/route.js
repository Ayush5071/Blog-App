/* eslint-disable no-unused-vars */
import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async(request,{params}) =>{
    try {
        connectToDb();
        const {slug} = params;
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error)        
        throw new Error("falied to fetch posts info")
    }
}