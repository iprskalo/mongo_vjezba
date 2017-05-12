//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('unable to connect to mongo server');
    }
    // console.log('connected to server');
    // db.collection('Todos').insertOne({
    //     text: 'smth to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2 ));
    // });

  console.log('connected to server');
    db.collection('Users').insertOne({
        name: 'Ivan',
        age: 25,
        location: 'Djakovo'
    }, (err, result) => {
        if(err){
            return console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2 ));
    });
    db.close();
});