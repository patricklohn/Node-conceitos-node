import express from 'express';
import chalk from 'chalk';
import path from 'path';
import baseRouter from "./router/baseRouter.js";
import { fileURLToPath } from 'url';
const app = express(); 
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname,'templates');

app.use(express.static('public'))

app.use('/windows', baseRouter)

app.get('/', (req,res,next)=>{
    res.sendFile(`${basePath}/index.html`);
    
})

app.use(function(req,res){
    res.status(404).sendFile(`${basePath}/error.html`)
})

app.listen(port, ()=>{
    console.log(chalk.green(`http://localhost:${port}/`));
})
