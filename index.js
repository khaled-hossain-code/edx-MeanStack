var mongoose = require('mongoose'),
    userSchema = require('./models/user');

const uri = 'mongodb://localhost:27017/test';

mongoose.connect(uri);

var User = mongoose.model('User',userSchema,'users');

var user = new User({
    name:'John',
    email: 'john@smith.com'
});

user.save(function(err,doc){
    if(err){
        console.log('could not save in user');
    }

    console.log(doc);
})