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
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
//     console.log(result);
// });
// deleteOnedb.collection
// db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
//     console.log(result);
// })
// find one and delete
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
     console.log(result);
})
   // db.close();
});