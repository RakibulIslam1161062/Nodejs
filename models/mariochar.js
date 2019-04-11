const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MArioCharSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChar = mongoose.model('mariochar',MArioCharSchema);

module.exports = MarioChar;
