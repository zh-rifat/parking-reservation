import { googleSheet,auth,spreadsheetId } from "../config/db.js";


export const readSheet=async()=>{
  const getSheetData = await googleSheet.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: 'Sheet1!D4:I4'
  });
  let data=[];
  for(let i=0;i<6;i++){
    data[i]=getSheetData.data.values?.at(0)?.at(i)||null;
  }
  return data;
}

export const writeSheet=async(values)=>{
  const response = googleSheet.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: 'Sheet1!D4:I4',
    valueInputOption:"RAW",
    resource: {
      values:[...values]
    }
  });
  return response;
}

export const deleteSheetCell=async(position)=>{
  const cellMap=['D','E','F','G','H','I'];
  const response = await googleSheet.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range: `Sheet1!${cellMap[position-1]}4:${cellMap[position-1]}4`
  });
  return response;
}
