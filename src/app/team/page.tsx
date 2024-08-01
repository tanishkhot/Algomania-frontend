import React from 'react'
import { cn } from '../../../lib/utils';
import { Input } from '@/components/ui/input';

export default function team () {
  return (
      <div className='w-full h-full flex justify-center items-center'>
      <div className={`h-1/3 w-1/3 px-4 py-4 flex flex-col justify-start items-start bg-gray-500/30 backdrop-blur-xl rounded-3xl border border-gray-100/20 `}>
        <h1 className='text-white text-3xl'>Enter Team ID to Join</h1>
        <div className='h-1/2 w-full flex justify-center items-end'>
        <LabelInputContainer className="mb-0">
            <Input className='w-full' id="firstname" placeholder="01" type="text" />
        </LabelInputContainer>    
        </div>
      </div>  
    </div>
  )
}

const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-1/2", className)}>
        {children}
      </div>
    );
  };
  