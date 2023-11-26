
import { readSheet } from './../utils/operations.js';


export const getAllCells=async(req,res)=>{

  try {
    const sheetData=await readSheet();
    
    res.send(sheetData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false,msg:"something went wrong.",data:null});
  }


}

