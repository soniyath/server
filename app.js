// const express = require("express");
// const app = express();

// app.get("/welcome", function(req, res){
//     res.send("Welcome to Yatharth Soni's Web Server");
// });

// const PORT = 8080;
// app.listen(PORT, function(){
//     console.log("Server is ready at "+ PORT);
// });


//Above code works perfectly the code below if for experimenting

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io") (server);
const port = 3000;

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
      console.log(msg);
      io.emit("chat message", msg);
    });
  });

  server.listen(port, () => console.log("server running on port:" + port));