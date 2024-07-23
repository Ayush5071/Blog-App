export const authConfig = {
    pages:{
        signIn: "/login"
    },
    providers:[],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user.id;
                token.isAdmin = user.isAdmin;   
            }
            return token;
        },
        async session ({session,token}){
          if(token){
            session.user.id = token.id;
            session.user.isAdmin = token.isAdmin
          }  
          return session;
        },
        authorized({auth,request}){
            // console.log(auth);

            const user = auth?.user;
            const isAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPanel = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPanel = request.nextUrl?.pathname.startsWith("/login");

            //only admin can feach the admin page 
            if(isAdminPanel && !user?.isAdmin){
                return false;
            }
            //only authorized user can reach blog page 
            if(isOnBlogPanel && !user) return false;

            //only authentiacted user can reach login page
            if(isOnLoginPanel && user){
                return Response.redirect(new URL("/",request.nextUrl));
            }
        }
    }                
};