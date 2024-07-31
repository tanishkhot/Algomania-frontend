import React from 'react'
import Ranklist from '@/components/Ranklist'
import IndInfoCard from '@/components/IndInfoCard'
import GrpInfoCard from '@/components/GrpInfoCard'

export default function dashboard () {
  return (
    <div className="h-full w-full mt-10">
        <div className="flex px-5 py-5">
          <div className="w-[30%] h-[76.5vh]">
            <Ranklist/>
          </div>
          <div className="flex flex-col w-[70%] px-6"> 
            <div className="flex w-full justify-between mb-5">
              <div className="w-[56%]">
                <IndInfoCard/>
              </div>
              <div className="w-[41%]">
                <IndInfoCard/>
              </div>      
            </div>
            <div className="flex w-full justify-between mb-5">
              <div className="w-[45%]">
                <GrpInfoCard/>
              </div>  
              <div className="w-[52%]">
                <IndInfoCard/>
              </div>      
            </div>
            <div className="flex w-full  justify-between">
              <div className="w-full">
                <IndInfoCard/>
              </div>      
            </div>
          </div>  
        </div>  
    </div> 
  )
}


