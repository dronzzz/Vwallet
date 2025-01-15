import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/prisma"
import { OnRampTransactions } from "../../../components/OnRampTransaction";
async function getp2pTransactions(){
    console.log('called')
    const session = await getServerSession(authOptions)

    const txns = await prisma.p2pTransfer.findMany({
        where:{
            fromUserId : Number(session?.user?.id)
        }
    })
    
    return txns.map(t => ({
        time:t.timestamp,
        amount:t.amount,
        status:"received",
        provider:"wallet",

    }))
}

export default function() {
    const transactions = getp2pTransactions()
    return <div className="w-full ">
        <SendCard />
        <OnRampTransactions transactions = {transactions} />  
        {/* todo a seperate component  */}
    </div>
}