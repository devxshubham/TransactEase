"use client"
import { useRouter } from "next/navigation";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react"

export function Appbarclient (){
    const router = useRouter()
    const session = useSession();
    return <div>
        <Appbar onSignin={signIn} onSignout={async()=>{
            await signOut();
            router.push('api/auth/signin')

        }} user={session.data?.user}></Appbar>
    </div>
}