"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/prisma";
import { error } from "console";

export  async function p2ptransfer(to : string , amount : number) {

    const session = await getServerSession(authOptions);
    const from = session?.user?.id;


    if(!from){
        return {
            message :'Not logged In/ error while in sending '
        }
    }

    const toUser = await prisma.user.findFirst({
        where:{
            number : to 
        }
    })


    if(!toUser){
        return {
            message : 'User not found '
        }
}
    prisma?.$transaction( async(tx)=>{

        const userBalance = await tx.balance.findUnique({
            where:{
                userId : Number(from)
            },
            
        })

        if(!userBalance  || userBalance.amount < amount){
            throw new Error('Insufficient balance')
        }
        console.log('transaction started')



           await tx.balance.update({
            where: { userId: Number(from) },
            data: { amount: { decrement: amount } },
          });

          await tx.balance.update({
            where: { userId: toUser.id },
            data: { amount: { increment: amount } },
          });
        console.log('transaction ended')


    })
}