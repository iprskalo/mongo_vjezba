//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('unable to connect to mongo server');
    }
 
  console.log('connected to server');
//deletemany
 db.collection('Todos').findOneAndUpdate({
     _id: new ObjectID('59161a20a7236d11c00d1b24')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    })
    
});