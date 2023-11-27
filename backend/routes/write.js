import { readSheet, writeSheet, deleteSheetCell} from "../utils/operations.js";

export const writeData=async(req,res)=>{
  try {
    const {position,value}=req.body;
    console.log(position);
    if(position>6){
      return res.status(400).json({success:false,msg:"something went wrong",data:null});
    }
    const values=await readSheet();
    console.log(values);
    const index=parseInt(position)-1;
    if(values[index]!=null){
      return res.status(400).json({success:false,msg:"already reserved.",data:null});
    }
    values[index]=value;
    console.log(values);
    const response = await writeSheet([[...values]]);
    return res.status(200).json({success:true,msg:"data write successful",data:null});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false,msg:"Something went wrong.",data:null});
  }
}
export const deleteData=async(req,res)=>{
  try {
    const {position}=req.body;
    console.log(position);
    if(position>6){
      return res.status(400).json({success:false,msg:"something went wrong",data:null});
    }
    const response = await deleteSheetCell(position);
    
    return res.status(200).json({success:true,msg:"data deleted successfully",data:null});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false,msg:"Something went wrong.",data:null});
  }
}
