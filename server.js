var firebase = require('firebase');
  require('firebase/auth');
  require('firebase/database');
const firebaseConfig = {
    apiKey: "AIzaSyBWvjaF3X5AOIM8tCM4VWsdm7UJpdP1b5Q",
    authDomain: "yhaa-web-app.firebaseapp.com",
    projectId: "yhaa-web-app",
    storageBucket: "yhaa-web-app.appspot.com",
    messagingSenderId: "217933117757",
    appId: "1:217933117757:web:bba7a3bfd4982bb573ed54",
    measurementId: "G-X643603PCC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.get('/login', function(req,res){
    console.log("sending file ...");
    res.sendFile(path.join(__dirname+'/express/sign-in/sign-in-index.html'));
    //__dirname : It will resolve to your project folder.
  });

  // default URL for website
app.use(express.static(__dirname+'/express/member-template/'));
app.get('/member', function(req,res){
  console.log("sending member template index file ...");
  res.sendFile(path.join(__dirname+'/express/member-template/index.html'));
  //__dirname : It will resolve to your project folder.
});

// default URL for website
app.use(express.static(__dirname+'/express/static/'));
app.get('/admin', function(req,res){
  console.log("sending admin template index file ...");
  res.sendFile(path.join(__dirname+'/express/admin-template/index.html'));
  //__dirname : It will resolve to your project folder.
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
