const bcrypt=require('bcryptjs');

//form data
let user={

    name:'Shyam',
    email:'ssk66221@gmail.com',
    password:'shyam_123'
};


let salt=bcrypt.genSaltSync(10);
let hashPassword=bcrypt.hashSync(user.password,salt);


let updatePassword={

    ...user,
    password:hashPassword
}
let isMatch=bcrypt.compareSync(user.password,hashPassword.updatePassword);
if(isMatch){

    console.log(`Login is success`);
}

else{

    console.log('Invalid Credentials');
}