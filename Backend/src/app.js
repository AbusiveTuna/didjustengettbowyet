import express, { json } from 'express';
const app = express();
const port = 3000;
import cors from 'cors';
import tables from './db/tables.js';
import router from './routes/route.js';

// Create database tables
tables();

app.use(cors({
    origin: ['https://didjustengettbowyet.com', 'https://localhost:3000'],
    optionSuccessStatus: 200
}));

app.use(json());

// Add your routes
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
