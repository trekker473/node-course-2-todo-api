const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove({_id: '5a946a416770ff1aca669076'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5a946a416770ff1aca669076').then ((todo) => {
  console.log(todo);
});
