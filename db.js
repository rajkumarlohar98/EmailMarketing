const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://rajkumar:rajkumar@cluster0.hqespzx.mongodb.net/emaildb' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose