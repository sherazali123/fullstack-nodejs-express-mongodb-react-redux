const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responsed: { type: Boolean, default: false }
});

module.export = recipientSchema;
