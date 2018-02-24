//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate

// db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a90a12909ede232c282e4fe')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   $returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });


db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a9104896770ff1aca62feb4')
}, {$set: {name: 'Jason Borne'}, $inc: {age: 1}
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

// db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a9104896770ff1aca62feb4')
// }, {
//   $inc: {age: 1}
// },{
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });


  //db.close();
});
