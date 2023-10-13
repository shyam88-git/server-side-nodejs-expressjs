const uuid=require('uuid');

let employees=[

    {

        id:uuid.v4(),
        name:'Shyam',
        age:25,
        designation:'Software Engineer',
        location:'Banglore'
    },

    {

            id:uuid.v4(),
            name:'Harish',
            age:23,
            designation:'Software-Designer',
            location:'Hydrabad'

    },

    {

        id:uuid.v4(),
        name:'Prakash',
        age:23,
        designation:'Developer',
        location:'Mumbai'

},
{

    id:uuid.v4(),
    name:'Lokesh',
    age:24,
    designation:'Team-Leader',
    location:'Delhi'

},

]

console.log(employees);