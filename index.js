const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.post('/submit', (req,res)=> {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use(express.static('public'));


app.get('/', (req,res)=> {
    res.send('Hello, World!');
    
});

app.get('/about', (req,res)=> {
    res.send('About Us');
});

app.listen(port,()=>{
console.log(`Server running at http://localhost:${port}`);
});