import { googleSheet,auth,spreadsheetId } from "../config/db.js";


export const readSheet=async()=>{
  const getSheetData = await googleSheet.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: 'Sheet1!A1:A6'
  });
  let data=[];
  for(let i=0;i<6;i++){
    data[i]=getSheetData.data.values?.at(i)||[];
  }
  return data;
}

export const writeSheet=async(values)=>{
  const response = googleSheet.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: 'Sheet1!A1:A6',
    valueInputOption:"RAW",
    resource: {
      values:[...values]
    }
  });
  return response;
}

export const deleteSheetCell=async(position)=>{
  const response = await googleSheet.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range: `Sheet1!A${position}:A${position}`
  });
  return response;
}
