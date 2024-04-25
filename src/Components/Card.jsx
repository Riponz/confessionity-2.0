import React from 'react'

function Card() {
  return (
    <div className='w-full h-max flex flex-col rounded-lg bg-white justify-center my-1 items-start p-4 border-2 '>
        <div className='font-bold text-xl'>username</div>
        <div className='text-sm text-slate-600'>12th sep, 2024</div>
        <div className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum repudiandae illo totam laudantium possimus officiis atque, ut accusamus rem?</div>
    </div>
  )
}

export default Card