const os=require('os');

//home dir location
let homeDir=os.homedir();

console.log(`Home Dir:${homeDir}`);

//total memory

let totalMemory=os.totalmem();
console.log(`Total Memoryl: ${totalMemory}`);



//computer name

let computerName=os.hostname();
console.log(`Computer Name:${os.hostname}`);

//free memory
let freeMemory=os.freemem();
console.log(`Free memory:${freeMemory}`);


