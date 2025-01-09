"use client"
import {useBalance} from "@repo/store/useBalance"
import { Appbar } from "@repo/ui/appbar";

import { signIn, signOut, useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";



export default function Home() {
  const balance = useBalance();
  const session = useSession();

  
  return (
    <>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />

       
    <div className="text-green-400">

      hi there {String(balance)}
            
    </div>
    </>
  );
}
