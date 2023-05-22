const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hardwareSchema = new Schema({

    hardwareID: {
        type:String,
        
    },
    hardwareName : {
        type : String,
        required : true,
        unique: true,
    },
    address : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true,
    },
    email : {
        type: String,
        required: true,
    },
    image : {
        type : String,
        required : true,
        unique : true
    }
    

    
})

const Hardware = mongoose.model("Hardware",hardwareSchema);

module.exports = Hardware;