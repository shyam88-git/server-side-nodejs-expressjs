const gravatar=require('gravatar');


//user

let user={

    name:'Shyam',
    email:'ssk66221@gmail.com',
    password:'shyam123'
};

let image=gravatar.url(user.email,{

    s:'200',
    r:'G',
    dd:'mm'
});

user.image=image;
console.log(user);