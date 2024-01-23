import express, { json } from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import tables from './db/tables.js';
import router from './routes/route.js';

// Create database tables
tables();

const app = express();
const port = 3000;

// Setup HTTPS
const privateKey = fs.readFileSync('/etc/letsencrypt/live/osrscharterships.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/osrscharterships.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/osrscharterships.com/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

app.use(cors({
    origin: ['https://didjustengettbowyet.com', 'https://localhost:3000', 'https://verbose-memory-5p5q6rpqp9q24jp9-3000.app.github.dev'],
    optionSuccessStatus: 200
}));

app.use(json());

// Add your routes
app.use(router);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
    console.log(`HTTPS Server running on port ${port}`);
});
