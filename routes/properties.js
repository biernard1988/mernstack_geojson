const express = require("express");

const {
  getProperties,
  createProperty,
  getProperty,
  getPropertyNear,
} = require("../controllers/properties.js");

const propertiesRouter = express.Router();

propertiesRouter.route("/").get(getProperties).post(createProperty);

propertiesRouter.route("/:id").get(getProperty);

propertiesRouter.route("/near-by").get(getPropertyNear);

module.exports = propertiesRouter;
