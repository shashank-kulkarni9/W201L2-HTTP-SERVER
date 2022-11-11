const args = require("minimist")(process.argv.slice(2));
let port = args.port;
const http = require("http");
const fs = require("fs");
let hc='';
let pc='';
let rc='';
fs.readFile("home.html",(err,home) =>{
    if (err)
    throw err;
    hc=home;
});
fs.readFile("project.html",(err,project) =>{
    if (err)
    throw err;
    pc=project;
});
fs.readFile("registration.html",(err,registration) =>{
    if (err)
    throw err;
    rc=registration;
});
http.createServer((request,response) =>
{
    let url= request.url;
    response.writeHead(200,{"Content-Type":"text/html"});
    switch(url)
    {
        case "/project":
            response.write(pc);
            response.end();
            break;
        case "/registration":
            response.write(rc);
            response.end();
            break;
        default:
            response.write(hc);
            response.end();
            break;
    }   
})
.listen(port);
