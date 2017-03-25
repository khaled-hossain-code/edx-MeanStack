var mongoose = require('mongoose'),
    Category = require('./category');

var productSchema = {
    name: {
        type: String,
        require: true
    },
    pictures:[{type:String, match: /^http:\/\//i}],
    price:{
        amount: {type:Number, require: true },
        currency:{
            type: String,
            enum : ['USD', 'EUR', 'BDT'],
            require: true
        }
    },
    category: Category.categorySchema
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;