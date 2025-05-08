import 'dotenv/config';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

const base_url = process.env.BASE_URL;
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on : ${base_url}:${port}`);
})