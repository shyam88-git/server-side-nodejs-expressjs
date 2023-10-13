const express=require('express');
const { request } = require('http');
const router=express.Router();
const uuid=require('uuid');

const path=require('path');

let users=[{"id":"33-6789133","first_name":"Curcio","last_name":"Roelofs","email":"croelofs0@cisco.com","gender":"Polygender","ip_address":"12.37.146.124"},
{"id":"12-2494275","first_name":"Deedee","last_name":"Gregori","email":"dgregori1@princeton.edu","gender":"Female","ip_address":"40.237.239.159"},
{"id":"62-0051023","first_name":"Livia","last_name":"Heynen","email":"lheynen2@google.com.br","gender":"Female","ip_address":"12.147.78.97"},
{"id":"56-1056087","first_name":"Wynn","last_name":"Linnard","email":"wlinnard3@ameblo.jp","gender":"Male","ip_address":"248.233.168.164"},
{"id":"61-8133738","first_name":"Harp","last_name":"Justice","email":"hjustice4@phpbb.com","gender":"Male","ip_address":"137.63.231.240"},
{"id":"81-7598755","first_name":"Gare","last_name":"Scrannage","email":"gscrannage5@pcworld.com","gender":"Male","ip_address":"5.228.189.38"},
{"id":"25-5931364","first_name":"Andros","last_name":"Bjerkan","email":"abjerkan6@cdbaby.com","gender":"Male","ip_address":"182.51.99.42"},
{"id":"57-7609001","first_name":"Giacomo","last_name":"Atthow","email":"gatthow7@ft.com","gender":"Male","ip_address":"177.252.200.15"},
{"id":"02-1316919","first_name":"Brandtr","last_name":"Lillow","email":"blillow8@yahoo.com","gender":"Male","ip_address":"247.30.100.94"},
{"id":"08-0081123","first_name":"Rainer","last_name":"Crookston","email":"rcrookston9@elegantthemes.com","gender":"Male","ip_address":"190.86.100.58"}];


/*USAGE:GET ALL THE USERS
Request:GET
Method:Router.get()
*/

router.get('/users',(request,response)=>{

    response.status(200).json({
        total:users.length,
        users:users
    });


});

/*GET SINGLE USERS
Request:GET
Method:Router.get*/

router.get('/users/:id',(request,response)=>{
    let userId=request.params.id;
    let selectedUsers=users.find((user)=>{

        return user.id=userId;
    })
    response.status(200).json(selectedUsers);


});

/*USAGE:CREATE A NEW USER
Request:POST
Method:Router.post*/

router.post('/users',(request,response)=>{
    let userId=request.params.id;
    let newUsers={

        id:uuid.v4(),
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address


    };

   //add array to the user

   users.unshift(newUsers);
   response.status(200).json({
    msg:'Create a new user',
    user:newUsers

   });




});


/*USAGE:UPDATE THE USERS
Request:PUT
Method:Router.put*/

router.put('/users/:id',(request,response)=>{

    let userId=request.body.id;
    let updateUsers={

        id:userId,
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address
    }

    let requiredIndex=users.map((user)=>user.id).indexOf(userId);

    //update the users
    users.splice(requiredIndex,1,updateUsers);

    response.status(200).json({

        msg:'Update a user',
        users:updateUsers
    })


});

/* USAGE:delete a user
    Request:delete
    method:router.delete()
    */


router.delete('/users/:id',(request,response)=>{

    let userId=request.params.id;

    let requiredIndex=users.map((user)=>user.id).indexOf(userId);
    //delete the user
     users.splice(requiredIndex,1);

    response.status(200).json({

        msg:'DELETE A USERS',
        userID:userId

    });


});
module.exports=router;