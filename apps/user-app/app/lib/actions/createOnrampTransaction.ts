"use server"

import prisma from "@repo/db/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"


export async function createOnrampTransaction(provider : string , amount : number) {
    console.log('requested to createOnrampTransactions')
    const token = (Math.random() * 1000).toString();
const session = await getServerSession(authOptions);
if (!session?.user || !session.user?.id) {
    return {
        message: "Unauthenticated request"
    }
}

console.log("session",session)

    await prisma.onRampTransaction.create({    
        data:{
            provider,
            status : "Processing",
            startTime : new Date(),
            amount,
            token,
            userId: Number(session?.user?.id) 
        }   
    });
    return {
        message: "Done"
    }
    
}