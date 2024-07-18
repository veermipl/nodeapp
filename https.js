const http = require('http');

//First Method    
// http.createServer((req, resp)=>{

//     resp.write("Hi This is veer for Node Testing");
   
//     resp.end();
// }).listen(450)

//Second Method
function getdata(req,resp){
    resp.write("It is second Method");
    resp.end();
}

http.createServer(getdata).listen(3100);

const test = getdata((req,resp)=>{
    resp.write("It is second Method");
    resp.end();
});