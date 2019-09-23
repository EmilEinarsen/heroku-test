const express = require("express");


const app = express();
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname+"/public"));

app.listen(5000, () => console.log("Port: 5000"));

app.get("/", (req, res) => {
    res.send("hej")
});