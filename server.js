import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import configViewEngine from './src/config/viewEngine';
import initWebRoutes from './src/routes/web';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  
configViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log(`Backend server is running on: http://localhost:${port}`);
});
