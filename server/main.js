var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){

    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(8081, function(){
    console.log('listening on *:8081');
});