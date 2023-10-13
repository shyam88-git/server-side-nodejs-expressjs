const express=require('express');
const app=express();
const dotenv=require('dotenv');

//config dotenv
dotenv.config();

//Configure the express to achieve form data

 app.use(express.json());


 const hostname=process.env.HOST_NAME;
 const port=process.env.PORT;

 app.get('/',(request,response)=>{

     response.send(`<h2>Welcome to Express js with rest api`);

 });
 

 //configure the router wit express

 app.use('/api',require('./router/userRouter'));

 app.listen(port,hostname,()=>{

    console.log(`Express Server is Started at http://${hostname}:${port}`);
 })


 