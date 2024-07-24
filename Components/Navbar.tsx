import React, { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import Link
 from "next/link";
export default function Navbar(){
    return(
        <div className="flex bg-black items-center px-5 justify-between w-full">
            <h1 className="text-white">AlgoMania</h1>
            <div className="flex items-center">
            <Link href='/'>
                <h1 className="text-white text-xl">  
                    Home
                </h1>   
            </Link>
            <Link href='/profile'>
                <CgProfile size={35} className="text-white"/>
            </Link>     
            </div>
        </div>
    )
}