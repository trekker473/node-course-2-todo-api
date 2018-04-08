var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }

});

// var newTodo = new Todo({
//   text: 'Do Stuff Lunch',
//   completed: true
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved new Todo', doc)
// },(e) => {
//   console.log('Unable to save new Todo')
// });

module.exports = {Todo};
