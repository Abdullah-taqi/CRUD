const mongoose = require("mongoose");

const DB = "mongodb+srv://ataqi99:Powerfull1999_@cluster0.borwsab.mongodb.net/mernstack?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));