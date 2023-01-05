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

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
