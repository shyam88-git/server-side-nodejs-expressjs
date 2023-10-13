const fs=require('fs');

//write or create file 
fs.writeFileSync('text.txt' , 'Janjyoti Multiple College');
console.log("Written to text file");



//sync readfile

let fileContent=fs.readFileSync('message.txt','utf-8');
console.log(fileContent);



//sync read file

let txt=fs.readFileSync('text.txt','utf-8');
console.log(txt);


//synch read fle


let data=fs.readFileSync('data.txt' ,'utf-8');


//sync write to another file

let newContent=`Welcome to fs module :${data}`;
fs.writeFileSync('contet.txt',newContent);



//Async (calback,promises,Async-Await)


fs.readFile('message.txt','utf-8',(err,data)=>{
if(err) throw err;
fs.writeFile('welcome.txt',data, 'utf-8',(err)=>{
if(err) throw err;
console.log("written in welcome.txt");

})

})



//Asynch (callback,promises)

//read file
fs.readFile('text.txt','utf-8',(err,data)=>{
if(err)throw err;

fs.writeFile('program.js',data,'utf-8',(err)=>{

    if(err) throw err;
    console.log('written program.js file');
})

})