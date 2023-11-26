import React from 'react'
import { GridLoader } from 'react-spinners'

const Loader = ({loading}) => {
  return (
    <div className='absolute opacity-40 '>
      <GridLoader size={20} loading={loading} color={"#558942"}/>
    </div>
  )
}

export default Loader
