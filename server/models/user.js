var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
})

// var newUser = new User({
//   email: 'tstevens@gges.edu  '
// })
//
// newUser.save().then((doc) => {
//   console.log('Saved new User', doc)
// },(e) => {
//   console.log('Unable to save new User')
// });

module.exports = {User};
