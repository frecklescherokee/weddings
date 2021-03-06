const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealSchema = new Schema({
  name: {
      type: String,
      required: true
  }
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;