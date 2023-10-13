const jwt=require('jsonwebtoken');

//form data

let user={

    id:'AAA123BBB',
    name:'Shyam',
    email:'ssk66221@gmail.com',
    password:'shyam123'
};

//create a token

let payload={
    user:{

        id:user.id,
        name:user.name
    }
};
let secreteKey='ssshhh';
let token=jwt.sign(payload,secreteKey,{expiresIn:30000});
console.log(token);


//verify the token

let decoded=jwt.verify(token,secreteKey);
console.log(decoded);
