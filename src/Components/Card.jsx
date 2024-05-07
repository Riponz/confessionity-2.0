import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function Card({ username, content, time, id, delbtn }) {

  const originalDate = new Date(time);
  const options = { year: 'numeric', month: 'long', day: '2-digit' };

  const formattedDate = originalDate.toLocaleDateString('en-US', options).replace(/(\d+)(st|nd|rd|th)/, '$1$2');

  return (
    <>
      <div key={id} className='w-full h-max flex flex-col rounded-lg bg-white justify-center my-1 items-start p-4 '>
        <div className='font-bold sm:font-bold text-base sm:text-base lg:text-xl w-full'>{username? username:<Skeleton height={40}/>}</div>
        <div className='text-sm text-slate-600'>{time? formattedDate:<div className='h-4'></div>}</div>
        <div className='mt-1 w-full'><p >{content? content:<Skeleton count={3} />}</p></div>
      </div>
    </>
  )
}

export default Card