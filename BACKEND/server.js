const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// app.use('/uploads', express.static('./uploads'));

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection success!");
})

const hardwareRouter = require("./routes/water.js");

//app.use("/water",hardwareRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
})