const express=require('express');
const path=require('path');
const app=express();

const dotenv=require('dotenv');


//configure dotenv
dotenv.config();
const hostname=process.env.HOST_NAME;
const port=process.env.PORT;


//configure the router with express

app.use('/',require('./router/apiRouting'));






app.listen(port,hostname,()=>{

    console.log(`Express is started at http://${hostname}:${port}`);
});




