import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
  return (
    <div>
         <div>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
    
    </div>
  )
}

export default Spinner