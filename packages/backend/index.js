import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import router from './src/router.js';

const app = express();

app.use(
    cors('*')
);

app.use(express.json());

app.use(router);

const base_url = process.env.BASE_URL;
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on : ${base_url}:${port}`);
})