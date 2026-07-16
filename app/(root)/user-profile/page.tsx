"use client"
import { authClient } from "@/lib/auth-client";

const UserProfile = () => {
  console.log("We are hitting the User Profile page");

  const {data: session, isPending: loading} = authClient.useSession();

  if(loading) {
    return <p>Loading...</p>
  }

  if(!session) {
    return <p>No active session...</p>
  }

  const { user } = session;

  return (
    <div>
     <p>UserProfile</p>
     <p>UserName: {user.name}</p>
     <p>Email: {user.email}</p>
    </div>
  )
}

export default UserProfile 