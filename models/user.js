const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
});

// Create the 2dsphere index on the "location" field
userSchema.index({ location: "2dsphere" });

const User = model("User", userSchema);

module.exports = User;
