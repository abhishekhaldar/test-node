import express from 'express';
import { test } from './index.js';
const app = express();
const port = 8000;

app.use('/hii', (req, res) => {
    test();
    res.send('Hello, World!');
});

app.use('/name',(req,res)=>{
    res.status(200).json({message:"hii abhishek from server", status:true})
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});