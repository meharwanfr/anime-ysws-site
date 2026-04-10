import React, { Children } from 'react'

const PageWrapper = ({children}) => {
  return (
    <div className='w-screen min-h-screen bg-black text-white flex items-center justify-center'>
    {children}
    </div>
  )
}

export default PageWrapper
