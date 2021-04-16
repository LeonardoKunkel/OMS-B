'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = Schema(
    {
      name: String,
      surname: String,
      email: String,
      password: String,
      role: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('User', userSchema);