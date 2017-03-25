var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    profile: {
        username:{
            type:String,
            required: true,
            lowercase: true
        },
        picture:{
            type: String,
            match: /^http:\/\//i
        }
    },
    data:{
        oauth:{
            type: String,
            required: true
        },
        cart:[{
            product:{
                type: mongoose.Schema.Types.ObjectId
            }
        }]
    }
});

module.exports = personSchema;
