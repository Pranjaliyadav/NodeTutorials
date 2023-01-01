// //this whole code creates a node server

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write(
//       `<html>
//               <body>
//                 <form action="/messsage" method = "POST"><input type="text" name="message"/><button type="submit">Search</button></form>
//               </body>
//             </html>`
//     );
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk); //editing the data in bodynot the value itself
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("message.txt", "DUMMY");
//     });

//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }

//   console.log(req.url, req.method, req.headers);
//   //   process.exit()
//   res.setHeader("Content-Type", "text/html");
//   res.write(
//     `<html>
//       <body>
//         <div>Hello from my node jS server</div>
//       </body>
//     </html>`
//   );
//   res.end();
//   //   //this will show the response by sending it to client side
// });
// //createServer needs requestListner arg that takes a request and response type

// server.listen(3000);
// //nodejs keeps listening the chnges made on server we created
// //we provide port

// //event loop- keeps on running as longs as there are event listeners registered
// //nodejs uses event handling all the ti



const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message,(err)=>{

          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
