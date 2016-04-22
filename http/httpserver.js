/**
 * Created by Max on 16/4/22.
 */
var net = require('net');
var ip = '127.0.0.1';
var port = '9090';

net.createServer(function(sockect) {
    sockect.on('data', function(data) {
        console.log('receive data from client: ' + data);
        sockect.write('HTTP/1.1 200 ok \r\n');
        sockect.write('Content-Type: text/plain; charset="utf-8"\r\n');
        sockect.write('Content-Length: 10\r\n');
        sockect.write('\r\n');
        sockect.write('0123456789');
        //sockect.destroy();
    })
}).listen(port, ip);

console.log('http server is running on ' + ip + ':' + port);