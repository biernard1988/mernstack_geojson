const express = require("express");

const {
  getProperties,
  createProperty,
  getProperty,
} = require("../controllers/properties");

const usersProperties = express.Router();

usersProperties.route("/").get(getProperties).post(createProperty);

usersProperties.route("/:id").get(getProperty);

module.exports = usersProperties;
