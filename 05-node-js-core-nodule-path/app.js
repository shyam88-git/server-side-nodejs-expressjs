const fs=require('fs');
const path=require('path');

fs.readFile(path.join(__dirname,'data','admin','data.txt'),'utf-8',(err,data)=>{

    if(err)throw err;
    
    fs.writeFile(path.join(__dirname ,'users','regular','users.txt'),data,'utf-8' ,(err)=>{

        if(err) throw err;
        console.log('writen in users.txt');
    })
})