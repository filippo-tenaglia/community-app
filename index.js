const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const fs = require('fs');
var port=8080;


app.use(express.static(path.join(__dirname, 'public')));
//console.log(path.join(__dirname,'public','index.html'));
app.get('/community/v1',function(req,res,next){
    res.sendFile(path.join(__dirname,'public','index.html'));
});

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

