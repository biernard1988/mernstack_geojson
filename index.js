const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");

const usersRouter = require("./routes/users");
const propertiesRouter = require("./routes/properties");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/properties", propertiesRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
