import express from 'express';
import { test } from './index.js';
const app = express();
const port = 8000;

app.get('/hii', (req, res) => {
    test();
    res.send('Hello, World!');
});

app.get('/name',(req,res)=>{
    res.status(200).json({message:"hii abhishek", status:true})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});