const express = require('express')

const app = express();
 

const DBconnect = require('./DBconnect');
DBconnect();
app.use(express.json);
app.use("/user", require("./routes/User"));
app.get("/", (req, res) => {
    res.send("Hello Developper !")
})
PORT = 5000;
app.listen(PORT, (err)=>err ? console.log(err):console.log("Server is Runnig ... "))
