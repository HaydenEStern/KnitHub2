const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const CommentSchema = new Schema({
  // `title` is required and of type String
  body: {
    type: String,
    required: true
  },
  comment_author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  pattern: {
    type: Schema.Types.ObjectId,
    ref: "Pattern",
    required: true
  },
  createdAt: {
    type: Date
  }
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the pattern model
module.exports = Comment;
