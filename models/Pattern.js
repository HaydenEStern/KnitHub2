const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const PatternSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  chart_url: {
    type: String,
    required: true
  },
  garment_type: {
                type: String,
                enum: ['sweaters', 'hats', 'gloves_and_mittens', 'scarves', 'stuffed_animals', 'socks', 'other'],
                required: true
            },
  cables: {
    type: Boolean,
    default: false
  },
   lace: {
    type: Boolean,
    default: false
  },
   colorwork: {
    type: Boolean,
    default: false
  },
   written_instructions: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Pattern = mongoose.model("Pattern", PatternSchema);

// Export the pattern model
module.exports = Pattern;
