const express = require("express")
const app = express (); 
const path = require("path")

app.listen(3000, ()=>{ console.log('Servidor funcionando'); });

app.use(express.static("./public"));

let rutasMain = require("./routes/main.js")

app.use("/", rutasMain)
app.use("/about", rutasMain) 