import {google} from 'googleapis';
import dotenv from 'dotenv';
export const auth = new google.auth.GoogleAuth({
  keyFile: './config/credentials.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets'
});
dotenv.config();
const client = await auth.getClient();
export const googleSheet = google.sheets({ version: 'v4', auth: client });
export const spreadsheetId = process.env.SPREADSHEET_ID;
