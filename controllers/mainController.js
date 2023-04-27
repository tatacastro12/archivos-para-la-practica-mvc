let path = require("path");

let controladores = {
    home: (req, res, netx)=>{
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },

    about: (req, res, netx)=>{
        res.sendFile(path.join(__dirname, "../views/about.html"))
    },
};

module.exports = controladores