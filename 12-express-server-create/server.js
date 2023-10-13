const express =require('express');
const app=express()//initialize express
const path=require('path');

const hostname='127.0.0.1';
const port=5000;

//static file configuration 
app.use('/public',express.static('public'));

//html tag

app.get('/',(request,response)=>{

    response.send(`<h2>Welcome to Express JS</h2>`);

});


//html page

app.get('/home',(request,response)=>{

    response.sendFile(path.join(__dirname,'index.html'));
})


//for json response

let gihubUser={
    "login": "shyam88-git",
    "id": 128511858,
    "node_id": "U_kgDOB6jvcg",
    "avatar_url": "https://avatars.githubusercontent.com/u/128511858?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shyam88-git",
    "html_url": "https://github.com/shyam88-git",
    "followers_url": "https://api.github.com/users/shyam88-git/followers",
    "following_url": "https://api.github.com/users/shyam88-git/following{/other_user}",
    "gists_url": "https://api.github.com/users/shyam88-git/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shyam88-git/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shyam88-git/subscriptions",
    "organizations_url": "https://api.github.com/users/shyam88-git/orgs",
    "repos_url": "https://api.github.com/users/shyam88-git/repos",
    "events_url": "https://api.github.com/users/shyam88-git/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shyam88-git/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shyam Sharki",
    "company": "Fresher",
    "blog": "ssk66221@gmail.com",
    "location": "Gujrat India",
    "email": null,
    "hireable": null,
    "bio": "React JS Developer | Java Developer",
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 1,
    "followers": 0,
    "following": 1,
    "created_at": "2023-03-21T16:52:19Z",
    "updated_at": "2023-07-15T09:08:45Z"
  };

  app.get('/user',(request,response)=>{

    response.json(gihubUser);
  });


  //for downloading file from server

  app.get('/ppt',(request,response)=>{

    response.download(path.join(__dirname,'React_Online_Training.pptx'));
  })
app.listen(port,hostname ,()=>{

    console.log(`Express server is started at http://${hostname}:${port}`);
})