const express=require('express');
const router=express.Router();
const fs=require('fs');
const uuid=require('uuid');

const path=require('path');
const { JsonWebTokenError } = require('jsonwebtoken');

/*USAGE:GET ALL THE USERS
  Request:GET
  Method:router.get()*/


  router.get('/users',(request,response)=>{

    fs.readFile(path.join(__dirname,'..','data','users.json'),'utf-8',(err,data)=>{

        if(err)throw err;
        let users=JSON.parse(data);
        response.status(200).json({

            total:users.length,
            users:users
        });
    });
  });


  /*USAGE:GET A SINGLE USER
    Request:GET
    Method:router.get
    */

    router.get('/users/:id',(request,response)=>{
        let userId=request.params.id;

        fs.readFile(path.join(__dirname,'..','data','users.json'),'utf-8',(err,data)=>{

            if(err)throw err;
            let users=JSON.parse(data);
            let selectedUser=users.find((user)=>{

                return user.id===userId;
            });
            response.status(200).json(selectedUser);

        });
    }) ;

    /*CREATE A NEW USER
      URL:http://127.0.0.1:5000/api/users
      Request:POST
      method:router.post()*/


      router.post('/users',(request,response)=>{
        let newUsers={

            id:uuid.v4(),
            first_name:request.body.first_name,
            last_name:request.body.last_name,
            email:request.body.email,
            gender:request.body.gender,
            ip_address:request.body.ip_address
    

        };

        fs.readFile(path.join(__dirname,'..','data','users.json'),'utf-8',(err,data)=>{

            if(err)throw err;
            let users=JSON.parse(data);
            //add array
            users.unshift(newUsers);

            //update the array with new array data

            fs.writeFile(path.join(__dirname,'..','data','users.json'),JSON.stringify(users),'utf-8',(err)=>{

                if(err) throw err;
                response.status(200).json({
                    msg:'create a user',
                    user:newUsers
                });
            });

            response.status(200).json({

                msg:'CREATE A NEW USER',
                user:newUsers
            });

        });
      });


      /*USAGE:UPDATE THE ARRAY
        URL:http:/127.0.0.1:5000/api/users/:id
        Request:PUT
        Method:router.put()
        */

    router.put("/users/:id",(request,response)=>{
        let userId=request.params.id;
        let updateUser={

            id:userId,
            first_name:request.body.first_name,
            last_name:request.body.last_name,
            email:request.body.email,
            gender:request.body.gender,
            ip_address:request.body.ip_address
        };

            fs.readFile(path.join(__dirname,'..','data','users.json'),'utf-8',(err,data)=>{

                if(err)throw err;
                let users=JSON.parse(data);
                let requiredIndex=users.map((user)=>user.id).indexOf(userId);

                //replace with new data

                users.splice(requiredIndex,1,updateUser);
                //update the json file with new arra data

                fs.writeFile(path.join(__dirname,'..','data','users.json'),JSON.stringify(users),'utf-8',(err)=>{

                    if(err)throw err;
                    response.status(200).json({

                        msg:'update user',
                        user:updateUser
                    });
                });


                
            });

    });


    /*USAGE:DELETE USER
     Request:delete
     method:router.delete()
     */

     router.delete("/users/:id",(request,response)=>{

        let userId=request.params.id;

        fs.readFile(path.join(__dirname,'..','data','users.json'),'utf-8',(err,data)=>{

            if(err)throw err;
            let users=JSON.parse(data);

            let requiredIndex=users.map((user)=>user.id).indexOf(userId);
            //delete the id from array

            users.splice(requiredIndex,1);

            //update the json file with new array

            fs.writeFile(path.join(__dirname,'..','data','users.json'),JSON.stringify(users),'utf-8',(err)=>{

                if(err)throw err;
                response.status(200).json({

                    msg:'Delete a  user',
                    userID:userId
                });


            });
        });
     });


  module.exports=router;