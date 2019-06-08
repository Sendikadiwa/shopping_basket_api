const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Basket = mongoose.model('basket', BasketSchema);
