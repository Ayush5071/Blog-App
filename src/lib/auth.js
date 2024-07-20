import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs"

const login = async(credentials) => {
    try {
        connectToDb();
        const user = await User.findOne({username: credentials.username});    
        console.log("ye wala user aya kya ???M",user)
        if(!user){
            throw new Error("user not found")
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
        console.log(isPasswordCorrect, "dekho correct h ya nhi ")

        if(!isPasswordCorrect) throw new Error("Wrong CRedentials")
        return user;

    } catch (error) {
        console.log(error)        
        throw new Error("failed to login")
    }
}

export const { handlers:{GET,POST}, auth , signIn , signOut } = NextAuth({ 
    providers: [ 
        GitHub({
            clientId: process.env.GITHUB_ID , clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials);
                    console.log("user to aagya",user)
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks:{
        async signIn({user,account,profile}){
            // console.log(profile);
            if(account.provider == "github"){
                connectToDb();
                try {
                    const user = await User.findOne({email:profile.email});
                    if(!user){
                        const newuser = new User({
                            username:profile.login,
                            email:profile.email,
                            image:profile.avatar_url,
                        });
                        await newuser.save();
                    }
                } catch (error) {
                    console.log(error);
                    throw new Error("Something went wrong while validating the github user in Database");                    
                }
            }
            return true;
        }
    }
});
