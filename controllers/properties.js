const Property = require("../models/property");

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({}).populate("owner");

    res.json(properties);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
      createdAt,
    } = req.body;

    const result = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
      createdAt,
    });

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

const getProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Property.findById(id).populate("owner");
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

const getPropertyNear = async (req, res) => {
  try {
    const { lng, lat, distance } = req.query;

    // Ensure that all required query parameters are provided
    if (!lng || !lat || !distance) {
      return res.status(400).json({ error: "Missing query parameters" });
    }

    // Convert string values to numbers
    const longitude = parseFloat(lng);
    const latitude = parseFloat(lat);
    const radius = parseInt(distance);

    // Use the $near and $maxDistance operators to find properties within the specified radius
    const properties = await Property.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: radius,
        },
      },
    });

    res.json(properties);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

module.exports = {
  createProperty,
  getProperties,
  getProperty,
  getPropertyNear,
};
