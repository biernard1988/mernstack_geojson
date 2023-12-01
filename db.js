// Import the mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database using the connection string from the environment variables
mongoose.connect(process.env.MDB_STRING);
