import NextAuth, { NextAuthOptions } from "next-auth"; // Use NextAuthOptions
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      console.log("IN SIGN IN: \n");
      if (account?.provider === "google") {
        console.log("Provide Google True: \n");

        try {
          console.log("Trying api fetch: \n");

          const res = await fetch("http://74.50.88.184:8002/api/users/google-auth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id_token: account.id_token,
            }),
          });
          console.log("Google Auth Res:", res);
          if (res.ok) {
            const data = await res.json();
            console.log("response:", data);

            if (res.status === 200) {
              user.status = res.status;
              user.token = data?.token;
              return true;
            } else {
              console.error("Google sign-in failed:", data.message);
              return false;
            }
          } else {
            console.error("Backend API error:", res.status);
            return false;
          }
        } catch (error) {
          console.log("Error \n");

          console.error("Error in sign-in callback:", error);
          return false;
        }
      }

      return true; // Allow sign-in for both Google and email/password
    },

    async jwt({ token, user }) {
      console.log("User in JWT callback:", user);

      // If this is the initial sign-in, store the user data and token in the JWT
      if (user) {
        token.status = user.status || "unknown"; // Store the status
        token.access_token = user.token || user.token; // Store the access token
      }

      return token;
    },

    async session({ session, token }) {
      console.log("Token in session callback:", token);
    
      // Ensure that token.access_token is a valid string
      if (typeof token?.access_token === 'string') {
        session.user.access_token = token.access_token; // Attach the access token
      } else {
        session.user.access_token = ""; // Provide a default empty string if not a valid string
      }
    
      // Ensure that token.status is either a string or provide a default
      session.user.status = typeof token?.status === 'string' ? token.status : "unknown"; // Attach user status
    
      return session; // Return the session object (which is expected by NextAuth)
    }
    
  },
};

const handler = NextAuth(authOptions); // This is the handler

export { handler as GET, handler as POST }; // Export the handler for GET and POST requests
