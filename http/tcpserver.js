/**
 * Created by Max on 16/4/22.
 */
var net = require('net');
var serverIp = '127.0.0.1';
var serverPort = 9090;

net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log('receive data from client: ' + data);
        socket.write(data);
    });
}).listen(serverPort, serverIp);

console.log('TCP Server is running on ' + serverIp + ':' + serverPort);


