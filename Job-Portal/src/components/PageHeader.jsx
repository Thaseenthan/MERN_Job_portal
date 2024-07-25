import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='bg-slate-900 border border-slate-400 rounded-2xl p-8 shadow-lg backdrop-filter  relative py-12 mt-3 flex items-center justify-center text-white'>
        <div>
            <h2 className='text-3xl text-blue-500 font-medium mb-1 text-current'>{title}</h2>
            <p className='text-lg text-center font-semibold underline'><a href="/">Home</a></p>
        </div>
    </div>
  )
}

export default PageHeader