import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {handlers,signIn,signOut , auth}=NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        

        }
    )
    ],
})
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// // Default export the NextAuth function
// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID, // Ensure this is correct
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Ensure this is correct
//       scope: "openid profile email", // Ensure these are the correct scopes
//       authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth", // Authorization URL
//     }),
//   ],
//   secret: process.env.AUTH_SECRET, // Optional, but useful for session management
//   pages: {
//     signIn: '/auth/signin', // Custom sign-in page if you need it
//     error: '/auth/error',   // Error page if authentication fails
//     // Additional pages can be added as needed
//   },
//   debug: true, // Enable debugging to help track down errors during development
// });
