const express=require('express');
const app=express();

const dotenv=require('dotenv');
const path=require('path');


//configure dotenv

dotenv.config();

//CONFIGU THE EXPRESS TO RECIVE FORM DATA
app.use(express.json());

const hostname=process.env.HOST_NAME;
const port=process.env.PORT;

app.get('/',(request,response)=>{

    response.send(`<h2> Welcome to express js with rest api`);
});


//configure router with express
app.use('/api',require('./router/userRouter'));

app.listen(port,hostname,()=>{

    console.log(`Express server is started at http://${hostname}:${port}`);
})