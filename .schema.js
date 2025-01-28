const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema for the user management system
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures unique usernames
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures unique email addresses
  },
  password: {
    type: String,
    required: true, // Required field for password
  },
  roles: {
    type: [String],
    default: ['user'], // Default role if not provided
  },
  profile: {
    firstName: {
      type: String,
      required: true, // First name is required
    },
    lastName: {
      type: String,
      required: true, // Last name is required
    },
    age: {
      type: Number,
      required: true, // Age is required
    },
  },
  lastLogin: {
    type: Date, // Date field for last login timestamp
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
