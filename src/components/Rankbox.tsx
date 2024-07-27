import React from 'react'
import { CgProfile } from 'react-icons/cg'

interface RankboxProps {
  name: string;
  points: number;
  rank: string;
}

const Rankbox: React.FC<RankboxProps> = ({ name, points, rank}) => {
  return (
    <div className={`h-24 w-full px-4 flex justify-between items-center bg-gray-500/30 backdrop-blur-xl rounded-3xl border border-gray-100/20 `}>
      <div className='flex'>
        <div className='pr-2'><CgProfile size={45} className="text-white" /></div>
        <div className='flex flex-col'>
            <h1>{name}</h1>
            <h1>{points}</h1>
        </div>
      </div>
      <div>
        <h1 className='text-2xl'>{rank}</h1>
      </div>
    </div>
  )
}

export default Rankbox
