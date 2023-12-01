const express = require("express");

require("dotenv/config");

require("./db");

const usersRouter = require("./routes/users");
const usersProperties = require("./routes/properties");

const app = express();

const port = 8000;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/properties", usersProperties);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
