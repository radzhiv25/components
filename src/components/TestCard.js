import React from 'react'

export const TestCard = () => {
  return (
    <div className='p-2 shadow-lg rounded-md hover:scale-95 text-center space-y-1 flex-1'>
      <img src="/images/roblox.jpeg" alt="" className='rounded-md'/>
      <h1 className='text-xl font-semibold'>John doe</h1>
      <p className='text-sm'>An accomplished entrepreneur with a knack for spotting opportunities.</p>
    </div>
  )
}
