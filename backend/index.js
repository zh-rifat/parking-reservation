
import express from 'express';
import cors from 'cors';
import { getAllCells } from './routes/read.js';
import { deleteData, writeData } from './routes/write.js';
const app = express();

app.use(express.json());
app.use(cors());
app.listen(3000 || process.env.PORT, () => {
  console.log('Up and running!!');
});
app.get('/readallcells',getAllCells);
app.post('/writecell',writeData);
app.post('/deletecell',deleteData);
