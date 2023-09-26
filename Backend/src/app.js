import express, { json } from 'express';
const app = express();
const port = 3000;
import cors from 'cors';
import tables from './db/tables.js';
import router from './routes/route.js';

//Create database tables
tables();

app.use(cors({
    origin: ['https://didjustengettbowyet.com', 'http://localhost:3000'],
    optionsSuccessStatus: 200
}));

app.use(json());

//add our routes
app.use(router);



app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;