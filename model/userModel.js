const mongoose = require('mongoose');
const slugify = require('slugify');

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'A username is reqired'],
    maxlength: [8, 'A username must have less than or equal to 8 characters'],
    unique: true,
  },
  image: {
    type: String,
    default: 'kola.png',
  },
  description: String,
  password: {
    type: String,
    required: [true, 'A password is required!'],
    minlength: [5, 'A password should have at least 5 characters'],
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (pw) {
        if (this.isNew) {
          return pw === this.password;
        }
        return true;
      },
      message: 'Passwords do not match!',
    },
  },
});

userSchema.pre('save', function (next) {
  this.slug = slugify(this.user);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
