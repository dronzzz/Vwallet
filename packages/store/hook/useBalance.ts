"use client" ;
import { useRecoilValue } from "recoil"
import { balanceAtom } from "../src/balance";



export const useBalance = () =>{
    const value = useRecoilValue(balanceAtom);
    return value;
}
