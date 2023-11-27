import {google} from 'googleapis';
import dotenv from 'dotenv';
import path from 'path';

export const auth = new google.auth.GoogleAuth({
  keyFile: path.resolve('./config/credentials.json'),
  scopes: 'https://www.googleapis.com/auth/spreadsheets'
});
dotenv.config();
console.log(process.cwd());
const client = await auth.getClient();
export const googleSheet = google.sheets({ version: 'v4', auth: client });
export const spreadsheetId = process.env.SPREADSHEET_ID;

