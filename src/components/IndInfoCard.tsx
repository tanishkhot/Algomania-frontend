import React from 'react'

const IndInfoCard = () => {
  return (
    <div className='w-full h-full bg-gray-500/30 backdrop-blur-xl rounded-3xl flex flex-col px-5 py-3 border border-gray-100/20 shadow-lg text-white justify-between font-inika'>
      <div className='flex w-1/3 justify-between items-center'>
        <h1 className='text-sm font-light'>Name</h1>
        <h1 className='text-lg'>Devashish</h1>
      </div>
      <div className='flex w-1/2 justify-between items-center '>
        <h1 className='text-sm font-light'>Leetcode Id</h1>
        <h1 className='text-lg'>Devashish-Bhirdi</h1>
      </div>
      <div className='flex w-1/3 justify-between items-center '>
        <h1 className='text-sm font-light'>Current Streak</h1>
        <h1 className='text-lg'>3</h1>
      </div>
      <div className='flex w-1/3 justify-between items-center'>
        <h2 className='text-sm font-light'>Max Streak</h2>
        <h1 className='text-lg'>5</h1>
      </div>
    </div>
  )
}

export default IndInfoCard
