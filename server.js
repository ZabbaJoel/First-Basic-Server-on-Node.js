const http = require('http');
const fs = require('fs');

//let views;

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views.txt', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("<p>Sorry there has been an error on our side");
        } else {
            res.statusCode = 200;
            views = Number.parseInt(data.toString());
            views++;
            fs.writeFile('./views.txt', views.toString(), () => {
                res.end("<p style=\"text-align:center ; padding-top:100px ; color:olive ; font-size:40px\">This page has been loaded: <b>" + views + "</b> times<p>");
            });
            
        }
    });

    

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})