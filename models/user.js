var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var personSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    loggedInCount:{
        type:Number,
        default: 0
    }
});

module.exports = personSchema;
