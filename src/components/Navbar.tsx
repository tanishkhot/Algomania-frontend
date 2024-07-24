import React from 'react'
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';


const Navbar = () => {
  return (
  
      <div className="flex bg-black items-center px-5 justify-between w-full h-16">
      <h1 className="text-white text-2xl font-bold">AlgoMania</h1>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h1 className="text-white text-xl">Home</h1>
        </Link>
        <Link href="/profile">
          <CgProfile size={35} className="text-white" />
        </Link>
      </div>
    </div>
  
  )
}

export default Navbar
