const fs=require('fs');

let employees=[


    {

        name:'Rajan',
        age:25,
        designation:'Software Engineering',
        location:'Bangalore'
    },

    {

        name:'Harish',
        age:20,
        designation:'Team Leader',
        location:'Bangalore'
    },

    {

        name:'Anand',
        age:25,
        designation:'Software Analysit',
        location:'Bangalore'
    },
]


//create json file or write json file

fs.writeFile('employees.json',JSON.stringify(employees) ,'utf-8',(err)=>{

    if(err) throw err;
    console.log('written json file');
})


//read json file 

fs.readFile('employees.json' ,'utf-8',(err,data)=>{

    if(err) throw err;

    let employees=JSON.parse(data);
    console.log(employees);
})