import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';

dotenv.config();

// App config
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware config
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', Routes);

// Database connection
Connection();
app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
})