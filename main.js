import express from 'express';
import { test } from './index.js';
const app = express();
const port = 5005;

app.get('/', (req, res) => {
    test();
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});