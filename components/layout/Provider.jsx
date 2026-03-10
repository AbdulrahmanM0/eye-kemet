import React from 'react'

function Provider({children}) {
  return (
    <div className='max-layout mx-auto'>
        {children}
    </div>
  )
}

export default Provider