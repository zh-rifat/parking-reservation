import { useEffect, useState } from 'react'
import './App.css'

import axios from './utils/axiosInstance';
import Cell from './components/Cell';

function App() {

  const [email, setEmail] = useState("");

  const [values, setvalues] = useState([]);

  const initializeCells=async()=>{
      const data=await axios.get('/readallcells');
      setvalues(data.data);
  }


  const handleCell=async(index)=>{
    if(!email){
      return ;
    }

    if(values[index]===email){
      const data=await axios.post('/deletecell',{position:index+1});
    }else if(values[index]!==null){
      return;
    }
    else if(values[index]===null){
      const data=await axios.post('/writecell',{position:index+1,value:email});
    }

    await initializeCells();
    console.log("clicked");
  }

  useEffect(() => {
    return ()=> {
      initializeCells();
    };
  }, []);
  return (
    <>
      <div className='flex flex-col space-y-16 p-5 items-center justify-center bg-slate-600 min-h-screen overflow-y-auto'>
        <div>

          <input type="text" className='p-2 bg-slate-300 shadow-md rounded-md outline-none' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div  className='grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6'>
          {values.map((value,index)=>(
            
            <Cell key={index} cellNo={index+1} disabled={value!=null&&value!==email} reserved={value===email} onClick={async()=>await handleCell(index)}/>
          ))}

        </div>
      </div>

    </>
  )
}

export default App
