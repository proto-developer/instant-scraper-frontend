import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      access_token?: string; // Add the access token
      status?: number | string; // Add the status
    };
  }

  interface User {
    status?: number; // Add status to the user object
    token?: string; // Add token to the user object
  }


  interface JWT {
    access_token?: string; // Add the access token to JWT
    status?: number | string; // Add the status to JWT
  }
}
