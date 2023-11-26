import React, { useState } from 'react'
import {GridLoader as BarLoader, GridLoader} from 'react-spinners'
import Loader from './Loader';
const Cell = ({disabled,reserved,onClick,cellNo}) => {

  const [loading, setLoading] = useState(false);

  const handleClick=async()=>{
    setLoading(true);
    await onClick();
    setLoading(false);
  }
  const colorMap={
    default:"text-green-800",
    disabled:"text-slate-900",
    reserved:"text-slate-200"
  }

  return (
    <div className={`flex flex-col relateive items-center justify-center h-40 w-24 ${disabled?"cursor-not-allowed bg-slate-500":"cursor-pointer bg-slate-300"} ${reserved&&"!bg-green-900 !cursor-pointer"}`}
      onClick={handleClick}
    >
      <p className={` ${!disabled&&!reserved&&colorMap.default} ${disabled&&colorMap.disabled} ${reserved&&colorMap.reserved}`}>{cellNo}</p>
      {disabled&&
        (<span className='text-slate-900 text-sm font-bold'>
          Not available
        </span>)
      }
      {reserved&&
        (<span className='text-slate-200 text-sm font-bold'>
          reserved
        </span>)
      }
      {!disabled&&!reserved&&
        (<p className='text-green-800 text-sm font-bold'>
          available
        </p>)
      }
      <Loader loading={loading}/>
          

    </div>
  )
}

export default Cell
