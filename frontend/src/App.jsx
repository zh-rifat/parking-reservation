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
      console.log(data.data);
  }


  const handleCell=async(index)=>{
    if(!email){
      return ;
    }

    if(values[index]?.at(0)===email){
      const data=await axios.post('/deletecell',{position:index+1});
      console.log(data);
    }else if(values[index][0]!==undefined){
      return;
    }
    else if(values[index][0]===undefined){
      const data=await axios.post('/writecell',{position:index+1,value:email});
      console.log(data);
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
      <div className='flex flex-col space-y-16 p-5 items-center justify-center bg-slate-400 h-screen overflow-y-scroll'>
        <div>

          <input type="text" className='p-2 bg-slate-300 shadow-md rounded-md outline-none' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div  className='grid gap-4 xs:grid-cols-2 sm:grid-cols-3'>
          {values.map((value,index)=>(
            <Cell key={index} cellNo={index+1} disabled={value.at(0)!=null&&value.at(0)!==email} reserved={value.at(0)===email} onClick={async()=>await handleCell(index)}/>
          ))}

        </div>
      </div>

    </>
  )
}

export default App
