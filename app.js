const express = require("express");
const app = express();

app.get("/welcome", function(req, res){
    res.send("Welcome to Yatharth Soni's Web Server");
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("Server is ready at "+ PORT);
});