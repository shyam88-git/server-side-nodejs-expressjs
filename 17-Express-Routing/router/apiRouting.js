const express=require('express');
const router=express.Router();
const path=require('path');

//for html tag
router.get('/',(request,response)=>{

    response.send(`<h2> Welcome to Express JS`);
});

//for index page

router.get('/home',(request,response)=>{

    response.sendFile(path.join(__dirname ,'..', 'views','index.html'));
});

router.get('/about',(request,response)=>{

    response.sendFile(path.join(__dirname ,'..', 'views','about.html'));
});

router.get('/services',(request,response)=>{

    response.sendFile(path.join(__dirname ,'..', 'views','services.html'));
});

router.get('/contact',(request,response)=>{

    response.sendFile(path.join(__dirname ,'..', 'views','contact.html'));
});






module.exports=router;

