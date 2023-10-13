const dotenv=require('dotenv');

//configure dotenv

dotenv.config();

//secrete key

let key=process.env.JWT_SECRETE_KEY;
console.log(key);


let local_url=process.env.MONGO_DB_LOCAL_URL;
console.log(local_url);

