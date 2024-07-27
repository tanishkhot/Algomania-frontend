import React from 'react'

const GrpInfoCard = () => {
  return (
    <div className='w-full h-full bg-gray-500/30 backdrop-blur-xl rounded-3xl flex flex-col px-5 py-3 border border-gray-100/20 shadow-lg'>
      <div className='w-full flex h-1/4 text-white justify-between items-center'>
        <div className='flex items-center justify-between w-1/3'>
            <h1 className='text-sm font-light'>Team</h1>
            <h1 className='text-2xl'>Proxy</h1>
        </div>
        <h1 className='text-2xl'>#9</h1>
      </div>
      <div>
        <h1 className='text-white text-2xl'> Members </h1>
      </div>
      <div className='text-white'>
        <ul className='h-20 overflow-y-auto no-scroll'>
            <li>Devashish Bhirdi (150)</li>
            <li>Atharva Dhake (120)</li>
            <li>Gaurav Waghmare (78)</li>
            <li>Pratik Survase (27)</li>
            <li>Tanish Khot (16)</li>
            <li>Kshitij Dhake (11)</li>
            <li>Soham Kottawar (7)</li>
            <li>Kartik Tichkule (2)</li>
            <li>Shlok Gaidhani (0)</li>
            <li>Kanak Agarwal (0)</li>
        </ul>
      </div>
    </div>
  )
}

export default GrpInfoCard