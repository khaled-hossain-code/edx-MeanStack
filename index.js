const mongodb = require('mongodb');

const uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri, function(err, db){
    if(err){
        console.log('unable to connect to mongodb');
        process.exit(1);
    } 

    db.collection('test').insert({'hello':'mongodb'});
    db.collection('test').find({}).toArray(function(err, docs){
        console.log(docs);
    })

})