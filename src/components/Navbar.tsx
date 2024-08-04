import React from 'react'
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';


const Navbar = () => {
  return (
  
      <div className="flex items-center px-5 justify-between w-full h-16">
      <Link href="/">
      <h1 className="text-white text-2xl font-bold">AlgoMania</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h1 className="text-white text-xl">Home</h1>
        </Link>
        <Link href="/team">
          <h1 className="text-white text-xl">Team</h1>
        </Link>
        <Link href="/admin">
          <h1 className="text-white text-xl">Admin</h1>
        </Link>
        <Link href="/signup">
          <h1 className='text-white text-xl'>Sign In</h1>
        </Link>
        <Link href="/dashboard">
          <CgProfile size={35} className="text-white" />
        </Link>
      </div>
    </div>
  
  )
}

export default Navbar
