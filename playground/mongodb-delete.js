//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text: "Something to do"}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9104496770ff1aca62fe89')
}).then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch todos', err);
});



// db.collection('Users').deleteMany({name: "Jason Borne"}).then((result) => {
//   console.log(result);
// });




  //db.close();
});
