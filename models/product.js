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

var schema = new mongoose.Schema(productSchema);

var currencySymbols = {
    'USD' : '$',
    'EUR' : 'E',
    'BDT' : 'Tk'
};

schema.virtual('displayPrice').get(function(){
    return currencySymbols[this.price.currency] + ' ' + this.price.amount;
});

module.exports = schema;
module.exports.productSchema = productSchema;