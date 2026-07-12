import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World! Node.js & Express backend is running with Babel presets.');
});

app.listen(port, () => {
  console.log(`Backend server is running on: http://localhost:${port}`);
});
