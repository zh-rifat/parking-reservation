
import express from 'express';
import cors from 'cors';
import { getAllCells } from '../routes/read.js';
import { deleteData, writeData } from '../routes/write.js';
const app = express();

app.use(express.json());
app.use(cors());
app.listen(3000 || process.env.PORT, () => {
  console.log('Up and running!!');
});
app.get('/api/readallcells',getAllCells);
app.post('/api/writecell',writeData);
app.post('/api/deletecell',deleteData);

export default app;
